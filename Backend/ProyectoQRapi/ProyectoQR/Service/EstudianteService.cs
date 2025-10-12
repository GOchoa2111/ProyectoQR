using Oracle.ManagedDataAccess.Client;
using System.Data;

namespace ProyectoQR.Service
{
    // DTO original para el registro (lo mantengo)
    public class EstudianteDTO
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string NumeroCarnet { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }
        public string Anio { get; set; }
        public string Sede { get; set; }
        public string CodigoQR { get; set; }
    }

    // NUEVO DTO para el historial de marcaje (combina datos de ESTUDIANTES y MARCAJE)
    public class MarcajeHistorialDTO
    {
        public string NumeroCarnet { get; set; }
        public string NombreCompleto { get; set; }
        public DateTime FechaHora { get; set; }
        public string Tipo { get; set; }
    }

    public class EstudianteService
    {
        private readonly string _connectionString;

        public EstudianteService(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("OracleDb") ?? throw new ArgumentNullException("Connection string no encontrada");
        }

        // Método existente para el registro (sin cambios)
        public async Task<bool> RegistrarEstudiante(string nombre, string apellido, string numeroCarnet, string telefono, string direccion, string anio, string sede)
        {
            using var conn = new OracleConnection(_connectionString);
            await conn.OpenAsync();

            var cmd = conn.CreateCommand();
            cmd.CommandText = @"
                INSERT INTO Estudiantes 
                (Nombre, Apellido, CodigoQR, NumeroCarnet, Telefono, Direccion, Anio, Sede) 
                VALUES 
                (:nombre, :apellido, :codigoQR, :numeroCarnet, :telefono, :direccion, :anio, :sede)";
            cmd.Parameters.Add(new OracleParameter("nombre", nombre));
            cmd.Parameters.Add(new OracleParameter("apellido", apellido));
            cmd.Parameters.Add(new OracleParameter("codigoQR", Guid.NewGuid().ToString()));
            cmd.Parameters.Add(new OracleParameter("numeroCarnet", numeroCarnet));
            cmd.Parameters.Add(new OracleParameter("telefono", telefono));
            cmd.Parameters.Add(new OracleParameter("direccion", direccion));
            cmd.Parameters.Add(new OracleParameter("anio", anio));
            cmd.Parameters.Add(new OracleParameter("sede", sede));

            var result = await cmd.ExecuteNonQueryAsync();
            return result > 0;
        }

        // NUEVO MÉTODO: Obtener Historial de Marcaje
        public async Task<IEnumerable<MarcajeHistorialDTO>> ObtenerHistorialMarcaje()
        {
            var historial = new List<MarcajeHistorialDTO>();
            using var conn = new OracleConnection(_connectionString);
            await conn.OpenAsync();

            var cmd = conn.CreateCommand();
            // Realiza JOIN entre MARCAJE y Estudiantes para obtener nombre y carnet.
            cmd.CommandText = @"
                SELECT 
                    E.Nombre, 
                    E.Apellido, 
                    E.NumeroCarnet, 
                    M.FECHAHORA, 
                    M.TIPO 
                FROM MARCAJE M 
                JOIN Estudiantes E ON M.ESTUDIANTEID = E.ESTUDIANTEID -- <--- Ajusta 'E.ESTUDIANTEID' si la PK es diferente
                WHERE ROWNUM <= 200 -- Límite de 200 registros recientes
                ORDER BY M.FECHAHORA DESC"; // Ordena por la hora más reciente

            using var reader = await cmd.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                // Mapeo de resultados
                var nombre = reader["NOMBRE"].ToString();
                var apellido = reader["APELLIDO"].ToString();

                historial.Add(new MarcajeHistorialDTO
                {
                    NumeroCarnet = reader["NUMEROCARNET"].ToString(),
                    NombreCompleto = $"{nombre} {apellido}", // Combina Nombre y Apellido
                    FechaHora = reader.GetDateTime(reader.GetOrdinal("FECHAHORA")),
                    Tipo = reader["TIPO"].ToString()
                });
            }
            return historial;
        }
    }
}
