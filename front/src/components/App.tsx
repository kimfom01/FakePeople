import { Suspense } from "react";
import { Base } from "./Base";
import { GetPeople } from "./GetPeople";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  return (
    <Base
      child={
        <ErrorBoundary fallback={<div>Error! Something went wrong</div>}>
          <Suspense fallback={"Loading..."}>
            <GetPeople />
          </Suspense>
        </ErrorBoundary>
      }
    />
  );
};

export default App;
