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
    }

    public class MarcajeDto
    {
        public string? CodigoQR { get; set; }
        public string? Tipo { get; set; } // "Ingreso" o "Egreso"
    }
}

