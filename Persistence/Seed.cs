using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Products.Any()) return; //database'de urun varsa dondur

            var products = new List<Product>
            {
                new Product
                {
                    Title = "Past 5 Product",
                    Date = DateTime.UtcNow,
                    Description = "Sweater",
                    Category = "Female",
                    Count = 5,
                    Address = "Istanbul/Turkey",
                },
                new Product
                {
                    Title = "Past 10 product",
                    Date = DateTime.UtcNow,
                    Description = "Skirt",
                    Category = "Female",
                    Count = 10,
                    Address = "Izmir/Turkey",
                },
                new Product
                {
                    Title = "Past 8 Product",
                    Date = DateTime.UtcNow,
                    Description = "Pants",
                    Category = "Male",
                    Count = 8,
                    Address = "Eskisehir/Turkey",
                },
                new Product
                {
                    Title = "Past 20 Product",
                    Date = DateTime.UtcNow,
                    Description = "T-shirt",
                    Category = "Male",
                    Count = 20,
                    Address = "Izmir/Turkey",
                }
            };

            await context.Products.AddRangeAsync(products);
            await context.SaveChangesAsync();
        }
    }
}