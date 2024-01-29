import React, { useState } from "react";
import styles from "./MobileSidebar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollTrigger from "../ScrollTrigger";

const MobileSidebar = ({
  sidebarState,
  setSidebarState,
  links,
  onPageAnim,
  currentPage,
}) => {
  const { t } = useTranslation();
  const location = useLocation();

  const onLinkClick = (link, index) => {
    setSidebarState(false);
    let swipeSide = "";
    const currentIndex = links.find((elem, index) => elem.link === currentPage);
    console.log("currentIndex", currentIndex, location.pathname, links);
    if (currentIndex?.key < index) {
      swipeSide = "Right";
    } else {
      swipeSide = "Left";
    }
    onPageAnim({
      state: "hide",
      url: link,
      swipeSide,
      pageAnimOption: "swipe",
    });
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
              <div
                key={index}
                // to={elem.link}
                className={`${styles.mobileSidebar_linksContainer_elem} ${
                  currentPage === elem.link &&
                  styles.mobileSidebar_linksContainer_elem_active
                } prevent-select`}
                onClick={() =>
                  location.pathname !== elem.link &&
                  onLinkClick(elem.link, index)
                }
              >
                <ScrollTrigger endless={true}>
                  <span>{t(elem.text)}</span>
                </ScrollTrigger>
                <img src={elem.icon} />
              </div>
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
