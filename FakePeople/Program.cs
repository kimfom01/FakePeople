using FakePeople.Data;
using FakePeople.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<FakePeopleGenerator>();
builder.Services.AddDbContext<PersonDbContext>(options =>
    options.UseInMemoryDatabase("FakePersonDb"));

var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();

app.MapGet("/person/{id:int}", async (PersonDbContext personDb, [FromRoute] int id) =>
{
    var person = await personDb.Persons.FirstOrDefaultAsync(per => per.Id == id);

    if (person is null)
    {
        return Results.NotFound($"Person with id: {id} not found");
    }

    return Results.Ok(person);
});

app.MapGet("/people", async (PersonDbContext personDb) =>
{
    var people = await personDb.Persons.AsNoTracking().ToListAsync();

    if (people.Count == 0)
    {
        return Results.NotFound("Not a single person not found");
    }

    return Results.Ok(people);
});

await using var context = app.Services.CreateScope()
    .ServiceProvider.GetRequiredService<PersonDbContext>();
await context.Database.EnsureDeletedAsync();
await context.Database.EnsureCreatedAsync();

app.Run();