import React from "react";
import styles from "./CustomModal.module.scss";
import cross from "../../Assets/cross-23.svg";
const CustomModal = ({ isOpened, onClose, children }) => {
  return (
    <div className={styles.customModal}>
      <div
        className={`${styles.customModal_container} ${
          isOpened
            ? styles.customModal_containerActive
            : styles.customModal_containerInactive
        }`}
      >
        <img
          src={cross}
          onClick={() => {
            onClose(false);
          }}
          className={styles.customModal_crossImg}
        />
        <div className={styles.customModal_insideContainer}>{children}</div>
      </div>
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
