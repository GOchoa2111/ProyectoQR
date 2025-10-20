using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using System.Security.Claims;

namespace ProyectoQR.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class MarcajeController : ControllerBase
    {
        private readonly IConfiguration _config;

        public MarcajeController(IConfiguration config)
        {
            _config = config;
        }

        [HttpPost]
        public IActionResult RegistrarMarcaje([FromBody] MarcajeDto marcaje)
        {
            try
            {
                using var conn = new OracleConnection(_config.GetConnectionString("OracleDb"));
                conn.Open();

                // Buscar EstudianteID por Código QR
                using var cmdBuscar = conn.CreateCommand();
                cmdBuscar.CommandText = "SELECT EstudianteID FROM Estudiantes WHERE CodigoQR = :codigoQR";
                cmdBuscar.Parameters.Add(new OracleParameter("codigoQR", marcaje.CodigoQR));
                var estudianteID = cmdBuscar.ExecuteScalar();

                if (estudianteID == null)
                    return NotFound("Estudiante no encontrado");

                // Insertar marcaje
                using var cmdInsertar = conn.CreateCommand();
                cmdInsertar.CommandText = "INSERT INTO Marcajes (EstudianteID, Tipo) VALUES (:id, :tipo)";
                cmdInsertar.Parameters.Add(new OracleParameter("id", estudianteID));
                cmdInsertar.Parameters.Add(new OracleParameter("tipo", marcaje.Tipo));
                cmdInsertar.ExecuteNonQuery();

                //return Ok("Marcaje registrado correctamente");
                return Ok(new { mensaje = "Marcaje registrado correctamente" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al registrar marcaje: {ex.Message}");
            }
        }

        //Endpoint para consultar historial de estudiante que hace login

        [HttpGet("me")]
        [Authorize]
        public IActionResult GetMyMarcajes()
        {
            try
            {
                // Intentar obtener un claim identificador desde el token
                var idClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value
                              ?? User.FindFirst("sub")?.Value
                              ?? User.FindFirst("usuario")?.Value
                              ?? User.FindFirst("name")?.Value; // fallbacks

                if (string.IsNullOrEmpty(idClaim))
                    return Unauthorized("No se encontró identificador en el token.");

                var marcajes = new List<object>();

                using var conn = new OracleConnection(_config.GetConnectionString("OracleDb"));
                conn.Open();

                // 1) Intentar encontrar EstudianteID por si el claim corresponde a USUARIO o NUMEROCARNET.
                int? estudianteId = null;
                using (var cmdFind = conn.CreateCommand())
                {
                    cmdFind.CommandText = @"
                SELECT EstudianteID
                FROM Estudiantes
                WHERE USUARIO = :ident
                   OR NUMEROCARNET = :ident
                   OR TO_CHAR(EstudianteID) = :ident"; // por si token trae el id numérico
                    cmdFind.Parameters.Add(new OracleParameter("ident", idClaim));

                    using var r = cmdFind.ExecuteReader();
                    if (r.Read())
                    {
                        estudianteId = r.IsDBNull(0) ? (int?)null : Convert.ToInt32(r.GetValue(0));
                    }
                }

                if (estudianteId == null)
                {
                    return NotFound("Estudiante no encontrado para el identificador del token.");
                }

                // 2) Opcional: seguridad adicional (si quieres prohibir a estudiante ver otros IDs),
                // se puede comprobar el rol del claim aquí y aplicar reglas. En este endpoint
                // usamos el claim directo para resolver el EstudianteID, por lo que devolvemos solo sus marcajes.

                // 3) Consultar marcajes para el EstudianteID
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT m.MARCAJEID, e.NUMEROCARNET, e.NOMBRE, e.APELLIDO, m.TIPO, m.FECHAHORA
                FROM MARCAJES m
                JOIN ESTUDIANTES e ON m.ESTUDIANTEID = e.ESTUDIANTEID
                WHERE m.ESTUDIANTEID = :id
                ORDER BY m.FECHAHORA DESC";
                    cmd.Parameters.Add(new OracleParameter("id", estudianteId));

                    using var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        marcajes.Add(new
                        {
                            MarcajeId = reader.IsDBNull(0) ? (int?)null : Convert.ToInt32(reader.GetValue(0)),
                            NumeroCarnet = reader.IsDBNull(1) ? null : reader.GetString(1),
                            NombreCompleto = $"{(reader.IsDBNull(2) ? "" : reader.GetString(2))} {(reader.IsDBNull(3) ? "" : reader.GetString(3))}".Trim(),
                            Tipo = reader.IsDBNull(4) ? null : reader.GetString(4),
                            FechaHora = reader.IsDBNull(5) ? (DateTime?)null : reader.GetDateTime(5)
                        });
                    }
                }

                return Ok(marcajes);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al obtener marcajes: {ex.Message}");
            }
        }
    }



    public class MarcajeDto
    {
        public string? CodigoQR { get; set; }
        public string? Tipo { get; set; } // "Ingreso" o "Egreso"
    }



}

