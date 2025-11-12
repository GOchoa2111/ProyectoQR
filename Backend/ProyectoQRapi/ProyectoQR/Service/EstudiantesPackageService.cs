using System.Data;
using Oracle.ManagedDataAccess.Client;
using ProyectoQR.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProyectoQR.Service
{
    public class EstudiantesPackageService : IEstudiantesService
    {
        private readonly IConfiguration _config;

        public EstudiantesPackageService(IConfiguration config)
        {
            _config = config;
        }

        private string ConnString => _config.GetConnectionString("OracleDb")!;

        public async Task<int> CrearAsync(EstudianteDto dto)
        {
            using var conn = new OracleConnection(ConnString);
            await conn.OpenAsync();
            using var cmd = conn.CreateCommand();
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandText = "PKG_ESTUDIANTES.CREAR_ESTUDIANTE";

            cmd.Parameters.Add("p_nombre", OracleDbType.Varchar2).Value = (object?)dto.Nombre ?? DBNull.Value;
            cmd.Parameters.Add("p_apellido", OracleDbType.Varchar2).Value = (object?)dto.Apellido ?? DBNull.Value;
            cmd.Parameters.Add("p_codigoQR", OracleDbType.Varchar2).Value = (object?)dto.CodigoQR ?? DBNull.Value;
            cmd.Parameters.Add("p_numeroCarnet", OracleDbType.Varchar2).Value = (object?)dto.NumeroCarnet ?? DBNull.Value;
            cmd.Parameters.Add("p_telefono", OracleDbType.Varchar2).Value = (object?)dto.Telefono ?? DBNull.Value;
            cmd.Parameters.Add("p_direccion", OracleDbType.Varchar2).Value = (object?)dto.Direccion ?? DBNull.Value;
            cmd.Parameters.Add("p_anio", OracleDbType.Varchar2).Value = (object?)dto.Anio ?? DBNull.Value;
            cmd.Parameters.Add("p_sede", OracleDbType.Varchar2).Value = (object?)dto.Sede ?? DBNull.Value;
            cmd.Parameters.Add("p_usuario", OracleDbType.Varchar2).Value = (object?)dto.Usuario ?? DBNull.Value;
            cmd.Parameters.Add("p_contrasena", OracleDbType.Varchar2).Value = (object?)dto.Contrasena ?? DBNull.Value;
            cmd.Parameters.Add("p_rol", OracleDbType.Varchar2).Value = (object?)dto.Rol ?? DBNull.Value;
            cmd.Parameters.Add("p_email", OracleDbType.Varchar2).Value = (object?)dto.Email ?? DBNull.Value;

            var outParam = new OracleParameter("p_new_id", OracleDbType.Int32) { Direction = ParameterDirection.Output };
            cmd.Parameters.Add(outParam);

            await cmd.ExecuteNonQueryAsync();

            return Convert.ToInt32(outParam.Value!);
        }

        public async Task<EstudianteDto?> ObtenerAsync(int id)
        {
            using var conn = new OracleConnection(ConnString);
            await conn.OpenAsync();
            using var cmd = conn.CreateCommand();
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandText = "PKG_ESTUDIANTES.OBTENER_ESTUDIANTE";

            cmd.Parameters.Add("p_estudianteid", OracleDbType.Int32).Value = id;
            var outCursor = new OracleParameter("p_cursor", OracleDbType.RefCursor) { Direction = ParameterDirection.Output };
            cmd.Parameters.Add(outCursor);

            using var reader = await cmd.ExecuteReaderAsync();
            if (await reader.ReadAsync())
            {
                return MapReader(reader);
            }
            return null;
        }

        public async Task<IEnumerable<EstudianteDto>> ListarAsync(string? usuarioFilter = null, string? nombreFilter = null, string? rolFilter = null, int? limit = null, int? offset = null)
        {
            var list = new List<EstudianteDto>();
            using var conn = new OracleConnection(ConnString);
            await conn.OpenAsync();
            using var cmd = conn.CreateCommand();
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandText = "PKG_ESTUDIANTES.LISTAR_ESTUDIANTES";

            var outCursor = new OracleParameter("p_cursor", OracleDbType.RefCursor) { Direction = ParameterDirection.Output };
            cmd.Parameters.Add(outCursor);

            cmd.Parameters.Add("p_filter_usuario", OracleDbType.Varchar2).Value = (object?)usuarioFilter ?? DBNull.Value;
            cmd.Parameters.Add("p_filter_nombre", OracleDbType.Varchar2).Value = (object?)nombreFilter ?? DBNull.Value;
            cmd.Parameters.Add("p_filter_rol", OracleDbType.Varchar2).Value = (object?)rolFilter ?? DBNull.Value;
            cmd.Parameters.Add("p_limit", OracleDbType.Int32).Value = (object?)limit ?? DBNull.Value;
            cmd.Parameters.Add("p_offset", OracleDbType.Int32).Value = (object?)offset ?? DBNull.Value;

            using var reader = await cmd.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                list.Add(MapReader(reader));
            }
            return list;
        }

        public async Task ActualizarAsync(int id, EstudianteDto dto)
        {
            using var conn = new OracleConnection(ConnString);
            await conn.OpenAsync();
            using var cmd = conn.CreateCommand();
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandText = "PKG_ESTUDIANTES.ACTUALIZAR_ESTUDIANTE";

            cmd.Parameters.Add("p_estudianteid", OracleDbType.Int32).Value = id;
            cmd.Parameters.Add("p_nombre", OracleDbType.Varchar2).Value = (object?)dto.Nombre ?? DBNull.Value;
            cmd.Parameters.Add("p_apellido", OracleDbType.Varchar2).Value = (object?)dto.Apellido ?? DBNull.Value;
            cmd.Parameters.Add("p_codigoQR", OracleDbType.Varchar2).Value = (object?)dto.CodigoQR ?? DBNull.Value;
            cmd.Parameters.Add("p_numeroCarnet", OracleDbType.Varchar2).Value = (object?)dto.NumeroCarnet ?? DBNull.Value;
            cmd.Parameters.Add("p_telefono", OracleDbType.Varchar2).Value = (object?)dto.Telefono ?? DBNull.Value;
            cmd.Parameters.Add("p_direccion", OracleDbType.Varchar2).Value = (object?)dto.Direccion ?? DBNull.Value;
            cmd.Parameters.Add("p_anio", OracleDbType.Varchar2).Value = (object?)dto.Anio ?? DBNull.Value;
            cmd.Parameters.Add("p_sede", OracleDbType.Varchar2).Value = (object?)dto.Sede ?? DBNull.Value;
            cmd.Parameters.Add("p_usuario", OracleDbType.Varchar2).Value = (object?)dto.Usuario ?? DBNull.Value;
            cmd.Parameters.Add("p_contrasena", OracleDbType.Varchar2).Value = (object?)dto.Contrasena ?? DBNull.Value;
            cmd.Parameters.Add("p_rol", OracleDbType.Varchar2).Value = (object?)dto.Rol ?? DBNull.Value;
            cmd.Parameters.Add("p_estado", OracleDbType.Char).Value = (object?)dto.Estado ?? DBNull.Value;
            cmd.Parameters.Add("p_email", OracleDbType.Varchar2).Value = (object?)dto.Email ?? DBNull.Value;

            await cmd.ExecuteNonQueryAsync();
        }

        public async Task EliminarAsync(int id, bool physical = false)
        {
            using var conn = new OracleConnection(ConnString);
            await conn.OpenAsync();
            using var cmd = conn.CreateCommand();
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandText = "PKG_ESTUDIANTES.ELIMINAR_ESTUDIANTE";

            cmd.Parameters.Add("p_estudianteid", OracleDbType.Int32).Value = id;
            cmd.Parameters.Add("p_physical", OracleDbType.Byte).Value = physical ? 1 : 0;

            await cmd.ExecuteNonQueryAsync();
        }

        private EstudianteDto MapReader(IDataRecord r)
        {
            return new EstudianteDto
            {
                EstudianteID = r["ESTUDIANTEID"] == DBNull.Value ? null : Convert.ToInt32(r["ESTUDIANTEID"]),
                Nombre = r["NOMBRE"] == DBNull.Value ? null : r["NOMBRE"].ToString(),
                Apellido = r["APELLIDO"] == DBNull.Value ? null : r["APELLIDO"].ToString(),
                CodigoQR = r["CODIGOQR"] == DBNull.Value ? null : r["CODIGOQR"].ToString(),
                NumeroCarnet = r["NUMEROCARNET"] == DBNull.Value ? null : r["NUMEROCARNET"].ToString(),
                Telefono = r["TELEFONO"] == DBNull.Value ? null : r["TELEFONO"].ToString(),
                Direccion = r["DIRECCION"] == DBNull.Value ? null : r["DIRECCION"].ToString(),
                Anio = r["ANIO"] == DBNull.Value ? null : r["ANIO"].ToString(),
                Sede = r["SEDE"] == DBNull.Value ? null : r["SEDE"].ToString(),
                Usuario = r["USUARIO"] == DBNull.Value ? null : r["USUARIO"].ToString(),
                Contrasena = r["CONTRASENA"] == DBNull.Value ? null : r["CONTRASENA"].ToString(),
                Rol = r["ROL"] == DBNull.Value ? null : r["ROL"].ToString(),
                Estado = r["ESTADO"] == DBNull.Value ? null : r["ESTADO"].ToString(),
                Email = r["EMAIL"] == DBNull.Value ? null : r["EMAIL"].ToString()
            };
        }
    }
}
