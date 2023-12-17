import { Link } from "react-router-dom";
import { Base } from "./Base";
import "./ErrorPage.css";

export const NotFound = () => {
  return (
    <Base
      child={
        <div className="n-f-style">
          <h1 style={{ fontSize: "5rem" }}>404 Page Not Found</h1>
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
