using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;

namespace ProyectoQR.Controllers
{
    [Route("[controller]")]
    [ApiController]
    // El historial contiene información sensible de marcajes/acciones;
    // protegemos el controlador para que sólo usuarios autenticados puedan acceder.
    [Authorize]
    public class HistorialController : ControllerBase
    {
        private readonly IConfiguration _config;

        public HistorialController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet]
        public IActionResult ObtenerHistorial()
        {
            var historial = new List<object>();

            try
            {
                using var conn = new OracleConnection(_config.GetConnectionString("OracleDb"));
                conn.Open();

                using var cmd = conn.CreateCommand();
                cmd.CommandText = "SELECT ID_Historial, Accion, Descripcion, Fecha FROM HistorialEstudiantes ORDER BY Fecha DESC";

                using var reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    historial.Add(new
                    {
                        ID_Historial = reader.GetInt32(0),
                        Accion = reader.GetString(1),
                        Descripcion = reader.GetString(2),
                        Fecha = reader.GetDateTime(3)
                    });
                }

                return Ok(historial);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al obtener historial: {ex.Message}");
            }
        }
    }
}
