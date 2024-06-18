import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/import.scss";

import App from "./App";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Avis from "./pages/Avis";
import Meet from "./pages/Meet";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Meet",
        element: <Meet />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/Avis",
        element: <Avis />,
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
