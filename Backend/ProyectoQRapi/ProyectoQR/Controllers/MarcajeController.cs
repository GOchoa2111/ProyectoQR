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

                string tipoMarcaje;
                if (ultimoTipoObj == null)
                    tipoMarcaje = "Ingreso";
                else
                    tipoMarcaje = ultimoTipoObj.ToString() == "Ingreso" ? "Egreso" : "Ingreso";

                
                var zonaGuatemala = TimeZoneInfo.FindSystemTimeZoneById("Central America Standard Time");
                var fechaHoraGuatemala = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, zonaGuatemala);

                
                using var cmdInsertar = conn.CreateCommand();
                cmdInsertar.CommandText = "INSERT INTO Marcajes (EstudianteID, Tipo, FechaHora) VALUES (:id, :tipo, :fechaHora)";
                cmdInsertar.Parameters.Add(new OracleParameter("id", estudianteID));
                cmdInsertar.Parameters.Add(new OracleParameter("tipo", tipoMarcaje));
                cmdInsertar.Parameters.Add(new OracleParameter("fechaHora", fechaHoraGuatemala));
                cmdInsertar.ExecuteNonQuery();

               
                using var cmdNombre = conn.CreateCommand();
                cmdNombre.CommandText = "SELECT Nombre, Apellido FROM Estudiantes WHERE EstudianteID = :id";
                cmdNombre.Parameters.Add(new OracleParameter("id", estudianteID));
                using var reader = cmdNombre.ExecuteReader();
                string nombreCompleto = "";
                if (reader.Read())
                    nombreCompleto = $"{reader.GetString(0)} {reader.GetString(1)}";

                return Ok(new { mensaje = $"Marcaje validado: {tipoMarcaje} {nombreCompleto}" });
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
    }
}

