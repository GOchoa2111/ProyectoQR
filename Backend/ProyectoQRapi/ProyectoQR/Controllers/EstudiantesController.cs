using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using QRCoder;
using System;
using System.Linq.Expressions;
using System.Collections.Generic; // Agregado para List<T>
using System.Linq; // Agregado para .Any()

namespace ProyectoQR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstudiantesController : ControllerBase
    {
        private readonly IConfiguration _config;

        public EstudiantesController(IConfiguration config)
        {
            _config = config;
        }

        [HttpPost]
        public IActionResult RegistrarEstudiante([FromBody] EstudianteDto estudiante)
        {
            try
            {
                string qrCode = Guid.NewGuid().ToString();

                using var conn = new OracleConnection(_config.GetConnectionString("OracleDb"));
                conn.Open();

                using var cmd = conn.CreateCommand();
                cmd.CommandText = @"
                    INSERT INTO Estudiantes 
                    (Nombre, Apellido, CodigoQR, NumeroCarnet, Telefono, Direccion, Anio, Sede) 
                    VALUES 
                    (:nombre, :apellido, :codigoQR, :numeroCarnet, :telefono, :direccion, :anio, :sede)";
                cmd.Parameters.Add(new OracleParameter("nombre", estudiante.Nombre));
                cmd.Parameters.Add(new OracleParameter("apellido", estudiante.Apellido));
                cmd.Parameters.Add(new OracleParameter("codigoQR", qrCode));
                cmd.Parameters.Add(new OracleParameter("numeroCarnet", estudiante.NumeroCarnet));
                cmd.Parameters.Add(new OracleParameter("telefono", estudiante.Telefono));
                cmd.Parameters.Add(new OracleParameter("direccion", estudiante.Direccion));
                cmd.Parameters.Add(new OracleParameter("anio", estudiante.Anio));
                cmd.Parameters.Add(new OracleParameter("sede", estudiante.Sede));
                cmd.ExecuteNonQuery();

                var qrGenerator = new QRCodeGenerator();
                var qrCodeData = qrGenerator.CreateQrCode(qrCode, QRCodeGenerator.ECCLevel.Q);
                var qrCodeImage = new Base64QRCode(qrCodeData).GetGraphic(20);

                return Ok(new
                {
                    CodigoQR = qrCode,
                    ImagenQR = $"data:image/png;base64,{qrCodeImage}"
                });

            }
            catch (OracleException ex) when (ex.Number == 1) // ORA-00001: restricción única violada
            {
                return BadRequest("Ya existe un estudiante con ese número de carnet.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al registrar estudiante: {ex.Message}");
            }
        }

        [HttpGet("{codigoQR}")]
        public IActionResult ObtenerEstudiantePorQR(string codigoQR)
        {
            try
            {
                using var conn = new OracleConnection(_config.GetConnectionString("OracleDb"));
                conn.Open();

                using var cmd = conn.CreateCommand();
                cmd.CommandText = @"
                    SELECT EstudianteID, Nombre, Apellido, NumeroCarnet, Telefono, Direccion, Anio, Sede 
                    FROM Estudiantes 
                    WHERE CodigoQR = :codigoQR";
                cmd.Parameters.Add(new OracleParameter("codigoQR", codigoQR));

                using var reader = cmd.ExecuteReader();
                if (reader.Read())
                {
                    var estudiante = new
                    {
                        EstudianteID = reader.GetInt32(0),
                        Nombre = reader.GetString(1),
                        Apellido = reader.GetString(2),
                        NumeroCarnet = reader.GetString(3),
                        Telefono = reader.GetString(4),
                        Direccion = reader.GetString(5),
                        Anio = reader.GetString(6),
                        Sede = reader.GetString(7)
                    };
                    return Ok(estudiante);
                }
                else
                {
                    return NotFound("Estudiante no encontrado");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al obtener estudiante: {ex.Message}");
            }
        }

        // NUEVO ENDPOINT: GET para obtener el historial de marcaje
        // Ruta: GET /api/Estudiantes/marcaje-historial
        [HttpGet("marcaje-historial")]
        public IActionResult ObtenerHistorialMarcaje()
        {
            try
            {
                var historial = new List<MarcajeHistorialDTO>();
                using var conn = new OracleConnection(_config.GetConnectionString("OracleDb"));
                conn.Open();

                using var cmd = conn.CreateCommand();
                // Realiza JOIN entre MARCAJE y ESTUDIANTES para obtener nombre y carnet.
                cmd.CommandText = @"
                    SELECT 
                        E.Nombre, 
                        E.Apellido, 
                        E.NumeroCarnet, 
                        M.FECHAHORA, 
                        M.TIPO 
                    FROM MARCAJES M 
                    JOIN Estudiantes E ON M.ESTUDIANTEID = E.ESTUDIANTEID 
                    WHERE ROWNUM <= 200 -- Limita a 200 registros recientes
                    ORDER BY M.FECHAHORA DESC";

                using var reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    // Mapeo de resultados
                    var nombre = reader["NOMBRE"].ToString();
                    var apellido = reader["APELLIDO"].ToString();

                    historial.Add(new MarcajeHistorialDTO
                    {
                        NumeroCarnet = reader["NUMEROCARNET"].ToString(),
                        NombreCompleto = $"{nombre} {apellido}",
                        FechaHora = reader.GetDateTime(reader.GetOrdinal("FECHAHORA")),
                        Tipo = reader["TIPO"].ToString()
                    });
                }

                if (!historial.Any())
                {
                    return NotFound(new { message = "No se encontraron registros de marcaje." });
                }
                return Ok(historial);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al obtener el historial de marcaje: {ex.Message}");
            }
        }
    }
}

// DTO para la respuesta del Historial de Marcaje
public class MarcajeHistorialDTO
{
    public string? NumeroCarnet { get; set; }
    public string? NombreCompleto { get; set; }
    public DateTime FechaHora { get; set; }
    public string? Tipo { get; set; }
}

public class EstudianteDto
{
    public string? Nombre { get; set; }
    public string? Apellido { get; set; }
    public string? NumeroCarnet { get; set; }
    public string? Telefono { get; set; }
    public string? Direccion { get; set; }
    public string? Anio { get; set; }
    public string? Sede { get; set; }
}
