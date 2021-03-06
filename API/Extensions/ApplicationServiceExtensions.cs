using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Persistence;
using Application.Core;

namespace API.Extensions
{
    public class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, 
            IConfiguration config)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebAPIv5", Version = "v1" });
            });

            
            services.AddDbContext<DataContext>(opt => {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            services.AddCors(opt => 
            {
                opt.AddPolicy("CorsPolicy", policy => 
                {
                    policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
                });
            });

            services.AddMediatR(typeof(List.Handler).Assembly); // application go way

            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            return services;
        }
    }
}