using ProyectoQR.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProyectoQR.Service
{
    public interface IEstudiantesService
    {
        Task<int> CrearAsync(EstudianteDto dto);
        Task<EstudianteDto?> ObtenerAsync(int id);
        Task<IEnumerable<EstudianteDto>> ListarAsync(string? usuarioFilter = null, string? nombreFilter = null, string? rolFilter = null, int? limit = null, int? offset = null);
        Task ActualizarAsync(int id, EstudianteDto dto);
        Task EliminarAsync(int id, bool physical = false);
    }
}
