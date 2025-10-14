namespace ProyectoQR.Models
{
    public class JwtOptions
    {
        public string Issuer { get; set; } = "ProyectoQR";
        public string Audience { get; set; } = "ProyectoQR";
        public int ExpiresMinutes { get; set; } = 60;
        public string Key { get; set; } = ""; // en dev puedes setearla desde Program.cs o user-secrets
    }
}
