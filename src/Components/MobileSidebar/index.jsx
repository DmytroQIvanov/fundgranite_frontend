import React, { useState } from "react";
import styles from "./MobileSidebar.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileSidebar = ({ sidebarState, setSidebarState, links }) => {
  const { t } = useTranslation();

  const onLinkClick = () => {
    setSidebarState(false);
  };
  return (
    <div className={styles.mobileSidebar}>
      <div
        className={`${styles.mobileSidebar_mainContainer} ${
          sidebarState
            ? styles.mobileSidebar_mainContainerActive
            : styles.mobileSidebar_mainContainerInactive
        }`}
      >
        <div className={styles.mobileSidebar_linksContainer}>
          {links.map((elem, index) => {
            return (
              <Link
                to={elem.link}
                onClick={onLinkClick}
                className={"prevent-select"}
              >
                <span>{t(elem.text)}</span>
                <img src={elem.icon} />
              </Link>
            );
          })}
        </div>
      </div>
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
