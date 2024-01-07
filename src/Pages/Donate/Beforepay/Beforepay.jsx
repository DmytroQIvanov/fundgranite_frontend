import React from "react";
import styles from "../Donate.module.scss";
import { useTranslation } from "react-i18next";
import { chooseCurrency, paymentOptions } from "../index";
import GooglePayButton from "@google-pay/button-react";
import ReInput from "../../../Components/ReComponents/Input";

const GoogleDonateButton = ({ onPay, selectedCurrency, selectedValue }) => {
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
          totalPrice: `${selectedValue + 1}.00`,
          currencyCode: chooseCurrency[selectedCurrency].text,
          countryCode: "US",
        },
      }}
      onLoadPaymentData={(paymentRequest) => {
        onPay();

        // console.log({
        //   totalPriceStatus: "FINAL",
        //   totalPriceLabel: "Total",
        //   totalPrice: `${selectedValue + 1}.00`,
        //   currencyCode: `${selectedCurrency + 1}`,
        //   countryCode: "US",
        // });
        console.log("load payment data", paymentRequest);
      }}
    />
  );
};

const Beforepay = ({
  onClickCurrency,
  selectedCurrency,
  selectedCurrencyArray,
  onPay,
  selectedPaymentOption,
  onClickPaymentOption,
  selectedValue,
  onClickPaymentValue,
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <span className={styles.donate_title}>
        {t("donate.choosePaymentOption")}:
      </span>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        {paymentOptions.map((elem, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                onClickPaymentOption(index);
              }}
              className={`${styles.donate_valueBlock} ${
                selectedPaymentOption == index
                  ? styles.donate_valueBlock_active
                  : ""
              }`}
            >
              <span className={styles.donate_valueBlockTitle}>{elem.text}</span>{" "}
            </div>
          );
        })}
      </div>
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
                  onClickCurrency(index);
                }}
                className={`${styles.donate_valueBlock} ${
                  selectedCurrency == index
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
        <span className={styles.donate_title}>{t("donate.chooseValue")}:</span>

        <div className={styles.donate_valueBlock_container}>
          {selectedCurrencyArray.map((elem, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  onClickPaymentValue(index);
                }}
                className={`${styles.donate_valueBlock} ${
                  selectedValue == index ? styles.donate_valueBlock_active : ""
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

      <div className={styles.donate_line} />

      <div>
        <span className={styles.donate_title}>Чи введіть вручну:</span>
        <ReInput title={{ text: "Значення", color: "white" }} type={"number"} />
      </div>
      <div className={styles.donate_line} />

      <div>
        <span className={styles.donate_title}>
          Допомогайте за допомогою Google Pay:
        </span>

        <div className={styles.donate_gooleDonate}>
          <GoogleDonateButton
            onPay={onPay}
            selectedCurrency={selectedCurrency}
            selectedValue={selectedValue}
          />
        </div>
      </div>
    </div>
  );
};

export default Beforepay;
