using Microsoft.AspNetCore.Mvc;
using ProyectoQR.Service;
using Microsoft.AspNetCore.Authorization;

namespace ProyectoQR.Controllers
{
    [Route("[controller]")]
    [ApiController]
    // Protegemos el endpoint que envía correos (evitar spam desde clientes anonimos).
    [Authorize]
    public class CorreoController : ControllerBase
    {
        private readonly IEmailService _emailService;
        private readonly IConfiguration _config;
        private readonly ILogger<CorreoController> _logger;

        public CorreoController(IEmailService emailService, IConfiguration config, ILogger<CorreoController> logger)
        {
            _emailService = emailService;
            _config = config;
            _logger = logger;
        }

        [HttpPost("enviar")]
        public async Task<IActionResult> EnviarQR([FromBody] CorreoQrDto dto)
        {
            try
            {
                _logger.LogInformation("[Correo] Intento de envío de QR a {email} (nombre={nombre} {apellido})", dto.Correo, dto.Nombre, dto.Apellido);

                // 1) Validar que el email esté registrado en la base de datos para evitar envíos a direcciones no existentes
                using var conn = new Oracle.ManagedDataAccess.Client.OracleConnection(_config.GetConnectionString("OracleDb"));
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT COUNT(1) FROM Estudiantes WHERE LOWER(EMAIL) = LOWER(:e)";
                    cmd.Parameters.Add(new Oracle.ManagedDataAccess.Client.OracleParameter("e", dto.Correo));
                    var count = Convert.ToInt32(cmd.ExecuteScalar());
                    if (count == 0)
                    {
                        _logger.LogWarning("[Correo] El correo {email} no está registrado. Abortando envío.", dto.Correo);
                        return NotFound(new { mensaje = "El correo no está registrado en el sistema." });
                    }
                }

                // 2) Componer contenido simple y enviar usando IEmailService.
                var subject = "Tu código QR de registro";
                var body = $@"<h3>Hola {System.Web.HttpUtility.HtmlEncode(dto.Nombre)} {System.Web.HttpUtility.HtmlEncode(dto.Apellido)}</h3>
                              <p>Adjuntamos su código QR de registro.</p>";

                if (!string.IsNullOrWhiteSpace(dto.ImagenQR))
                {
                    await _emailService.SendAsync(dto.Correo, subject, body, dto.ImagenQR, "codigoQR.png");
                }
                else
                {
                    await _emailService.SendAsync(dto.Correo, subject, body);
                }

                _logger.LogInformation("[Correo] Envío a {email} completado.", dto.Correo);
                return Ok(new { mensaje = "Correo enviado correctamente." });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[Correo] Error al enviar QR a {email}", dto?.Correo);
                return StatusCode(500, new { mensaje = $"Error interno: {ex.Message}" });
            }
        }
    }

    public class CorreoQrDto
    {
        public string Correo { get; set; } = string.Empty;
        public string Nombre { get; set; } = string.Empty;
        public string Apellido { get; set; } = string.Empty;
        public string ImagenQR { get; set; } = string.Empty;
    }
}
