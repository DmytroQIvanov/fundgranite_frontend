import React from "react";
import styles from "./CallBackBottomBTN.module.scss";

const CallBackBottomBTN = ({ onClick }) => {
  return (
    <div className={styles.callBackBTN} onClick={onClick}>
      <span>Перетелефонуйте мені!</span>
    </div>
  );
};

export default CallBackBottomBTN;
