using Microsoft.AspNetCore.Mvc;
using ProyectoQR.Dtos;
using Microsoft.AspNetCore.Authorization;

namespace ProyectoQR.Controllers
{
    // Añade el atributo ApiController para habilitar validación automática del modelo
    [ApiController]
    [Route("[controller]")]
    // Protegemos el envío de correos para evitar uso abusivo desde clientes no autenticados.
    [Authorize]
    public class EmailController : ControllerBase
    {
        // Inyecta IEmailService para que se pueda usar en el controlador
        private readonly IEmailService _email;

        // Constructor que recibe el servicio de correo
        public EmailController(IEmailService email)
        {
            _email = email;
        }

        // Endpoint para enviar el correo
        [HttpPost("enviar-correo")]
        public async Task<IActionResult> EnviarCorreo([FromBody] CorreoDto correoDto)
        {
            try
            {
                // Validaciones mínimas
                if (string.IsNullOrWhiteSpace(correoDto.Email) || string.IsNullOrWhiteSpace(correoDto.Asunto) || string.IsNullOrWhiteSpace(correoDto.Cuerpo))
                    return BadRequest("Todos los campos (correo electrónico, asunto y cuerpo) son obligatorios.");

                // Enviar correo
                await _email.SendAsync(correoDto.Email, correoDto.Asunto, correoDto.Cuerpo);

                return Ok(new { message = "Correo enviado correctamente." });
            }
            catch (Exception ex)
            {
                // Captura cualquier error y responde con el mensaje de error
                return StatusCode(500, $"Error al enviar el correo: {ex.Message}");
            }
        }
    }
}
