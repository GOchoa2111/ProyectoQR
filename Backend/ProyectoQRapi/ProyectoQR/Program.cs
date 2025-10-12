using System.Data;
using Oracle.ManagedDataAccess.Client;

var builder = WebApplication.CreateBuilder(args);

// Conexión a Oracle
builder.Services.AddTransient<IDbConnection>(sp =>
    new OracleConnection(builder.Configuration.GetConnectionString("OracleDb")));

// Controladores y Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS para Angular
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy => policy.WithOrigins("http://localhost:4200", "http://localhost:44389", "https://*euw.devtunnels.ms")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

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
app.UseAuthorization();
app.MapControllers();

app.Run();

