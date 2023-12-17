import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Details } from "./components/Details";
import { ErorrPage } from "./components/ErrorPage";
import { PeopleList } from "./components/PeopleList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PeopleList />,
    errorElement: <ErorrPage message="Error! Unable to fetch people" />,
  },
  {
    path: "/details/:id",
    element: <Details />,
    errorElement: <ErorrPage message="Error! Could not load details" />,
  },
  { path: "*", element: <ErorrPage message="404 Page Not Found" /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
