import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/import.scss"

import App from "./App";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Services",
        element: <Services />
      },
      {
        path: "/Contact",
        element: <Contact />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
