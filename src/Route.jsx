import React from "react";
import Header from "./Components/Header";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import FooterComponent from "./Components/Footer";
import Goal from "./Components/Goal";
import PageWrapper from "./Components/PageWrapper";
import DonatePage from "./Pages/Donate";
import HomePage from "./Pages/Home";

const Router = () => {
  const routerArray = createBrowserRouter([
    {
      path: "/",
      element: (
        <PageWrapper header footer>
          <HomePage />
        </PageWrapper>
      ),
    },

    {
      path: "/donate",
      element: (
        <PageWrapper header footer>
          <DonatePage />
        </PageWrapper>
      ),
    },

    {
      path: "/aboutUs",
      element: <PageWrapper header footer></PageWrapper>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={routerArray} />
    </div>
  );
};

export default Router;
