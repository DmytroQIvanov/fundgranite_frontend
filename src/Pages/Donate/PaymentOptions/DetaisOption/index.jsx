import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../Donate.module.scss";
const DetailsOption = () => {
  const { t } = useTranslation();
  function myFunction() {
    // Get the text field
    // var copyText = document.getElementById("myInput");

    // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText("UA433005280000026001000035980");

    setTimeout(() => {
      alert("Рахунок скопійовано!");
    }, [300]);
    // Alert the copied text
    // alert("Copied the text: " + "UA433005280000026001000035980");
  }

  return (
    <div>
      {/*--- NATIONAL CURRENCY ---*/}
      <div className={styles.donate_line} />
      <div>
        <h1 style={{ textAlign: "center" }}>
          {t("donate.detailsForTransfersInNationalCurrency")}
        </h1>
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
                cursor: "pointer",
              }}
              onClick={() => {
                myFunction();
              }}
            >
              Копіювати
            </button>
          </div>
        </span>
      </div>
      <div className={styles.donate_line} />

      {/*--- FOREIGHT CURRENCY ---*/}
      <div>
        <h1 style={{ textAlign: "center" }}>
          {t("donate.detailsForTransfersInForeignCurrency")}
        </h1>
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
              onClick={() => {
                myFunction();
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
