import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const LinkComponent = ({ link, children, style, underline }) => {
  const location = useLocation();
  console.log(location.pathname);
  console.log(link);

  return (
    <Link
      to={link}
      className={`${styles.header_link} ${
        location.pathname === link
          ? styles.header_linkActive
          : styles.header_linkInactive
      }`}
      style={style}
    >
      <div
      // className={`${styles.header_link} ${
      //   location.pathname === link
      //     ? styles.header_linkActive
      //     : styles.header_linkInactive
      // }`}
      >
        <span style={{ textDecoration: underline ? "underline" : "none" }}>
          {children}
        </span>
      </div>
    </Link>
  );
};

export default LinkComponent;
