import { Person } from "../Models/Person";

const uri: string = "https://localhost:7149";

interface Props {
  setPeople: React.Dispatch<React.SetStateAction<Person[] | undefined>>;
}

export const getPeople = ({ setPeople }: Props) => {
  fetch(`${uri}/people`)
    .then((res) => res.json())
    .then((res) => {
      setPeople(res);
    });
};
