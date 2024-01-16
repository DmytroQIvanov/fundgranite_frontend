import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const LinkComponent = ({
  link,
  children,
  style,
  underline,
  onClick,
  LINKS,
  index,
}) => {
  const location = useLocation();
  console.log(location.pathname);
  console.log(link);
  const onMiddleClick = () => {
    let swipeSide = "";
    const currentIndex = LINKS.find(
      (elem, index) => elem.link === location.pathname,
    );
    console.log("currentIndex", currentIndex, location.pathname, LINKS);
    if (currentIndex.key < index) {
      swipeSide = "Right";
    } else {
      swipeSide = "Left";
    }
    onClick("hide", link, swipeSide);
  };

  return (
    <div
      className={`${styles.header_link} ${
        location.pathname === link
          ? styles.header_linkActive
          : styles.header_linkInactive
      } ${underline ? styles.header_donateBtn : ""} prevent-select`}
      style={style}
      onClick={() => location.pathname !== link && onMiddleClick()}
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
