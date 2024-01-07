import logo from "./logo.svg";
import "./App.scss";
import styles from "./App.scss";
import GooglePayButton from "@google-pay/button-react";
// import Router from "./Route";
import "./i18";
import { lazy, Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LoaderPage from "./Components/LoaderPage";
import HelmetWrapper from "./Components/ReComponents/HelmetWrapper";

// ---LAZY COMPONENTS---

const Router = lazy(() => import("./Route"));

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("ua");
  }, []);

  const [suspended, setSuspended] = useState(false);
  useEffect(() => {
    console.log("111111111");
    setTimeout(() => {
      console.log("111111111222222222222222");
      setSuspended((s) => (s ? s : !s));
    }, 800);
  }, []);

  return (
    <Suspense fallback={<LoaderPage />}>
      <div className="App">
        <div
          className={`loading ${
            !suspended ? "loading_active" : "loading_inactive"
          }`}
        >
          <LoaderPage />
        </div>
        <HelmetWrapper
          title={"Granit Fund"}
          description={"Фонд для збору коштів"}
          keywords={
            "Фонд, Граніт фонд, форпост, граніт, fund, ЗСУ, дрони, волонтери, волонтерство, збір, Україна, Ukraine, разом переможемо, внесок, Fund, Granite Fund, fund, Armed Forces of Ukraine, drones, volunteers, volunteering, collection, together we will win, contribution"
          }
        >
          <Router />
        </HelmetWrapper>

        {/*{suspended ? (*/}
        {/*  <Router />*/}
        {/*) : (*/}
        {/*  <div className={styles.loading}>*/}
        {/*    <LoaderPage />*/}
        {/*  </div>*/}
        {/*)}*/}
        {/*<LoaderPage />*/}
      </div>
    </Suspense>
  );
}

export default App;
