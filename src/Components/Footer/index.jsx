import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/LOGO.svg";
import Button from "../ReComponents/Button";
import ReButton from "../ReComponents/Button";
import { useTranslation } from "react-i18next";

// *Угода користувача (Terms & Conditions);
// *Політика конфіденційності (Privacy Policy);
// *Політика використання файлів cookie;
// *Політика скасування та повернення платежів (обов'язкова за правилами VISA та Mastercard);
// *Політика з безпеки передачі реквізитів платіжної картки.
const FooterComponent = ({ onPageAnim }) => {
  const { t } = useTranslation();
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_innerContainer}>
            <div className={styles.footer_elem1}>
              <div className={styles.footer_block}>
                <div className={styles.footer_title}>
                  {t("footer.legalInformation")}
                </div>
                <div
                  onClick={() => {
                    onPageAnim({ url: "/public-offer" });
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {t("footer.publicOffer")}
                </div>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
                <Link
                  to={
                    "https://opendatabot.ua/pdf/company/4899/45270705-4899812-3869722-951ebb6f71fd78161381af1eb5f58482.pdf"
                  }
                >
                  {t("footer.extract")}
                </Link>
                {/*<span>Політика використання файлів cookie</span>*/}
                <span>{t("footer.policyOnTheSecurity")}</span>
              </div>
              <div className={styles.footer_block}>
                <div className={styles.footer_title}>
                  {t("footer.contactInformation")}
                </div>
                <div>
                  <div className={styles.footer_secondText}>
                    {t("footer.workingHours")}
                  </div>
                  <span>forpostgranite@gmail.com</span>
                </div>
                <span>+380 73 296 83 15</span>

                <span>{t("footer.callYouBack")}</span>
              </div>
              <div className={styles.footer_elem3}>
                <ReButton
                  type={"brownBorder"}
                  onClick={() => onPageAnim({ url: "/donate" })}
                >
                  {t("footer.support")}
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
