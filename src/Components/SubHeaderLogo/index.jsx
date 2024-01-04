import React from "react";
import logo from "../../Assets/LOGO.svg";
import styles from "./SubHeaderLogo.module.scss";
const SubHeaderLogo = () => {
  return (
    <div className={styles.subHeader}>
      <div className={styles.subHeader_container}>
        <img src={logo} />
        <h1>Fund Granite</h1>
      </div>
    </div>
  );
};

export default SubHeaderLogo;
