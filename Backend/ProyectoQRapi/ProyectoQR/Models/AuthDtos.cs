using System.ComponentModel.DataAnnotations;
namespace ProyectoQR.Models
{
    public class AuthDtos
    {
        public sealed class LoginRequest
        {
            [Required]
            public string Usuario { get; set; } = default!;
            [Required]
            public string Contrasena { get; set; } = default!;
        }

        public sealed class LoginResponse
        {
            public string AccessToken { get; set; } = default!;
            public int ExpiresIn { get; set; }       // segundos
            public string Usuario { get; set; } = default!;
            public string Rol { get; set; } = default!;
        }
    }
}
