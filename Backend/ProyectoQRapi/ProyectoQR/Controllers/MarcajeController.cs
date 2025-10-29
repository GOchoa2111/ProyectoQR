using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using System;
using System.Linq;
using Microsoft.Extensions.Logging;

namespace ProyectoQR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
            try
            {
        // LOG: mostrar el DTO recibido para depuración
        _logger?.LogInformation("[MarcajeController] RegistrarMarcaje request: {CodigoQR}", marcaje?.CodigoQR);
                using var conn = new OracleConnection(_config.GetConnectionString("OracleDb"));
                conn.Open();

                
                using var cmdBuscar = conn.CreateCommand();
                cmdBuscar.CommandText = "SELECT EstudianteID FROM Estudiantes WHERE CodigoQR = :codigoQR";
                // Evitar posible null reference si el DTO viene null
                var codigoParametro = marcaje?.CodigoQR ?? string.Empty;
                cmdBuscar.Parameters.Add(new OracleParameter("codigoQR", codigoParametro));
                var estudianteID = cmdBuscar.ExecuteScalar();

                if (estudianteID == null)
                {
                    _logger?.LogWarning("[MarcajeController] Estudiante no encontrado para CodigoQR: {CodigoQR}", marcaje?.CodigoQR);
                    return NotFound("Estudiante no encontrado");
                }

                               using var cmdUltimo = conn.CreateCommand();
                cmdUltimo.CommandText = @"
            SELECT Tipo FROM Marcajes 
            WHERE EstudianteID = :id 
            ORDER BY MarcajeID DESC 
            FETCH FIRST 1 ROWS ONLY";
                cmdUltimo.Parameters.Add(new OracleParameter("id", estudianteID));
                var ultimoTipoObj = cmdUltimo.ExecuteScalar();

                string tipoMarcaje;
                if (ultimoTipoObj == null)
                    tipoMarcaje = "Ingreso";
                else
                    tipoMarcaje = ultimoTipoObj.ToString() == "Ingreso" ? "Egreso" : "Ingreso";

                // LOG: tipo calculado (antes del insert)
                _logger?.LogInformation("[MarcajeController] Tipo calculado: {Tipo}", tipoMarcaje);

                
                // Determinar la zona horaria de Guatemala de forma robusta:
                // en Windows el id suele ser "Central America Standard Time", en Linux/IANA "America/Guatemala".
                TimeZoneInfo? zonaGuatemala = null;
                var candidatos = new[] { "Central America Standard Time", "America/Guatemala" };
                foreach (var id in candidatos)
                {
                    try
                    {
                        zonaGuatemala = TimeZoneInfo.FindSystemTimeZoneById(id);
                        break;
                    }
                    catch { }
                }
                // Si no encontramos una zona específica, intentamos una heurística buscando "Guatemala"
                if (zonaGuatemala == null)
                {
                    try
                    {
                        zonaGuatemala = TimeZoneInfo.GetSystemTimeZones().FirstOrDefault(t => t.Id.IndexOf("Guatemala", StringComparison.OrdinalIgnoreCase) >= 0);
                    }
                    catch { }
                }
                // Fallback a UTC si no hay coincidencias
                if (zonaGuatemala == null)
                    zonaGuatemala = TimeZoneInfo.Utc;

                var fechaHoraGuatemala = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, zonaGuatemala);

                // LOG: mostrar la fecha/hora que se insertará
                _logger?.LogInformation("[MarcajeController] FechaHora Guatemala (UTC convertida): {Fecha}", fechaHoraGuatemala);

                
                using var cmdInsertar = conn.CreateCommand();
                cmdInsertar.CommandText = "INSERT INTO MARCAJES (ESTUDIANTEID, TIPO, FECHAHORA) VALUES (:id, :tipo, :fechaHora)";
                var pId = new OracleParameter("id", Oracle.ManagedDataAccess.Client.OracleDbType.Int32) { Value = Convert.ToInt32(estudianteID) };
                var pTipo = new OracleParameter("tipo", Oracle.ManagedDataAccess.Client.OracleDbType.Varchar2) { Value = tipoMarcaje ?? "" };
                var pFecha = new OracleParameter("fechaHora", Oracle.ManagedDataAccess.Client.OracleDbType.TimeStamp) { Value = fechaHoraGuatemala };
                cmdInsertar.Parameters.Add(pId);
                cmdInsertar.Parameters.Add(pTipo);
                cmdInsertar.Parameters.Add(pFecha);
                cmdInsertar.ExecuteNonQuery();

                _logger?.LogInformation("[MarcajeController] Insert ejecutado para EstudianteID={EstudianteId}, Tipo={Tipo}", estudianteID, tipoMarcaje);

               
                using var cmdNombre = conn.CreateCommand();
                cmdNombre.CommandText = "SELECT Nombre, Apellido FROM Estudiantes WHERE EstudianteID = :id";
                cmdNombre.Parameters.Add(new OracleParameter("id", estudianteID));
                using var reader = cmdNombre.ExecuteReader();
                string nombreCompleto = "";
                if (reader.Read())
                    nombreCompleto = $"{reader.GetString(0)} {reader.GetString(1)}";

                // Devolvemos además tipo/nombre/fecha para que el cliente pueda mostrar exactamente
                // lo que el servidor determinó (útil para depuración y UX)
                return Ok(new
                {
                    mensaje = $"Marcaje validado: {tipoMarcaje} {nombreCompleto}",
                    tipo = tipoMarcaje,
                    nombre = nombreCompleto,
                    fecha = fechaHoraGuatemala.ToString("o") // ISO 8601
                });
            }
            catch (Exception ex)
            {
                // LOG: detalle del error en servidor
                _logger?.LogError(ex, "[MarcajeController] Error al registrar marcaje: {Message}", ex.Message);
                return StatusCode(500, $"Error al registrar marcaje: {ex.Message}");
            }
        }

    }

    public class MarcajeDto
    {
        public string? CodigoQR { get; set; }
        public string? Tipo { get; set; } // "Ingreso" o "Egreso"
    }
}

