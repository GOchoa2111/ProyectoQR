using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Oracle.ManagedDataAccess.Client;
using ProyectoQR.Service;
using ProyectoQR.Models;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace ProyectoQR.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class GestionEstudiantesController : ControllerBase
    {
        private readonly IEstudiantesService _service;
        private readonly ILogger<GestionEstudiantesController> _logger;

        public GestionEstudiantesController(IEstudiantesService service, ILogger<GestionEstudiantesController> logger)
        {
            _service = service;
            _logger = logger;
        }

        // POST: api/GestionEstudiantes
        // Crear un estudiante (ADMIN)
        [HttpPost]
        [Authorize(Roles = "ADMIN")]
        public async Task<IActionResult> Crear([FromBody] EstudianteDto dto)
        {
            try
            {
                var newId = await _service.CrearAsync(dto);
                return CreatedAtAction(nameof(Obtener), new { id = newId }, new { EstudianteID = newId });
            }
            catch (OracleException ex) when (ex.Number == 1)
            {
                // Unique constraint violation
                _logger.LogWarning(ex, "Constraint violation creating estudiante");
                return Conflict(new { message = "Registro duplicado: verifique usuario/carnet." });
            }
            catch (OracleException ex)
            {
                _logger.LogError(ex, "Oracle error creating estudiante");
                return BadRequest(new { message = ex.Message });
            }
            catch (System.Exception ex)
            {
                _logger.LogError(ex, "Error creando estudiante");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        // GET: api/GestionEstudiantes
        [HttpGet]
        public async Task<IActionResult> Listar([FromQuery] string? usuarioFilter = null, [FromQuery] string? nombreFilter = null,
            [FromQuery] string? rolFilter = null, [FromQuery] int? limit = null, [FromQuery] int? offset = null)
        {
            try
            {
                var items = await _service.ListarAsync(usuarioFilter, nombreFilter, rolFilter, limit, offset);
                return Ok(items);
            }
            catch (OracleException ex)
            {
                _logger.LogError(ex, "Oracle error listing estudiantes");
                return BadRequest(new { message = ex.Message });
            }
            catch (System.Exception ex)
            {
                _logger.LogError(ex, "Error listing estudiantes");
                return StatusCode(500, new { message = ex.Message });
            }
        }

        // GET: api/GestionEstudiantes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Obtener(int id)
        {
            try
            {
                var dto = await _service.ObtenerAsync(id);
                if (dto == null) return NotFound();
                return Ok(dto);
            }
            catch (OracleException ex)
            {
                _logger.LogError(ex, "Oracle error getting estudiante {Id}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (System.Exception ex)
            {
                _logger.LogError(ex, "Error getting estudiante {Id}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        // PUT: api/GestionEstudiantes/5
        [HttpPut("{id}")]
        [Authorize(Roles = "ADMIN")]
        public async Task<IActionResult> Actualizar(int id, [FromBody] EstudianteDto dto)
        {
            try
            {
                await _service.ActualizarAsync(id, dto);
                return NoContent();
            }
            catch (OracleException ex)
            {
                _logger.LogError(ex, "Oracle error updating estudiante {Id}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (System.Exception ex)
            {
                _logger.LogError(ex, "Error updating estudiante {Id}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }

        // DELETE: api/GestionEstudiantes/5?physical=true
        [HttpDelete("{id}")]
        [Authorize(Roles = "ADMIN")]
        public async Task<IActionResult> Eliminar(int id, [FromQuery] bool physical = false)
        {
            try
            {
                await _service.EliminarAsync(id, physical);
                return NoContent();
            }
            catch (OracleException ex)
            {
                _logger.LogError(ex, "Oracle error deleting estudiante {Id}", id);
                return BadRequest(new { message = ex.Message });
            }
            catch (System.Exception ex)
            {
                _logger.LogError(ex, "Error deleting estudiante {Id}", id);
                return StatusCode(500, new { message = ex.Message });
            }
        }
    }
}
