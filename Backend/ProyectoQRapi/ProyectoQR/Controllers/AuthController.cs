using Microsoft.AspNetCore.Mvc;
using ProyectoQR.Data;
using ProyectoQR.Service.tokens;
using ProyectoQR.Service.password;
using static ProyectoQR.Models.AuthDtos;

namespace ProyectoQR.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class AuthController : ControllerBase
{
    private readonly IAuthRepository _repo;
    private readonly IPasswordHasher _hasher;
    private readonly ITokenService _tokens;

    public AuthController(IAuthRepository repo, IPasswordHasher hasher, ITokenService tokens)
    {
        _repo = repo;
        _hasher = hasher;
        _tokens = tokens;
    }

    [HttpPost("login")]
    [ProducesResponseType(typeof(LoginResponse), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    public async Task<IActionResult> Login([FromBody] LoginRequest dto, CancellationToken ct)
    {
        if (string.IsNullOrWhiteSpace(dto.Usuario) || string.IsNullOrWhiteSpace(dto.Contrasena))
            return BadRequest("usuario y contrasena son requeridos.");

        var row = await _repo.GetByUsuarioAsync(dto.Usuario.Trim(), ct);
        if (row is null)
            return Unauthorized("Credenciales inválidas.");

        if (!string.Equals(row.ESTADO, "A", StringComparison.OrdinalIgnoreCase))
            return Unauthorized("Usuario inactivo.");

        // VERIFICAR HASH (CONTRASENA almacena hash PBKDF2)
        if (!_hasher.Verify(dto.Contrasena, row.CONTRASENA))
            return Unauthorized("Credenciales inválidas.");

        var token = _tokens.CreateToken(row.ESTUDIANTEID, row.USUARIO, row.ROL);

        return Ok(new LoginResponse
        {
            AccessToken = token,
            ExpiresIn = _tokens.ExpiresSeconds,
            Usuario = row.USUARIO,
            Rol = row.ROL
        });
    }
    [HttpGet("health")]
    public IActionResult Health() => Ok(new { controller = nameof(AuthController), ok = true });//edpoint de prueba


    public sealed class DevHashRequest
    {
        public string Plaintext { get; set; } = default!;
    }

    [HttpPost("dev-hash")]
    public ActionResult<object> DevHash([FromBody] DevHashRequest req)
    {
        if (req is null || string.IsNullOrWhiteSpace(req.Plaintext))
            return BadRequest("plaintext requerido");

        var hashed = _hasher.Hash(req.Plaintext);
        return Ok(new { plaintext = req.Plaintext, hashed });
    }



}
