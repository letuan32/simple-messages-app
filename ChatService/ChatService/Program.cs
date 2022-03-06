using ChatService.Hubs;
using ChatService.ViewModels;
using Microsoft.VisualBasic.CompilerServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();

builder.Services.AddSingleton<IDictionary<string, UserConnection>>(opts => new Dictionary<string, UserConnection>());
builder.Services.AddControllers();
builder.Services.AddSignalR();
builder.Services.AddDistributedMemoryCache();

builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromSeconds(10);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x
   
    .AllowAnyHeader()
    .AllowAnyMethod()
    .SetIsOriginAllowed(o=>true)
    .AllowCredentials());
app.UseHttpsRedirection();

app.UseAuthorization();
app.UseSession();
app.MapHub<ChatHub>("/chat");
app.MapControllers();

app.Run();