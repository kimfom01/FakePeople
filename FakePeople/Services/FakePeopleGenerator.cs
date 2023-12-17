using AutoBogus;
using Bogus;
using Person = FakePeople.Models.Person;

namespace FakePeople.Services;

public class FakePeopleGenerator
{
    private readonly Faker<Person> _faker;

    public FakePeopleGenerator()
    {
        _faker = new AutoFaker<Person>()
            .RuleFor(fake => fake.Id, fake => fake.Random.Int(100, 999))
            .RuleFor(fake => fake.FirstName, fake => fake.Name.FirstName())
            .RuleFor(fake => fake.LastName, fake => fake.Name.LastName())
            .RuleFor(fake => fake.Age, fake => fake.Random.Int(0, 99))
            .RuleFor(fake => fake.ImageUrl, fake => fake.Image.PicsumUrl())
            .RuleFor(fake => fake.Bio, fake => fake.Lorem.Sentences(4));
    }

    public IEnumerable<Person> GeneratePeople(int? count)
    {
        return _faker.Generate(count ?? 25);
    }
}