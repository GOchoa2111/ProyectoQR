using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using System;
using System.Linq;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace ProyectoQR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    // Añadimos [Authorize] a todo el controlador para que todos los endpoints
    // requieran un token JWT válido en V1. Esto protege POST /api/marcaje y
    // GET /api/marcaje/me contra accesos no autorizados.
    [Authorize]
    public class MarcajeController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly ILogger<MarcajeController> _logger;

        // Se inyecta ILogger para registrar información útil durante el proceso
        public MarcajeController(IConfiguration config, ILogger<MarcajeController> logger)
        {
            _config = config;
            _logger = logger;
        }

        [HttpPost]
        public IActionResult RegistrarMarcaje([FromBody] MarcajeDto marcaje)
        {
            // Comentarios: reestructura del flujo para garantizar atomicidad, evitar duplicados y devolver datos completos.
            if (marcaje == null || string.IsNullOrWhiteSpace(marcaje.CodigoQR))
            {
                return BadRequest(new { mensaje = "codigoQR inválido" });
            }

            try
            {
                _logger?.LogInformation("[MarcajeController] RegistrarMarcaje request: {CodigoQR}", marcaje.CodigoQR);

                using var conn = new OracleConnection(_config.GetConnectionString("OracleDb"));
                conn.Open();

                // Iniciamos transacción para evitar race conditions
                using var tx = conn.BeginTransaction();

                // 1) Buscar estudiante por CodigoQR y bloquear fila para update (FOR UPDATE)
                using var cmdBuscar = conn.CreateCommand();
                cmdBuscar.Transaction = tx;
                cmdBuscar.CommandText = "SELECT EstudianteID, Nombre, Apellido FROM ESTUDIANTES WHERE CODIGOQR = :codigoQR FOR UPDATE";
                cmdBuscar.Parameters.Add(new OracleParameter("codigoQR", OracleDbType.Varchar2) { Value = marcaje.CodigoQR });
                int estudianteId;
                string nombre = string.Empty;
                string apellido = string.Empty;
                using (var rdr = cmdBuscar.ExecuteReader())
                {
                    if (!rdr.Read())
                    {
                        tx.Rollback();
                        _logger?.LogWarning("[MarcajeController] Estudiante no encontrado para CodigoQR: {CodigoQR}", marcaje.CodigoQR);
                        return NotFound(new { mensaje = "Estudiante no encontrado" });
                    }

                    estudianteId = rdr.GetInt32(0);
                    if (!rdr.IsDBNull(1)) nombre = rdr.GetString(1);
                    if (!rdr.IsDBNull(2)) apellido = rdr.GetString(2);
                }

                var nombreCompleto = string.IsNullOrWhiteSpace(apellido) ? nombre : $"{nombre} {apellido}";

                // 2) Obtener último marcaje para este estudiante
                using var cmdUltimo = conn.CreateCommand();
                cmdUltimo.Transaction = tx;
                cmdUltimo.CommandText = @"
                    SELECT TIPO, FECHAHORA
                    FROM MARCAJES
                    WHERE ESTUDIANTEID = :id
                    ORDER BY MARCAJEID DESC
                    FETCH FIRST 1 ROWS ONLY";
                cmdUltimo.Parameters.Add(new OracleParameter("id", OracleDbType.Int32) { Value = estudianteId });

                string? ultimoTipo = null;
                DateTime? ultimoFecha = null;
                using (var r = cmdUltimo.ExecuteReader())
                {
                    if (r.Read())
                    {
                        if (!r.IsDBNull(0)) ultimoTipo = r.GetString(0);
                        if (!r.IsDBNull(1)) ultimoFecha = r.GetDateTime(1);
                    }
                }

                // 3) Idempotency: evitar marcaje duplicado en ventana corta
                const int DUP_WINDOW_SECONDS = 5;
                if (ultimoFecha.HasValue)
                {
                    var diff = DateTime.UtcNow - ultimoFecha.Value.ToUniversalTime();
                    if (diff.TotalSeconds >= 0 && diff.TotalSeconds < DUP_WINDOW_SECONDS)
                    {
                        tx.Rollback();
                        _logger?.LogInformation("[MarcajeController] Marcaje duplicado rechazado (window) para EstudianteID={Id}", estudianteId);
                        return Conflict(new { mensaje = $"Marcaje duplicado — espere {DUP_WINDOW_SECONDS} segundos" });
                    }
                }

                // 4) Calcular tipo (alternar)
                var tipoMarcaje = string.IsNullOrEmpty(ultimoTipo) ? "Ingreso" : (ultimoTipo == "Ingreso" ? "Egreso" : "Ingreso");
                _logger?.LogInformation("[MarcajeController] Tipo calculado: {Tipo} para EstudianteID={Id}", tipoMarcaje, estudianteId);

                // 5) Determinar fecha/hora de Guatemala y preparar parámetro
                TimeZoneInfo? zonaGuatemala = null;
                try { zonaGuatemala = TimeZoneInfo.FindSystemTimeZoneById("Central America Standard Time"); }
                catch { try { zonaGuatemala = TimeZoneInfo.FindSystemTimeZoneById("America/Guatemala"); } catch { zonaGuatemala = TimeZoneInfo.Utc; } }

                var fechaGuatemala = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, zonaGuatemala ?? TimeZoneInfo.Utc);
                _logger?.LogInformation("[MarcajeController] FechaHora Guatemala calculada: {Fecha}", fechaGuatemala);

                // 6) Insertar marcaje con parámetros tipados
                using var cmdInsert = conn.CreateCommand();
                cmdInsert.Transaction = tx;
                cmdInsert.CommandText = "INSERT INTO MARCAJES (ESTUDIANTEID, TIPO, FECHAHORA) VALUES (:id, :tipo, :fecha)";
                cmdInsert.Parameters.Add(new OracleParameter("id", OracleDbType.Int32) { Value = estudianteId });
                cmdInsert.Parameters.Add(new OracleParameter("tipo", OracleDbType.Varchar2) { Value = tipoMarcaje });
                // FECHAHORA es TIMESTAMP(6) en la tabla; enviamos DateTime con hora local de Guatemala
                cmdInsert.Parameters.Add(new OracleParameter("fecha", OracleDbType.TimeStamp) { Value = fechaGuatemala });
                cmdInsert.ExecuteNonQuery();

                tx.Commit();

                _logger?.LogInformation("[MarcajeController] Insert ejecutado para EstudianteID={Id}, Tipo={Tipo}", estudianteId, tipoMarcaje);

                // 7) Responder con datos completos
                return Ok(new
                {
                    mensaje = $"Marcaje validado: {tipoMarcaje} {nombreCompleto}",
                    tipo = tipoMarcaje,
                    estudianteId = estudianteId,
                    nombre = nombreCompleto,
                    fecha = fechaGuatemala.ToString("o")
                });
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "[MarcajeController] Error al registrar marcaje: {Message}", ex.Message);
                return StatusCode(500, new { mensaje = $"Error al registrar marcaje: {ex.Message}" });
            }

        }

    // Endpoint para obtener los marcajes del estudiante autenticado
    //[Authorize]
    [HttpGet("me")]
    public IActionResult ObtenerMisMarcajes()
    {
        try
        {
            // Obtener el ID del estudiante desde las claims del token (sub / nameid)
            var sub = User.FindFirstValue(JwtRegisteredClaimNames.Sub)
                      ?? User.FindFirstValue(ClaimTypes.NameIdentifier)
                      ?? User.FindFirstValue("nameid");

            if (string.IsNullOrWhiteSpace(sub) || !int.TryParse(sub, out var estudianteId))
            {
                // Logear claims para diagnóstico
                try { var all = string.Join(";", User.Claims.Select(c => $"{c.Type}={c.Value}")); _logger?.LogWarning("[MarcajeController] Claim 'sub' inválida. Claims: {0}", all); } catch {}
                return Unauthorized("Token inválido o no contiene 'sub' con estudianteId");
            }

            var resultado = new List<MarcajeHistorialDTO>();

            using var conn = new OracleConnection(_config.GetConnectionString("OracleDb"));
            conn.Open();

            using var cmd = conn.CreateCommand();
            cmd.CommandText = @"
                SELECT E.NumeroCarnet, E.Nombre, E.Apellido, M.FECHAHORA, M.TIPO
                FROM MARCAJES M
                JOIN ESTUDIANTES E ON M.ESTUDIANTEID = E.ESTUDIANTEID
                WHERE M.ESTUDIANTEID = :id
                ORDER BY M.FECHAHORA DESC";
            cmd.Parameters.Add(new OracleParameter("id", OracleDbType.Int32) { Value = estudianteId });

            using var rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                var nombre = rdr["NOMBRE"]?.ToString();
                var apellido = rdr["APELLIDO"]?.ToString();
                resultado.Add(new MarcajeHistorialDTO
                {
                    NumeroCarnet = rdr["NUMEROCARNET"]?.ToString(),
                    NombreCompleto = string.IsNullOrWhiteSpace(apellido) ? nombre : $"{nombre} {apellido}",
                    FechaHora = rdr.IsDBNull(rdr.GetOrdinal("FECHAHORA")) ? DateTime.MinValue : rdr.GetDateTime(rdr.GetOrdinal("FECHAHORA")),
                    Tipo = rdr["TIPO"]?.ToString()
                });
            }

            return Ok(resultado);
        }
        catch (Exception ex)
        {
            _logger?.LogError(ex, "[MarcajeController] Error al obtener mis marcajes: {Message}", ex.Message);
            return StatusCode(500, new { mensaje = $"Error al obtener mis marcajes: {ex.Message}" });
        }
    }

    }

    public class MarcajeDto
    {
        public string? CodigoQR { get; set; }
        public string? Tipo { get; set; } // "Ingreso" o "Egreso"
    }
}

