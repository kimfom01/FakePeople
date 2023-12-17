import { useEffect, useState } from "react";
import { Person } from "../Models/Person";
import { Link } from "react-router-dom";
import { ErorrPage } from "./ErrorPage";

export const GetPeople = () => {
  const uri: string = process.env.REACT_APP_API_URL as string;
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch(`${uri}/people`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Unable to fetch people");
        }
      })
      .then((res: Person[]) => {
        setPeople(res);
      })
      .catch((err) => {
        throw err;
      });
  }, [setPeople, uri]);

  if (people) {
    return (
      <>
        <div className="row g-0 justify-content-center">
          {people?.map((person, key) => (
            <div
              key={key}
              className="card-frame card col-sm-12 col-md-3 col-lg-2 m-3"
            >
              <Link to="/details" className="link-dark text-decoration-none">
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
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return <ErorrPage message="Error! Unable to fetch people" />;
  }
};
