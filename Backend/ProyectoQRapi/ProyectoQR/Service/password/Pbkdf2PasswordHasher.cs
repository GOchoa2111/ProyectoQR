using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace ProyectoQR.Service.password

{
    public interface IPasswordHasher
    {
        // Devuelve un string con formato: pbkdf2:v1:iterations:saltBase64:hashBase64
        string Hash(string plaintext);
        bool Verify(string plaintext, string stored);
    }

    public sealed class Pbkdf2PasswordHasher : IPasswordHasher
    {
        // Defaults (puedes ajustarlos)
        private const int SaltSize = 16;              // 128 bits
        private const int KeySize = 32;               // 256 bits
        private const int Iterations = 210_000;       // recomendado 100k+; aquí 210k

        public string Hash(string plaintext)
        {
            var salt = RandomNumberGenerator.GetBytes(SaltSize);
            var derived = KeyDerivation.Pbkdf2(
                password: plaintext,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: Iterations,
                numBytesRequested: KeySize);

            var saltB64 = Convert.ToBase64String(salt);
            var hashB64 = Convert.ToBase64String(derived);
            return $"pbkdf2:v1:{Iterations}:{saltB64}:{hashB64}";
        }

        public bool Verify(string plaintext, string stored)
        {
            // Espera formato: pbkdf2:v1:iterations:saltB64:hashB64
            var parts = stored.Split(':');
            if (parts.Length != 5 || parts[0] != "pbkdf2") return false;

            if (!int.TryParse(parts[2], out var iters)) return false;
            var salt = Convert.FromBase64String(parts[3]);
            var expected = Convert.FromBase64String(parts[4]);

            var derived = KeyDerivation.Pbkdf2(
                password: plaintext,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: iters,
                numBytesRequested: expected.Length);

            // tiempo-constante
            return CryptographicOperations.FixedTimeEquals(derived, expected);
        }
    }
}
