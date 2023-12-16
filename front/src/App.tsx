import { useEffect, useState } from "react";
import { Person } from "./Models/Person";
import logo from "./logo.svg";
import "./App.css";
import { getPeople } from "./Services/Api";

function App() {
  const [people, setPeople] = useState<Person[]>();

  useEffect(() => {
    getPeople({ setPeople });
  }, [setPeople]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Today
        </a>
        <ol>
          {people?.map((person, key) => {
            return (
              <li key={key}>
                <div>{person.Id}</div>
                <div>{person.FirstName}</div>
                <div>{person.LastName}</div>
                <div>{person.Age}</div>
                <div>{person.ImageUrl}</div>
                <div>{person.Bio}</div>
              </li>
            );
          })}
        </ol>
      </header>
    </div>
  );
}

export default App;
