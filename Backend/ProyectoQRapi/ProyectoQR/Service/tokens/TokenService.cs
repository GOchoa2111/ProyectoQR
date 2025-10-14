using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ProyectoQR.Models;



namespace ProyectoQR.Service.tokens
{
    public interface ITokenService
    {
        string CreateToken(int estudianteId, string usuario, string rol);
        int ExpiresSeconds { get; }
    }

    public sealed class TokenService : ITokenService
    {
        private readonly JwtOptions _opt;
        private readonly SymmetricSecurityKey _key;

        public TokenService(IOptions<JwtOptions> opt)
        {
            _opt = opt.Value;
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_opt.Key));
        }

        public int ExpiresSeconds => _opt.ExpiresMinutes * 60;

        public string CreateToken(int estudianteId, string usuario, string rol)
        {
            var now = DateTime.UtcNow;

            var claims = new List<Claim>
        {
            new(JwtRegisteredClaimNames.Sub, estudianteId.ToString()),
            new("usuario", usuario),
            new(ClaimTypes.Role, rol),              // importante para [Authorize(Roles="...")]
            new(JwtRegisteredClaimNames.Iat, Epoch(now).ToString(), ClaimValueTypes.Integer64)
        };

            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha256);
            var jwt = new JwtSecurityToken(
                issuer: _opt.Issuer,
                audience: _opt.Audience,
                claims: claims,
                notBefore: now,
                expires: now.AddMinutes(_opt.ExpiresMinutes),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }

        private static long Epoch(DateTime utc) => new DateTimeOffset(utc).ToUnixTimeSeconds();
    }
}
