import { Base } from "./Base";

interface Prop {
  error: Error;
}

export const ErrorPage = ({ error }: Prop) => {
  return (
    <div>
      <Base
        child={
          <div
            style={{ height: "calc(100vh - 56px)" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="h1">{error.message}</div>
          </div>
        }
      />
    </div>
  );
};
