import React from "react";
import * as PropTypes from "prop-types";
import ReInput from "../../../../Components/ReComponents/Input";
import { useTranslation } from "react-i18next";
import styles from "../../Donate.module.scss";
import { chooseCurrency } from "../../index";
import GooglePayButton from "@google-pay/button-react";

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

const AutoOption = ({
  onClickCurrency,
  selectedCurrency,
  selectedCurrencyArray,
  onClickPaymentValue,
  selectedValue,
  onPay,
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <span className={styles.donate_title}>
          {t("donate.chooseCurrency")}:
        </span>

        <div
          className={`${styles.donate_valueBlock_container} ${styles.donate_valueBlock_container2}`}
        >
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

        <div
          className={`${styles.donate_valueBlock_container} ${styles.donate_valueBlock_container3}`}
        >
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
        <ReInput type={"number"} />
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

export default AutoOption;
