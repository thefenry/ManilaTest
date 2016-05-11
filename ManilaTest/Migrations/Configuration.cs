namespace ManilaTest.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<UseCases>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(UseCases context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            context.Contents.AddOrUpdate(
              p => p.Title,
              new Content { Title = "35 Kuwentong Klasiko", Author = "Adarna House" },
              new Content { Title = "Mang Andoy’s Signs", Author = "Mailyn Paterno" },
              new Content { Title = "From Manila with Love: A Balikbayan Story", Author = "Amy Luna Capelle" }
            );

        }
    }
}
