import { Base } from "./Base";

export const Loading = () => {
  return (
    <Base
      child={
        <div
          style={{ height: "calc(100vh - 56px)" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="mt-3 h1">Loading data...</div>
        </div>
      }
    />
  );
};
