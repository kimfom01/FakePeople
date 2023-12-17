import { useParams } from "react-router-dom";
import { Base } from "./Base";
import { useEffect, useState } from "react";
import { Person } from "../Models/Person";
import { Loading } from "./Loading";
import { ErrorPage } from "./ErrorPage";

export const Details = () => {
  const uri: string = process.env.REACT_APP_API_URL as string;
  const [person, setPerson] = useState<Person | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();
  const params = useParams();
  const personId = Number(params.id);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${uri}/person/${personId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(`Could not find details of person with id: ${personId}`);
        }
      })
      .then((res: Person) => {
        setPerson(res);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setError(err);
      });
  }, [uri, personId]);

  return (
    <Base
      child={
        <>
          {!error && isLoading && <Loading />}
          {!isLoading && (
            <div style={{ minHeight: "calc(100vh - 56px)" }} className="d-flex">
              <div className="row mt-3 align-items-center">
                <div className="col-sm-12 col-lg h3">
                  <div className="card-frame card p-1">
                    <img
                      src={person?.imageUrl}
                      alt={`Profile photograph of ${person?.firstName}`}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="col ms-3 h4">
                  <div className="row mb-5 h1">
                    {`${person?.firstName} ${person?.lastName}`}
                  </div>
                  <div className="row my-5">{`${person?.age} year(s) old`}</div>
                  <div className="row">
                    <div className="col-xs-12 col p-0">
                      Bio: <div>{`${person?.bio}`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {error && <ErrorPage error={error} />}
        </>
      }
    />
  );
};
