using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using QRCoder;
using System.Text.RegularExpressions;
using ProyectoQR.Service.password;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks; // <- para IPasswordHasher

namespace ProyectoQR.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EstudiantesController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly IPasswordHasher _hasher;
        private readonly IEmailService _email;

        public EstudiantesController(IConfiguration config, IPasswordHasher hasher, IEmailService email )
        {
            _config = config;
            _hasher = hasher;
            _email = email;
        }

        // =============== REGISTRO ===============
        [HttpPost]
    // Protegemos el registro de estudiantes: en V1 decidimos que sólo ADMIN
    // puede crear nuevos usuarios/estudiantes. Si prefieres permitir auto-registro,
    // podemos revertir esto o aplicar validaciones adicionales (captcha/verif email).
    [Authorize(Roles = "ADMIN")]
    public async Task<IActionResult> RegistrarEstudiante([FromBody] EstudianteDto estudiante)
        {
            try
            {
                // 1) Validaciones mínimas
                if (string.IsNullOrWhiteSpace(estudiante.Nombre))
                    return BadRequest("El nombre es obligatorio.");
                if (string.IsNullOrWhiteSpace(estudiante.Apellido))
                    return BadRequest("El apellido es obligatorio.");
                if (string.IsNullOrWhiteSpace(estudiante.Contrasena))
                    return BadRequest("La contraseña es obligatoria.");

                // Normaliza rol y estado
                var rol = string.IsNullOrWhiteSpace(estudiante.Rol) ? "ESTUDIANTE" : estudiante.Rol.Trim().ToUpperInvariant();
                if (rol != "ESTUDIANTE" && rol != "ADMIN" && rol != "DOCENTE")
                    return BadRequest("Rol inválido. Use: ESTUDIANTE, DOCENTE o ADMIN.");

                // Regla: carnet requerido si es ESTUDIANTE
                if (rol == "ESTUDIANTE" && string.IsNullOrWhiteSpace(estudiante.NumeroCarnet))
                    return BadRequest("El número de carnet es obligatorio para el rol ESTUDIANTE.");

                // 2) Autogenerar usuario si no viene
                string usuario = string.IsNullOrWhiteSpace(estudiante.Usuario)
                    ? GenerarUsuario(estudiante.Nombre, estudiante.Apellido)
                    : NormalizarUsuario(estudiante.Usuario);

                // 3) Hashear contraseña
                var hash = _hasher.Hash(estudiante.Contrasena);

                // 4) Generar QR (tu lógica actual)
                string qrCode = Guid.NewGuid().ToString();
                // Generar imagen base64 del QR ahora para poder adjuntarla al correo
                var qrGeneratorForEmail = new QRCodeGenerator();
                var qrCodeDataForEmail = qrGeneratorForEmail.CreateQrCode(qrCode, QRCodeGenerator.ECCLevel.Q);
                var qrCodeImage = new Base64QRCode(qrCodeDataForEmail).GetGraphic(20);
                using var conn = new OracleConnection(_config.GetConnectionString("OracleDb"));
                conn.Open();

                // 4.1) Asegurar unicidad de USUARIO (LOWER) y, si aplica, de NUMEROCARNET
                usuario = AsegurarUsuarioUnico(conn, usuario);

                if (!string.IsNullOrWhiteSpace(estudiante.NumeroCarnet))
                {
                    // opcional: valida que no exista carnet duplicado si tu dominio lo exige
                    using (var cmdCheckCarnet = conn.CreateCommand())
                    {
                        cmdCheckCarnet.CommandText = "SELECT COUNT(1) FROM Estudiantes WHERE LOWER(NUMEROCARNET) = LOWER(:c)";
                        cmdCheckCarnet.Parameters.Add(new OracleParameter("c", estudiante.NumeroCarnet));
                        var count = Convert.ToInt32(cmdCheckCarnet.ExecuteScalar());
                        if (count > 0)
                            return BadRequest("Ya existe un estudiante con ese número de carnet.");
                    }
                }

                // 5) Insertar (agregamos USUARIO, CONTRASENA (hash), ROL, ESTADO, CODIGOQR)
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Estudiantes 
                          (Nombre, Apellido, CodigoQR, NumeroCarnet, Telefono, Direccion, Anio, Sede,
                           Usuario, Contrasena, Rol, Estado, Email)
                        VALUES 
                          (:nombre, :apellido, :codigoQR, :numeroCarnet, :telefono, :direccion, :anio, :sede,
                           :usuario, :contrasena, :rol, 'A', :email)";

                    cmd.Parameters.Add(new OracleParameter("nombre", estudiante.Nombre));
                    cmd.Parameters.Add(new OracleParameter("apellido", estudiante.Apellido));
                    cmd.Parameters.Add(new OracleParameter("codigoQR", qrCode));
                    cmd.Parameters.Add(new OracleParameter("numeroCarnet", (object?)estudiante.NumeroCarnet ?? DBNull.Value));
                    cmd.Parameters.Add(new OracleParameter("telefono", (object?)estudiante.Telefono ?? DBNull.Value));
                    cmd.Parameters.Add(new OracleParameter("direccion", (object?)estudiante.Direccion ?? DBNull.Value));
                    cmd.Parameters.Add(new OracleParameter("anio", (object?)estudiante.Anio ?? DBNull.Value));
                    cmd.Parameters.Add(new OracleParameter("sede", (object?)estudiante.Sede ?? DBNull.Value));
                    cmd.Parameters.Add(new OracleParameter("usuario", usuario));
                    cmd.Parameters.Add(new OracleParameter("contrasena", hash));
                    cmd.Parameters.Add(new OracleParameter("rol", rol));
                    cmd.Parameters.Add(new OracleParameter("email", (object?)estudiante.Email ?? DBNull.Value));
                    cmd.ExecuteNonQuery();
                    
                    if (!string.IsNullOrWhiteSpace(estudiante.Email))
                    {
                        // Enviar el correo en background para no bloquear la respuesta HTTP
                        var emailTo = estudiante.Email!;
                        var qrForEmail = qrCodeImage; // base64 image
                        _ = Task.Run(async () => {
                            try
                            {
                                await _email.SendWelcomeAsync(emailTo, usuario, qrForEmail);
                            }
                            catch (Exception)
                            {
                                // TODO: Reemplazar por _logger.LogError(...) si se inyecta ILogger.
                            }
                        });
                    }
                }
                // 6) (la imagen base64 ya la generamos antes para adjuntar al correo)
                return Ok(new
                {
                    Usuario = usuario,
                    Rol = rol,
                    Estado = "A",
                    CodigoQR = qrCode,
                    ImagenQR = $"data:image/png;base64,{qrCodeImage}"
                });
            }
            catch (OracleException ex) when (ex.Number == 1) // ORA-00001: restricción única violada
            {
                // Puede ser por índice único de USUARIO o (si lo activaste) NUMEROCARNET
                return BadRequest("Registro duplicado. Verifique el correo y/o nombre de usuario.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al registrar estudiante: {ex.Message}");
            }
        }

        // =============== CONSULTA POR QR (como ya lo tenías) ===============
        [HttpGet("{codigoQR}")]
        [Authorize]
        public IActionResult ObtenerEstudiantePorQR(string codigoQR)
        {
            try
            {
                using var conn = new OracleConnection(_config.GetConnectionString("OracleDb"));
                conn.Open();

                using var cmd = conn.CreateCommand();
                cmd.CommandText = @"
                    SELECT EstudianteID, Nombre, Apellido, NumeroCarnet, Telefono, Direccion, Anio, Sede 
                    FROM Estudiantes 
                    WHERE CodigoQR = :codigoQR";
                cmd.Parameters.Add(new OracleParameter("codigoQR", codigoQR));

                using var reader = cmd.ExecuteReader();
                if (reader.Read())
                {
                    var estudiante = new
                    {
                        EstudianteID = reader.GetInt32(0),
                        Nombre = reader.GetString(1),
                        Apellido = reader.GetString(2),
                        NumeroCarnet = reader.IsDBNull(3) ? null : reader.GetString(3),
                        Telefono = reader.IsDBNull(4) ? null : reader.GetString(4),
                        Direccion = reader.IsDBNull(5) ? null : reader.GetString(5),
                        Anio = reader.IsDBNull(6) ? null : reader.GetString(6),
                        Sede = reader.IsDBNull(7) ? null : reader.GetString(7)
                    };
                    return Ok(estudiante);
                }
                else
                {
                    return NotFound("Estudiante no encontrado");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al obtener estudiante: {ex.Message}");
            }
        }

        // =============== OBTENER MI QR (imagen PNG) ===============
        [HttpGet("me/qr")]
        [Authorize]
        public IActionResult ObtenerMiQr()
        {
            try
            {
                // El token JWT creado en TokenService pone el ID del estudiante en el claim 'sub'.
                // Dependiendo de cómo el middleware mapea claims, 'sub' puede aparecer como
                // JwtRegisteredClaimNames.Sub o como ClaimTypes.NameIdentifier. Comprobamos varios.
                var sub = User.FindFirstValue(JwtRegisteredClaimNames.Sub)
                          ?? User.FindFirstValue(ClaimTypes.NameIdentifier)
                          ?? User.FindFirstValue("nameid");

                if (string.IsNullOrWhiteSpace(sub) || !int.TryParse(sub, out var estudianteId))
                {
                    // En desarrollo era útil volcar las claims en consola. Para V1
                    // evitamos imprimir claims sensibles en stdout/stderr.
                    // Si necesitas diagnóstico, usa ILogger con nivel Trace/Debug y
                    // habilítalo solo en entornos de desarrollo.
                    // try { var all = string.Join(";", User.Claims.Select(c => $"{c.Type}={c.Value}")); Console.Error.WriteLine("[Estudiantes] Claim 'sub' no encontrada o inválida. Claims: " + all); } catch {}

                    return Unauthorized("Token inválido");
                }

                using var conn = new OracleConnection(_config.GetConnectionString("OracleDb"));
                conn.Open();

                using var cmd = conn.CreateCommand();
                cmd.CommandText = "SELECT CODIGOQR FROM Estudiantes WHERE ESTUDIANTEID = :id";
                cmd.Parameters.Add(new OracleParameter("id", estudianteId));

                var codigoObj = cmd.ExecuteScalar();
                var codigo = codigoObj == null || codigoObj == DBNull.Value ? null : codigoObj.ToString();
                if (string.IsNullOrWhiteSpace(codigo))
                    return NotFound("Codigo QR no encontrado para este usuario.");

                // Generar imagen PNG a partir del código QR (bytes)
                var qrGenerator = new QRCodeGenerator();
                var qrCodeData = qrGenerator.CreateQrCode(codigo, QRCodeGenerator.ECCLevel.Q);
                var pngBytes = new PngByteQRCode(qrCodeData).GetGraphic(20);

                return File(pngBytes, "image/png", "mi-qr.png");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al generar QR: {ex.Message}");
            }
        }

        // =============== HISTORIAL MARCAJE (igual) ===============
        [HttpGet("marcaje-historial")]
        [Authorize]
        public IActionResult ObtenerHistorialMarcaje()
        {
            try
            {
                var historial = new List<MarcajeHistorialDTO>();
                using var conn = new OracleConnection(_config.GetConnectionString("OracleDb"));
                conn.Open();

                using var cmd = conn.CreateCommand();
                cmd.CommandText = @"
                    SELECT 
                        E.Nombre, 
                        E.Apellido, 
                        E.NumeroCarnet, 
                        M.FECHAHORA, 
                        M.TIPO 
                    FROM MARCAJES M 
                    JOIN Estudiantes E ON M.ESTUDIANTEID = E.ESTUDIANTEID 
                    WHERE ROWNUM <= 200
                    ORDER BY M.FECHAHORA DESC";

                using var reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    var nombre = reader["NOMBRE"].ToString();
                    var apellido = reader["APELLIDO"].ToString();

                    historial.Add(new MarcajeHistorialDTO
                    {
                        NumeroCarnet = reader["NUMEROCARNET"]?.ToString(),
                        NombreCompleto = $"{nombre} {apellido}",
                        FechaHora = reader.GetDateTime(reader.GetOrdinal("FECHAHORA")),
                        Tipo = reader["TIPO"].ToString()
                    });
                }

                if (!historial.Any())
                    return NotFound(new { message = "No se encontraron registros de marcaje." });

                return Ok(historial);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al obtener el historial de marcaje: {ex.Message}");
            }
        }

        // -------- Helpers privados --------
        private static string GenerarUsuario(string nombre, string apellido)
        {
            var n = QuitarTildes(nombre).Trim().ToLowerInvariant();
            var a = QuitarTildes(apellido).Trim().ToLowerInvariant();

            // toma la primera palabra de cada uno
            n = Regex.Replace(n, @"\s+", " ").Split(' ')[0];
            a = Regex.Replace(a, @"\s+", " ").Split(' ')[0];

            var baseUser = $"{n}.{a}";
            return NormalizarUsuario(baseUser);
        }

        private static string NormalizarUsuario(string u)
        {
            var x = QuitarTildes(u).Trim().ToLowerInvariant();
            x = Regex.Replace(x, @"\s+", "");
            x = Regex.Replace(x, @"[^a-z0-9._-]", ""); // permitido
            x = Regex.Replace(x, @"^[-._]+|[-._]+$", ""); // sin separadores al inicio/fin
            return x;
        }

        private static string QuitarTildes(string s)
        {
            var norm = s.Normalize(System.Text.NormalizationForm.FormD);
            var chars = norm.Where(c => System.Globalization.CharUnicodeInfo.GetUnicodeCategory(c) != System.Globalization.UnicodeCategory.NonSpacingMark);
            return new string(chars.ToArray()).Normalize(System.Text.NormalizationForm.FormC);
        }

        private static string AsegurarUsuarioUnico(OracleConnection conn, string usuarioBase)
        {
            var candidato = usuarioBase;
            int sufijo = 0;

            while (true)
            {
                using var cmd = conn.CreateCommand();
                cmd.CommandText = "SELECT COUNT(1) FROM Estudiantes WHERE LOWER(USUARIO) = LOWER(:u)";
                cmd.Parameters.Add(new OracleParameter("u", candidato));
                var count = Convert.ToInt32(cmd.ExecuteScalar());

                if (count == 0) return candidato;

                sufijo++;
                candidato = $"{usuarioBase}{sufijo}";
            }
        }
    }
}

// ===================== DTOs =====================
public class MarcajeHistorialDTO
{
    public string? NumeroCarnet { get; set; }
    public string? NombreCompleto { get; set; }
    public DateTime FechaHora { get; set; }
    public string? Tipo { get; set; }
}

public class EstudianteDto
{
    public string? Nombre { get; set; }
    public string? Apellido { get; set; }
    public string? NumeroCarnet { get; set; }
    public string? Telefono { get; set; }
    public string? Direccion { get; set; }
    public string? Anio { get; set; }
    public string? Sede { get; set; }

    // nuevos/ajustados
    public string? Usuario { get; set; }       // opcional; si no viene se autogenera
    public string? Contrasena { get; set; }    // requerida (se hashea)
    public string? Rol { get; set; }           // opcional; default ESTUDIANTE
    public string? Email { get; set; } //correo electronico estudiante/usuario
}

