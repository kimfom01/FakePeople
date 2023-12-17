import { ReactElement } from "react";

interface Prop {
  Child: ReactElement;
}

export const Base = ({ Child }: Prop) => {
  return (
    <div className="App">
      <main className="App-main">{Child}</main>
    </div>
  );
};
