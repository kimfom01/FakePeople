import { Link } from "react-router-dom";
import { Base } from "./Base";
import "./ErrorPage.css";

interface Prop {
  message: string;
}

export const ErorrPage = ({ message }: Prop) => {
  return (
    <Base
      child={
        <div className="n-f-style">
          <h1 style={{ fontSize: "5rem" }}>{message}</h1>
          <h1>Oops! You seem to be lost.</h1>
          <p>
            Go to:{" "}
            <Link className="text-decoration-none" to="/">
              Home Page
            </Link>
          </p>
        </div>
      }
    />
  );
};
