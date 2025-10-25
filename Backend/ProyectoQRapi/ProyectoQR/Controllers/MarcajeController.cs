using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using System;

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

              
                using var cmdBuscar = conn.CreateCommand();
                cmdBuscar.CommandText = "SELECT EstudianteID FROM Estudiantes WHERE CodigoQR = :codigoQR";
                cmdBuscar.Parameters.Add(new OracleParameter("codigoQR", marcaje.CodigoQR));
                var estudianteID = cmdBuscar.ExecuteScalar();

                if (estudianteID == null)
                    return NotFound("Estudiante no encontrado");

                
                using var cmdUltimo = conn.CreateCommand();
                cmdUltimo.CommandText = @"
            SELECT Tipo FROM Marcajes 
            WHERE EstudianteID = :id 
            ORDER BY MarcajeID DESC 
            FETCH FIRST 1 ROWS ONLY";
                cmdUltimo.Parameters.Add(new OracleParameter("id", estudianteID));
                var ultimoTipoObj = cmdUltimo.ExecuteScalar();

                // Si el cliente envía un Tipo explícito lo respetamos (por ejemplo desde la app móvil),
                // si no se envía, alternamos entre Ingreso/Egreso según el último marcaje.
                string tipoMarcaje;
                if (!string.IsNullOrWhiteSpace(marcaje.Tipo))
                {
                    tipoMarcaje = marcaje.Tipo!;
                }
                else
                {
                    if (ultimoTipoObj == null)
                        tipoMarcaje = "Ingreso";
                    else
                        tipoMarcaje = ultimoTipoObj.ToString() == "Ingreso" ? "Egreso" : "Ingreso";
                }

                // Fecha y hora: si el cliente envía FechaHora, la usamos (para reflejar la hora local del dispositivo).
                // Si no se envía, por compatibilidad usamos la hora del servidor convertida a la zona de Guatemala.
                DateTime fechaHoraToInsert;
                if (marcaje.FechaHora != null && marcaje.FechaHora != default)
                {
                    fechaHoraToInsert = marcaje.FechaHora.Value;
                }
                else
                {
                    var zonaGuatemala = TimeZoneInfo.FindSystemTimeZoneById("Central America Standard Time");
                    fechaHoraToInsert = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, zonaGuatemala);
                }

                using var cmdInsertar = conn.CreateCommand();
                cmdInsertar.CommandText = "INSERT INTO Marcajes (EstudianteID, Tipo, FechaHora) VALUES (:id, :tipo, :fechaHora)";
                cmdInsertar.Parameters.Add(new OracleParameter("id", estudianteID));
                cmdInsertar.Parameters.Add(new OracleParameter("tipo", tipoMarcaje));
                cmdInsertar.Parameters.Add(new OracleParameter("fechaHora", fechaHoraToInsert));
                cmdInsertar.ExecuteNonQuery();

               
                using var cmdNombre = conn.CreateCommand();
                cmdNombre.CommandText = "SELECT Nombre, Apellido FROM Estudiantes WHERE EstudianteID = :id";
                cmdNombre.Parameters.Add(new OracleParameter("id", estudianteID));
                using var reader = cmdNombre.ExecuteReader();
                string nombreCompleto = "";
                if (reader.Read())
                    nombreCompleto = $"{reader.GetString(0)} {reader.GetString(1)}";

                // Devolvemos un mensaje claro incluyendo el nombre y el tipo de marcaje.
                return Ok(new { mensaje = $"Registro exitoso {nombreCompleto} {tipoMarcaje}", tipo = tipoMarcaje, nombre = nombreCompleto, fecha = fechaHoraToInsert });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al registrar marcaje: {ex.Message}");
            }
        }

    }

    public class MarcajeDto
    {
        public string? CodigoQR { get; set; }
        public string? Tipo { get; set; } // "Ingreso" o "Egreso"
        // Opcional: fecha y hora local del cliente en formato ISO. Si se provee, el servidor la usará
        // tal cual para registrar el marcaje (por ejemplo: "2025-10-25T11:00:00").
        public DateTime? FechaHora { get; set; }
    }
}

