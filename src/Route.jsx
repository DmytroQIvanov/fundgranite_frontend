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
import PageWrapper from "./Components/ReComponents/PageWrapper";
import DonatePage from "./Pages/Donate";
import HomePage from "./Pages/Home";
import PublicOffer from "./Pages/PublicOffer";

const Router = () => {
  const routerArray = createBrowserRouter([
    {
      path: "/",
      element: (
        <PageWrapper header footer subheaderLogo>
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

    {
      path: "/blog",
      element: <PageWrapper header footer></PageWrapper>,
    },

    {
      path: "/public-offer",
      element: (
        <PageWrapper header footer>
          <PublicOffer />
        </PageWrapper>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={routerArray} />
    </div>
  );
};

export default Router;
