import React from "react";
import logo from "../../Assets/LOGO.svg";
import styles from "./SubHeaderLogo.module.scss";
const SubHeaderLogo = () => {
  return (
    <div className={styles.subHeader}>
      <div className={styles.subHeader_container}>
        <img src={logo} />
        <h1>БЛАГОДІЙНИЙ ФОНД «ФОРПОСТ ГРАНІТ»</h1>
      </div>
    </div>
  );
};

export default SubHeaderLogo;
