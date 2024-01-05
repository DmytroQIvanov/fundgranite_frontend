import React, { useEffect, useState } from "react";
import GooglePayButton from "@google-pay/button-react";
import styles from "./Donate.module.scss";
import ReInput from "../../Components/ReComponents/Input";
import moneySVG from "../../Assets/usd-circle.svg";
import { useTranslation } from "react-i18next";
const GoogleDonateButton = () => {
  return (
    <GooglePayButton
      environment="TEST"
      buttonType={"donate"}
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "12345678901234567890",
          merchantName: "Demo Merchant",
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: "100.00",
          currencyCode: "USD",
          countryCode: "US",
        },
      }}
      onLoadPaymentData={(paymentRequest) => {
        console.log("load payment data", paymentRequest);
      }}
    />
  );
};

const chooseValueUAN = [
  { value: 50, text: "50 UAH" },
  { value: 100, text: "100 UAH" },
  { value: 200, text: "200 UAH" },
  { value: 500, text: "500 UAH" },
];

const chooseValueUSD = [
  { value: 5, text: "5 USD" },
  { value: 10, text: "10 USD" },
  { value: 50, text: "50 USD" },
  { value: 100, text: "100 USD" },
];

const chooseValueEUR = [
  { value: 5, text: "5 EUR" },
  { value: 10, text: "10 EUR" },
  { value: 50, text: "50 EUR" },
  { value: 100, text: "100 EUR" },
];

const chooseCurrency = [
  { value: "uah", text: "UAH" },
  { value: "usd", text: "USD" },
  { value: "eur", text: "EUR" },
];
const DonatePage = () => {
  /// --- STATES ---
  const [selectedCurrency, setSelectedCurrency] = useState(0);
  const [selectedCurrencyArray, setSelectedCurrencyArray] =
    useState(chooseValueUAN);
  const { t, i18n } = useTranslation();

  // --- FUNCTIONS ---
  const onClickCurrency = (id) => {
    setSelectedCurrency(id);
  };

  /// --- USE-EFFECTS ---

  useEffect(() => {
    switch (selectedCurrency) {
      case 1:
        setSelectedCurrencyArray(chooseValueUAN);
        break;

      case 2:
        setSelectedCurrencyArray(chooseValueUSD);
        break;

      case 3:
        setSelectedCurrencyArray(chooseValueEUR);

        break;
    }
  }, [selectedCurrency]);
  return (
    <div className={styles.donate}>
      <div className={styles.donate_container}>
        <div>
          <span className={styles.donate_title}>
            {t("donate.chooseCurrency")}:
          </span>

          <div className={styles.donate_valueBlock_container}>
            {chooseCurrency.map((elem, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    onClickCurrency(index + 1);
                  }}
                  className={`${styles.donate_valueBlock} ${
                    selectedCurrency == index + 1
                      ? styles.donate_valueBlock_active
                      : ""
                  }`}
                >
                  <span className={styles.donate_valueBlockTitle}>
                    {elem.text}
                  </span>{" "}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <span className={styles.donate_title}>
            {t("donate.chooseValue")}:
          </span>

          <div className={styles.donate_valueBlock_container}>
            {selectedCurrencyArray.map((elem, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {}}
                  className={styles.donate_valueBlock}
                >
                  <span className={styles.donate_valueBlockTitle}>
                    {elem.text}
                  </span>{" "}
                </div>
              );
            })}
          </div>
        </div>

        {/*--- NATIONAL CURRENCY ---*/}
        <div className={styles.donate_line} />
        <div style={{}}>
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

        {/*--- FOREIGHT CURRENCY ---*/}
        <div style={{}}>
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

        <div className={styles.donate_line} />

        <div>
          <span className={styles.donate_title}>Чи введіть вручну:</span>
          <ReInput
            title={{ text: "Значення", color: "white" }}
            type={"number"}
          />
        </div>
        <div className={styles.donate_line} />

        <div>
          <span className={styles.donate_title}>
            Допомогайте за допомогою Google Pay:
          </span>

          <div className={styles.donate_gooleDonate}>
            <GoogleDonateButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
