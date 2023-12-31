import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const LinkComponent = ({ link, children }) => {
  const location = useLocation();
  console.log(location.pathname);
  console.log(link);

  return (
    <div
      className={`${styles.header_link} ${
        location.pathname === link
          ? styles.header_linkActive
          : styles.header_linkInactive
      }`}
    >
      <Link to={link}>{children}</Link>
    </div>
  );
};

export default LinkComponent;
