using MailKit.Net.Smtp;
using MimeKit;

namespace ProyectoQR.Service
{
    public class CorreoService
    {
        public void EnviarQrPorCorreo(string correoDestino, string nombre, string apellido, string imagenQR)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Registro QR", "gary.ochoa69@gmail.com"));
            message.To.Add(new MailboxAddress("", correoDestino));
            message.Subject = "Tu código QR de registro";

            var builder = new BodyBuilder
            {
                HtmlBody = $@"
                    <h3>Hola {nombre} {apellido},</h3>
                    <p>Gracias por registrarte. Adjuntamos tu código QR.</p>
                    <p>Saludos,<br/>Equipo de Registro</p>"
            };

            if (!string.IsNullOrEmpty(imagenQR))
            {
                string base64Data = imagenQR.Replace("data:image/png;base64,", "");
                byte[] imageBytes = Convert.FromBase64String(base64Data);
                builder.Attachments.Add("codigoQR.png", imageBytes, new ContentType("image", "png"));
            }

            message.Body = builder.ToMessageBody();

            using var client = new SmtpClient();
            client.Connect("smtp.gmail.com", 587, MailKit.Security.SecureSocketOptions.StartTls);
            client.Authenticate("gary.ochoa69@gmail.com", "nofaocvkrnglbvql");
            client.Send(message);
            client.Disconnect(true);
        }
    }
}