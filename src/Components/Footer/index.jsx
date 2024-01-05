import React from "react";
import styles from "./Footer.module.scss";

// *Угода користувача (Terms & Conditions);
// *Політика конфіденційності (Privacy Policy);
// *Політика використання файлів cookie;
// *Політика скасування та повернення платежів (обов'язкова за правилами VISA та Mastercard);
// *Політика з безпеки передачі реквізитів платіжної картки.
const FooterComponent = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_innerContainer}>
            <div className={styles.footer_elem1}>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span>Політика використання файлів cookie</span>

              <span>
                Політика з безпеки передачі реквізитів платіжної картки
              </span>
              <span>Test</span>
              <span>forpostgranite@gmail.com</span>
              <span>Test -ada dad </span>
              <span>+380999999999</span>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.footerMock} />
    </div>
  );
};

export default FooterComponent;
