import { useEffect, useState } from "react";
import { Person } from "../Models/Person";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";
import { Base } from "./Base";
import { ErrorPage } from "./ErrorPage";

export const PeopleList = () => {
  const uri: string = process.env.REACT_APP_API_URL as string;
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${uri}/people`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(`Could not load people`);
        }
      })
      .then((res: Person[]) => {
        setPeople(res);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setIsLoading(false);
        setError(err);
      });
  }, [uri, setIsLoading]);

  return (
    <Base
      child={
        <>
          {!error && isLoading && <Loading />}
          {!isLoading && (
            <div className="row g-0 justify-content-center">
              {people?.map((person, key) => (
                <div
                  key={key}
                  className="card-frame card col-sm-12 col-md-3 col-lg-2 m-3"
                >
                  <Link
                    to={`/details/${person.id}`}
                    className="link-dark text-decoration-none"
                  >
                    <div className="text-decoration-none">
                      <div className="card-body">
                        <img
                          src={person.imageUrl}
                          alt={`Profile photograph of ${person?.firstName}`}
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
              {error && <ErrorPage error={error} />}
            </div>
          )}
        </>
      }
    />
  );
};
