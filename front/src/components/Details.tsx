import { Base } from "./Base";

export const Details = () => {
  return (
    <Base
      child={
        <div
          style={{ height: "calc(100vh - 56px)" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="mt-3 h1">This is the details page</div>
        </div>
      }
    />
  );
};
