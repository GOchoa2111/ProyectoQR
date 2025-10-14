using System.Data;
using System.Text; // [+] para la clave JWT
using Microsoft.AspNetCore.Authentication.JwtBearer; // [+]
using Microsoft.IdentityModel.Tokens;               // [+]
using Oracle.ManagedDataAccess.Client;

// [+] Namespaces de tus servicios/repos y opciones
using ProyectoQR.Data;
using ProyectoQR.Models;
using ProyectoQR.Service.password;
using ProyectoQR.Service.tokens;

var builder = WebApplication.CreateBuilder(args);

// Conexión a Oracle (tu código original)
builder.Services.AddTransient<IDbConnection>(sp =>
    new OracleConnection(builder.Configuration.GetConnectionString("OracleDb")));

// -------------------- JWT (SEGURIDAD) --------------------
// Lee configuración JWT (Issuer/Audience/Expires). Si no existen, usa defaults.
var jwtSection = builder.Configuration.GetSection("Jwt");
var issuer = jwtSection["Issuer"] ?? "ProyectoQR";
var audience = jwtSection["Audience"] ?? "ProyectoQR";
var expiresMinutes = int.TryParse(jwtSection["ExpiresMinutes"], out var mins) ? mins : 60;

// Clave desde user-secrets o appsettings (puedes dejarla aquí en Program.cs en dev)
// IMPORTANTE: en producción NO hardcodear esta clave.
var jwtKey = builder.Configuration["Jwt:Key"] ?? "cambia-esta-clave-ultrasecreta-de-32+caracteres";
var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));

// Autenticación JWT Bearer
builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false; // en dev; en prod: true con HTTPS
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = issuer,
            ValidAudience = audience,
            IssuerSigningKey = signingKey,
            ClockSkew = TimeSpan.FromSeconds(30)
        };
    });

// Vincular opciones para servicios que lean IOptions<JwtOptions>
builder.Services.Configure<JwtOptions>(builder.Configuration.GetSection("Jwt"));
// Forzamos que la Key usada por los servicios sea la misma que leímos arriba
builder.Services.PostConfigure<JwtOptions>(opt =>
{
    opt.Issuer = issuer;
    opt.Audience = audience;
    opt.ExpiresMinutes = expiresMinutes;
    opt.Key = jwtKey;
});
// ---------------------------------------------------------

// Controladores y Swagger (tu base)
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// Swagger con soporte de autorización Bearer
builder.Services.AddSwaggerGen(c =>
{
    var jwtSecurityScheme = new Microsoft.OpenApi.Models.OpenApiSecurityScheme
    {
        Scheme = "bearer",
        BearerFormat = "JWT",
        Name = "Authorization",
        In = Microsoft.OpenApi.Models.ParameterLocation.Header,
        Type = Microsoft.OpenApi.Models.SecuritySchemeType.Http,
        Description = "Escribe: Bearer {tu_token_jwt}",
        Reference = new Microsoft.OpenApi.Models.OpenApiReference
        {
            Id = JwtBearerDefaults.AuthenticationScheme,
            Type = Microsoft.OpenApi.Models.ReferenceType.SecurityScheme
        }
    };

    c.AddSecurityDefinition(jwtSecurityScheme.Reference.Id, jwtSecurityScheme);
    c.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement
    {
        { jwtSecurityScheme, Array.Empty<string>() }
    });
});

// CORS para Angular (tu código original)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy => policy.WithOrigins(
                            "http://localhost:4200",
                            "http://localhost:44389",
                            "http://localhost:5111",
                            "https://*euw.devtunnels.ms")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

// -------------------- DI de servicios usados por AuthController --------------------
// Hasher de contraseñas (PBKDF2), Servicio de Tokens y Repositorio hacia Oracle
builder.Services.AddSingleton<IPasswordHasher, Pbkdf2PasswordHasher>();
builder.Services.AddSingleton<ITokenService, TokenService>();
builder.Services.AddSingleton<IAuthRepository>(sp =>
    new AuthRepository(builder.Configuration.GetConnectionString("OracleDb")!));
// -----------------------------------------------------------------------------------

var app = builder.Build();

// Activar CORS
app.UseCors("AllowAngular");

// Swagger solo en desarrollo
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// [+] Autenticación antes de autorización
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
