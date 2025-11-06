using System.Net;
using System.Net.Mail;
using System.Text;
using Microsoft.Extensions.Options;

public class SmtpOptions
{
    public string Host { get; set; } = "";
    public int Port { get; set; } = 587;
    public bool UseSsl { get; set; } = true;
    public string FromEmail { get; set; } = "";
    public string FromName { get; set; } = "";
    public string User { get; set; } = "";
    public string Password { get; set; } = "";
}

public interface IEmailService
{
    Task SendAsync(string to, string subject, string htmlBody);
    Task SendWelcomeAsync(string to, string username);
}

public class EmailService : IEmailService
{
    private readonly SmtpOptions _opt;

    public EmailService(IOptions<SmtpOptions> options)
    {
        _opt = options.Value;
    }

    private SmtpClient BuildClient() => new SmtpClient(_opt.Host, _opt.Port)
    {
        EnableSsl = _opt.UseSsl,
        Credentials = new NetworkCredential(_opt.User, _opt.Password)
    };

    public async Task SendAsync(string to, string subject, string htmlBody)
    {
        using var msg = new MailMessage()
        {
            From = new MailAddress(_opt.FromEmail, _opt.FromName, Encoding.UTF8),
            Subject = subject,
            SubjectEncoding = Encoding.UTF8,
            Body = htmlBody,
            BodyEncoding = Encoding.UTF8,
            IsBodyHtml = true
        };
        msg.To.Add(new MailAddress(to));

        using var smtp = BuildClient();
        await smtp.SendMailAsync(msg);
    }

    public Task SendWelcomeAsync(string to, string username)
    {
                // Mejor plantilla HTML para correo de bienvenida.
                // Cambios realizados:
                // - Diseño más profesional (cabecera con color, tarjeta con datos).
                // - Indica explícitamente que la contraseña será entregada por el administrador.
                // - Escapa el nombre de usuario para evitar inyección en el HTML.
                var subject = "Bienvenido a SGAE - Información de acceso";
            var safeUser = System.Web.HttpUtility.HtmlEncode(username);
            var fromName = System.Web.HttpUtility.HtmlEncode(_opt.FromName ?? "SGAE");

                // Nota: si quieres incluir un logo en el correo, proporciona una URL pública
                // (por ejemplo https://tu-dominio/assets/img/app-icon.png) y reemplaza logoUrl.
                var logoUrl = "https://static.wixstatic.com/media/8a2cdc_fb088ff4add94711854b569553889689~mv2.png";

                        var body = $@"
                        <div style='font-family: ''Segoe UI'', Arial, sans-serif; color:#333;'>
                    <div style='max-width:600px;margin:0 auto;border:1px solid #e6e6e6;border-radius:8px;overflow:hidden;'>
                        <div style='background:#034a8b;padding:18px 20px;color:#fff;display:flex;align-items:center;'>
                                    <img src='{logoUrl}' alt='Logo' style='height:40px;margin-right:12px;border-radius:4px;' />
                                    <div style='font-size:16px;font-weight:700'>{fromName}</div>
                        </div>

                        <div style='padding:20px;background:#fff;'>
                              <h2 style='margin-top:0;color:#034a8b;'>Bienvenido/a a SGAE</h2>
                            <p>Hola <strong>{safeUser}</strong>,</p>
                            <p>Su cuenta ha sido creada satisfactoriamente en <strong>SGAE - Sede San Raymundo</strong>.</p>

                            <table style='width:100%;margin:16px 0;border-collapse:collapse;'>
                                <tr>
                                    <td style='padding:8px;border:1px solid #f0f0f0;background:#fafafa;width:35%'><strong>Usuario</strong></td>
                                    <td style='padding:8px;border:1px solid #f0f0f0'>{safeUser}</td>
                                </tr>
                            </table>

                            <p style='color:#555;'>Por seguridad, la contraseña será entregada directamente por el administrador del sistema. <br/>
                            Si necesita acceso inmediato o tiene dudas, contacte con el administrador o el departamento de soporte.</p>

                            <p style='margin:18px 0;'>
                                <a href='#' style='display:inline-block;padding:10px 16px;background:#ea8a1a;color:#fff;border-radius:6px;text-decoration:none;font-weight:600;'>Ir al sistema</a>
                            </p>

                            <hr style='border:none;border-top:1px solid #eee' />
                            <p style='font-size:12px;color:#888;margin:8px 0;'>Este es un mensaje automático. Por favor no responda a este correo.</p>
                        </div>
                    </div>
                </div>";

                return SendAsync(to, subject, body);
    }
}
