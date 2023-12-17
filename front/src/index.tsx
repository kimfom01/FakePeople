import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Details } from "./components/Details";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/details",
    element: <Details />,
    errorElement: <NotFound />,
  },
  { path: "*", element: <NotFound /> },
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
