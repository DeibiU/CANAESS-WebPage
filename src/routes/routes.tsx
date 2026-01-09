import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Landing } from "../pages/Landing/components/Landing";
import { AboutUs } from "../pages/AboutUs/components/AboutUs";
import { Form } from "../pages/Form/components/Form";
import { Documents } from "../pages/Documents/components/Documents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
    ],
  },
]);
