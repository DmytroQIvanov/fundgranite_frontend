import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import ScrollTrigger from "../ScrollTrigger";

const LinkComponent = ({
  link,
  children,
  style,
  underline,
  onClick,
  LINKS,
  index,
  currentPage,
}) => {
  const location = useLocation();
  console.log(location.pathname);
  console.log(link);
  const currentUrl = "/" + location.pathname.split("/").slice(2).join("/");
  const onMiddleClick = () => {
    let swipeSide = "";
    const currentIndex = LINKS.find((elem, index) => elem.link === currentUrl);
    console.log("currentIndex", currentIndex, location.pathname, LINKS);
    if (currentIndex?.key < index) {
      swipeSide = "Right";
    } else {
      swipeSide = "Left";
    }
    onClick({ state: "hide", url: link, swipeSide, pageAnimOption: "swipe" });
  };

  console.log("currentUrl", currentUrl);
  return (
    <div
      className={`${styles.header_link} ${
        currentPage === link
          ? styles.header_linkActive
          : styles.header_linkInactive
      } ${underline ? styles.header_donateBtn : ""} prevent-select`}
      style={style}
      onClick={() => currentUrl !== link && onMiddleClick()}
    >
      <div
      // className={`${styles.header_link} ${
      //   location.pathname === link
      //     ? styles.header_linkActive
      //     : styles.header_linkInactive
      // }`}
      >
        <span
        // style={{ textDecoration: underline ? "underline" : "none" }}
        >
          {children}
        </span>
      </div>
    </div>
  );
};

export default LinkComponent;
