import React from "react";
import logo from "../../Assets/LOGO.svg";
import styles from "./LoaderPage.module.scss";

const LoaderPage = () => {
  return (
    <div className={styles.loaderPage}>
      <div className={styles.loaderPage_logoDivContainer}>
        <div className={styles.loaderPage_logoDiv}>
          <img src={logo} />
          <h1>БЛАГОДІЙНИЙ ФОНД «ФОРПОСТ ГРАНІТ»</h1>
        </div>
      </div>
    </div>
  );
};

export default LoaderPage;
