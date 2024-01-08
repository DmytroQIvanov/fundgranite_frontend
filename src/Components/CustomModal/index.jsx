import React from "react";
import styles from "./CustomModal.module.scss";
const CustomModal = ({ isOpened, onClose }) => {
  return (
    <div className={styles.customModal}>
      <div
        className={`${styles.customModal_container} ${
          isOpened
            ? styles.customModal_containerActive
            : styles.customModal_containerInactive
        }`}
      ></div>
      <div
        onClick={onClose}
        className={`${styles.customModal_greyBackground} ${
          isOpened
            ? styles.customModal_greyBackgroundActive
            : styles.customModal_greyBackgroundInactive
        }`}
      />
    </div>
  );
};

export default CustomModal;
