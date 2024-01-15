import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/LOGO.svg";
import Button from "../ReComponents/Button";
import ReButton from "../ReComponents/Button";

// *Угода користувача (Terms & Conditions);
// *Політика конфіденційності (Privacy Policy);
// *Політика використання файлів cookie;
// *Політика скасування та повернення платежів (обов'язкова за правилами VISA та Mastercard);
// *Політика з безпеки передачі реквізитів платіжної картки.
const FooterComponent = () => {
  return (
    <div style={{ marginTop: "35px" }}>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_innerContainer}>
            <div className={styles.footer_elem1}>
              <div className={styles.footer_block}>
                <div className={styles.footer_title}>Правова інформація</div>
                <Link to={"/public-offer"}>Public offer</Link>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
                <Link
                  to={
                    "https://opendatabot.ua/pdf/company/4899/45270705-4899812-3869722-951ebb6f71fd78161381af1eb5f58482.pdf"
                  }
                >
                  Витяг
                </Link>
                {/*<span>Політика використання файлів cookie</span>*/}
                <span>
                  Політика з безпеки передачі реквізитів платіжної картки
                </span>
              </div>
              <div className={styles.footer_block}>
                <div className={styles.footer_title}>Контактна інформація</div>
                <div>
                  <div className={styles.footer_secondText}>
                    пн-пт 10:00-19:00
                  </div>
                  <span>forpostgranite@gmail.com</span>
                </div>
                <span>+380 73 296 83 15</span>

                <span>Перетелефонувати вам?</span>
              </div>
              <div className={styles.footer_elem3}>
                <ReButton type={"brownBorder"} link={"/donate"}>
                  Підтримати
                </ReButton>
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
