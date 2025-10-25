using Microsoft.AspNetCore.Mvc;
using ProyectoQR.Service;

namespace ProyectoQR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CorreoController : ControllerBase
    {
        private readonly CorreoService _correoService;

        public CorreoController(CorreoService correoService)
        {
            _correoService = correoService;
        }

        [HttpPost("enviar")]
        public IActionResult EnviarQR([FromBody] CorreoQrDto dto)
        {
            try
            {
                _correoService.EnviarQrPorCorreo(dto.Correo, dto.Nombre, dto.Apellido, dto.ImagenQR);
                return Ok(new { mensaje = "Correo enviado correctamente." });
            }
            catch (Exception ex)
            {
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

