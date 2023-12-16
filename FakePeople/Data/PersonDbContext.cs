using FakePeople.Models;
using FakePeople.Services;
using Microsoft.EntityFrameworkCore;

namespace FakePeople.Data;

public class PersonDbContext : DbContext
{
    private readonly FakePeopleGenerator _faker;
    public DbSet<Person> Persons { get; set; }

    public PersonDbContext(DbContextOptions<PersonDbContext> options, FakePeopleGenerator faker) : base(options)
    {
        _faker = faker;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var people = _faker.GeneratePeople(20);

        modelBuilder.Entity<Person>()
            .HasData(people);
    }
}