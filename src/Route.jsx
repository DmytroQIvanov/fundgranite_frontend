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
import AdminLogin from "./Pages/Admin/AdminLogin";
import Activity from "./Pages/Activity";
import ActivityPost from "./Pages/ActivityPost/ActivityPost";
import AdminPosts from "./Pages/Admin/AdminPosts";
import AboutUs from "./Pages/AboutUs";
import Redirect from "./Components/Redirect";
import AdminPostActivity from "./Pages/Admin/AdminPostActivity";

const Router = () => {
  const mainRouteArray = [
    {
      path: "",
      element: (
        <PageWrapper header footer subheaderLogo>
          {(props) => <HomePage {...props} />}
        </PageWrapper>
      ),
    },

    {
      path: "donate",
      element: (
        <PageWrapper header footer>
          {(props) => <DonatePage {...props} />}
        </PageWrapper>
      ),
    },

    {
      path: "aboutUs",
      element: (
        <PageWrapper header footer>
          {(props) => <AboutUs {...props} />}
        </PageWrapper>
      ),
    },

    {
      path: "activity",
      element: (
        <PageWrapper header footer>
          {(props) => <Activity {...props} />}
        </PageWrapper>
      ),
    },

    {
      path: "activity/:id",
      element: (
        <PageWrapper header footer>
          {(props) => <ActivityPost {...props} />}
        </PageWrapper>
      ),
    },

    {
      path: "public-offer",
      element: (
        <PageWrapper header footer>
          {(props) => <PublicOffer {...props} />}
        </PageWrapper>
      ),
    },
  ];
  const routerArray = createBrowserRouter([
    {
      path: "/",
      // element
      // children: [],
      element: (
        <PageWrapper header footer subheaderLogo>
          {(props) => <HomePage {...props} />}

          {/*{(props) => <Redirect {...props} />}*/}
        </PageWrapper>
      ),
      children: mainRouteArray,
    },
    {
      path: "/ua/",
      // element: <>111111</>,
      children: mainRouteArray,
    },

    {
      path: "/en/",
      // element: <>111111</>,
      children: mainRouteArray,
    },
    {
      path: "/admin-login",
      element: <AdminLogin />,
    },

    {
      path: "/admin/posts",
      element: <AdminPosts />,
    },

    {
      path: "/admin/createPost",
      element: <AdminPostActivity />,
    },
  ]);

  return (
    <div>
      <>
        <RouterProvider router={routerArray} />
      </>
    </div>
  );
};

export default Router;
