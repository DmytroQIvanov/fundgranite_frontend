import React from "react";
import GooglePayButton from "@google-pay/button-react";
import styles from "./Donate.module.scss";
import ReInput from "../../Components/Input";
import moneySVG from "../../Assets/usd-circle.svg";
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

const chooseValue = [
  { value: 100, text: "100" },
  { value: 200, text: "200" },
  { value: 500, text: "500" },
  { value: 1000, text: "1000" },
];

const chooseCurrency = [
  { value: 100, text: "100" },
  { value: 200, text: "200" },
  { value: 500, text: "500" },
  { value: 1000, text: "1000" },
];
const DonatePage = () => {
  return (
    <div className={styles.donate}>
      <div className={styles.donate_container}>
        <div>
          <span className={styles.donate_title}>Оберіть суму</span>

          <div className={styles.donate_valueBlock_container}>
            {chooseValue.map((elem, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {}}
                  className={styles.donate_valueBlock}
                >
                  <span className={styles.donate_valueBlockTitle}>
                    {elem.text}
                  </span>{" "}
                  <img
                    className={styles.donate_valueBlock_icon}
                    src={moneySVG}
                    width={30}
                    color={"white"}
                  />
                  {index >= 1 && (
                    <img
                      className={styles.donate_valueBlock_icon}
                      style={{
                        position: "absolute",
                        right: "5px",
                        width: "25px",
                      }}
                      src={moneySVG}
                    />
                  )}
                  {index >= 2 && (
                    <img
                      className={styles.donate_valueBlock_icon}
                      style={{
                        position: "absolute",
                        right: "-5px",
                        width: "20px",
                      }}
                      src={moneySVG}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.donate_line} />

        <div>
          <span className={styles.donate_title}>Чи введіть вручну:</span>
          <ReInput
            title={{ text: "Значення", color: "white" }}
            type={"number"}
          />
        </div>

        <div className={styles.donate_gooleDonate}>
          <GoogleDonateButton />
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
