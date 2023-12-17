import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Prop {
  Child: ReactElement;
}

export const Base = ({ Child }: Prop) => {
  // const [errorState, setErrorState] = useState<string>("");

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
