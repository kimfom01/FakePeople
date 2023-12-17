import { Link } from "react-router-dom";
import { Base } from "./Base";
import "./NotFound.css";

export default function NotFound() {
  return (
    <Base
      Child={
        <div className="n-f-style">
          <h1>Oops! You seem to be lost.</h1>
          <p>Here are some helpful links:</p>
          <Link className="text-decoration-none" to="/">
            Home
          </Link>
        </div>
      }
    />
  );
}
