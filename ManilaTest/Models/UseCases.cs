namespace ManilaTest.Models
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class UseCases : DbContext
    {
        // Your context has been configured to use a 'UseCases' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'ManilaTest.Models.UseCases' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'UseCases' 
        // connection string in the application configuration file.
        public UseCases()
            : base("name=UseCases")
        {
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.
        public static UseCases Create()
        {
            return new UseCases();
        }

        public DbSet<Content> Contents { get; set; }
    }

    public class Content
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
    }
}