import React from "react";
import styles from "./Footer.module.scss";

const FooterComponent = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>{/*    */}</div>
      </footer>
      <div className={styles.footerMock} />
    </div>
  );
};

export default FooterComponent;
