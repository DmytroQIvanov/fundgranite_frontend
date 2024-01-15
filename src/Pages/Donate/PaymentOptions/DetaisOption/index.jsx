import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../Donate.module.scss";
const DetailsOption = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/*--- NATIONAL CURRENCY ---*/}
      <div className={styles.donate_line} />
      <div style={{ color: "white" }}>
        <h1>{t("donate.detailsForTransfersInNationalCurrency")}</h1>
        <span className={styles.donate_title}>
          <div className={styles.donate_propsNumber}>
            <span>
              БЛАГОДІЙНА ОРГАНІЗАЦІЯ "БЛАГОДІЙНИЙ ФОНД "ФОРПОСТ ГРАНІТ"
            </span>
          </div>
          <div className={styles.donate_propsNumber}>
            <span>Код Одержувача: 45270705</span>
          </div>
          <div className={styles.donate_propsNumber}>
            <span>Банк Одержувача: АТ «ОТП БАНК» в м. Київ </span>
          </div>
          <div className={styles.donate_propsNumber}>
            <span>МФО: 300528</span>
          </div>
          <div className={styles.donate_propsNumber}>
            <span>Рахунок №: UA433005280000026001000035980</span>

            <button
              style={{
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                background: "green",
                color: "white",
                position: "absolute",
                right: "20px",
              }}
            >
              Копіювати
            </button>
          </div>
        </span>
      </div>
      <div className={styles.donate_line} />

      {/*--- FOREIGHT CURRENCY ---*/}
      <div style={{ color: "white" }}>
        <h1>{t("donate.detailsForTransfersInForeignCurrency")}</h1>
        <span className={styles.donate_title}>
          <div className={styles.donate_propsNumber}>
            <span>Beneficiary: 'CO 'CF 'FORPOST GRANITE'</span>
          </div>
          <div className={styles.donate_propsNumber}>
            <span>Account#:UA433005280000026001000035980</span>
          </div>
          <div className={styles.donate_propsNumber}>
            <span>Beneficiary’s bank: OTP BANK JSC</span>
          </div>
          <div className={styles.donate_propsNumber}>
            <span>SWIFT code: SWIFT code</span>

            <button
              style={{
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                background: "green",
                color: "white",
                position: "absolute",
                right: "20px",
              }}
            >
              Копіювати
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default DetailsOption;
