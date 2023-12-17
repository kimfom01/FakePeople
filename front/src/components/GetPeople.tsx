import { useEffect, useState } from "react";
import { Person } from "../Models/Person";

export const GetPeople = () => {
  const uri: string = process.env.REACT_APP_API_URL as string;
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch(`${uri}/people`)
      .then(async (res) => await res.json())
      .then((res: Person[]) => {
        setPeople(res);
      });
  }, [setPeople, uri]);

  return (
    <>
      <div className="container">
        <div className="row g-0 justify-content-center">
          {people?.map((person, key) => (
            <div
              key={key}
              className="card-frame card col-sm-12 col-md-3 col-lg-2 m-3"
            >
              <a href="/details" className="link-dark text-decoration-none">
                <div className="text-decoration-none">
                  <div className="card-body">
                    <img
                      src={person.imageUrl}
                      alt="Some random photograph"
                      style={{ width: "100%" }}
                    />
                    <hr />
                    <div className="card-title">
                      <p>
                        {person.firstName} {person.lastName}
                      </p>
                      Age: {person.age}
                    </div>
                    Bio: <div className="text-truncate">{person.bio}</div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
