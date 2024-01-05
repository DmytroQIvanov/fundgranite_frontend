import React, { useState } from "react";
import styles from "./MobileSidebar.module.scss";

const MobileSidebar = ({ sidebarState, setSidebarState }) => {
  return (
    <div className={styles.mobileSidebar}>
      <div
        className={`${styles.mobileSidebar_mainContainer} ${
          sidebarState
            ? styles.mobileSidebar_mainContainerActive
            : styles.mobileSidebar_mainContainerInactive
        }`}
      ></div>
      <div
        className={`${styles.mobileSidebar_background} ${
          sidebarState
            ? styles.mobileSidebar_backgroundActive
            : styles.mobileSidebar_backgroundInactive
        }`}
        onClick={() => setSidebarState(!sidebarState)}
      />
    </div>
  );
};

export default MobileSidebar;
