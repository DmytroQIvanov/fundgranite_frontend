import React, { useState } from "react";
import styles from "./MobileSidebar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileSidebar = ({
  sidebarState,
  setSidebarState,
  links,
  onPageAnim,
}) => {
  const { t } = useTranslation();
  const location = useLocation();

  const onLinkClick = (link, index) => {
    setSidebarState(false);
    let swipeSide = "";
    const currentIndex = links.find(
      (elem, index) => elem.link === location.pathname,
    );
    console.log("currentIndex", currentIndex, location.pathname, links);
    if (currentIndex.key < index) {
      swipeSide = "Right";
    } else {
      swipeSide = "Left";
    }
    onPageAnim("hide", link, swipeSide);
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
                // to={elem.link}
                className={"prevent-select"}
                onClick={() =>
                  location.pathname !== elem.link &&
                  onLinkClick(elem.link, index)
                }
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
