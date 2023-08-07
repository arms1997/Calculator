import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Calculator } from "./pages/Calculator/Calculator";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Root } from "./Root";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        path: "/",
        element: <Calculator />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
