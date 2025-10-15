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
        var subject = "¡Bienvenido a la plataforma!";
        var body = $@"
            <div style='font-family:Segoe UI,Arial,sans-serif'>
              <h2>¡Bienvenido/a!</h2>
              <p>Gracias por registrarte en <strong>SGAE Sede San Raymundo</strong>.</p>
              <p><strong>Tu usuario:</strong> {System.Web.HttpUtility.HtmlEncode(username)}</p>
              <p>Tu contraseña es la que creaste durante el registro.</p>
              <p>Si no fuiste tú, por favor contáctanos.</p>
              <hr/>
              <small>Este es un mensaje automático, por favor no responder.</small>
            </div>";
        return SendAsync(to, subject, body);
    }
}
