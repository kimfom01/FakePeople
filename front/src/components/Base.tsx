import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Prop {
  child: ReactElement;
}

export const Base = ({ child: Child }: Prop) => {
  return (
    <>
      <nav className="navbar bg-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand text-light">
            Fake People
          </Link>
        </div>
      </nav>
      <main>
        <div className="container">{Child}</div>
      </main>
    </>
  );
};
