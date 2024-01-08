import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/LOGO.svg";

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
              <div className={styles.footer_block}>
                <div className={styles.footer_title}>Правова інформація</div>
                <Link to={"/public-offer"}>Public offer</Link>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
                {/*<span>Політика використання файлів cookie</span>*/}
                <span>
                  Політика з безпеки передачі реквізитів платіжної картки
                </span>
              </div>
              <div className={styles.footer_block}>
                <div className={styles.footer_title}>Контактна інформація</div>
                <span>forpostgranite@gmail.com</span>
                <span>+380999999999</span>
                <span>Передзвонить вам?</span>
              </div>
              <div>
                <img src={logo} />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.footerMock} />
    </div>
  );
};

export default FooterComponent;
