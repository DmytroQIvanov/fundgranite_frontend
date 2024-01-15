import React from "react";
import styles from "./Rebutton.module.scss";
import { Link } from "react-router-dom";

const ReButton = ({ children, type, link, onClick }) => {
  const onClickBtn = () => {
    onClick && onClick();
  };
  return (
    <div className={styles.rebutton}>
      <Link to={link}>
        <div
          className={styles[`rebutton_${type}`]}
          onClick={() => {
            onClickBtn();
          }}
        >
          {children}
        </div>
      </Link>
    </div>
  );
};

export default ReButton;
