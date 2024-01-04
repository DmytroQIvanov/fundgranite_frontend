import React from "react";
import styles from "./Footer.module.scss";

const FooterComponent = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_innerContainer}>
            <div className={styles.footer_elem1}>
              <span>Test</span>
              <span>Test@gmail.com</span>
              <span>Test -ada dad </span>
            </div>

            <div className={styles.footer_elem1}>
              <span>Test</span>
              <span>Test@gmail.com</span>
              <span>Test -ada dad </span>
            </div>

            <div className={styles.footer_elem1}>
              <span>Test</span>
              <span>Test@gmail.com</span>
              <span>Test -ada dad </span>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.footerMock} />
    </div>
  );
};

export default FooterComponent;
