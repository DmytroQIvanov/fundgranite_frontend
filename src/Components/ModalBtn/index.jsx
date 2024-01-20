import React from "react";
import { ReactComponent as BackSVG } from "../../Assets/back-arrow-svgrepo-com.svg";
import styles from "./ModalBackBtn.module.scss";

const ModalBtn = () => {
  return (
    <div className={styles.modalBackBtn}>
      <div className={styles.modalBackBtn_container}>
        <BackSVG />
      </div>
    </div>
  );
};

export default ModalBtn;
