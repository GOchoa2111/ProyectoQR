using System.Data;
using Dapper;
using Oracle.ManagedDataAccess.Client;


namespace ProyectoQR.Data
{
    public interface IAuthRepository
    {
        Task<EstudianteAuth?> GetByUsuarioAsync(string usuario, CancellationToken ct);
    }

    public sealed class AuthRepository : IAuthRepository
    {
        private readonly string _connString;

        public AuthRepository(string connString) => _connString = connString;

        public async Task<EstudianteAuth?> GetByUsuarioAsync(string usuario, CancellationToken ct)
        {
            const string sql = @"
SELECT
    ESTUDIANTEID,
    USUARIO,
    CONTRASENA,
    ROL,
    ESTADO
FROM PROYECTOQR.ESTUDIANTES
WHERE LOWER(USUARIO) = :u
FETCH FIRST 1 ROWS ONLY";

            await using var conn = new OracleConnection(_connString);
            var result = await conn.QueryFirstOrDefaultAsync<EstudianteAuth>(
                new CommandDefinition(
                    sql,
                    new { u = usuario.ToLowerInvariant() },
                    commandType: CommandType.Text,
                    cancellationToken: ct));

            return result;
        }
    }

    public sealed class EstudianteAuth
    {
        public int ESTUDIANTEID { get; set; }
        public string USUARIO { get; set; } = default!;
        public string CONTRASENA { get; set; } = default!; // aquí viene el HASH
        public string ROL { get; set; } = default!;        // 'ADMIN' | 'ESTUDIANTE'...
        public string ESTADO { get; set; } = default!;     // 'A' | 'I'
    }
}
