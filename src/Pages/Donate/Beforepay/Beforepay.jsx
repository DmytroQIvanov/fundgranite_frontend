import React, { useEffect, useState } from "react";
import styles from "../Donate.module.scss";
import { useTranslation } from "react-i18next";
import { chooseCurrency, paymentOptions } from "../index";
import AutoOption from "../PaymentOptions/AutoOption";
import DetailsOption from "../PaymentOptions/DetaisOption";
import ManualOption from "../PaymentOptions/ManualOption";

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

  const [selectedPaymentOptionNode, setSelectedPaymentOptionNode] = useState();

  useEffect(() => {
    switch (selectedPaymentOption) {
      case 0:
        setSelectedPaymentOptionNode(
          <AutoOption
            {...{
              onClickCurrency,
              selectedCurrency,
              selectedCurrencyArray,
              onClickPaymentValue,
              selectedValue,
              onPay,
            }}
          />,
        );
        break;

      case 1:
        setSelectedPaymentOptionNode(<ManualOption />);
        break;

      case 2:
        setSelectedPaymentOptionNode(<DetailsOption />);
        break;

      default:
        setSelectedPaymentOptionNode(
          <AutoOption
            {...{
              onClickCurrency,
              selectedCurrency,
              selectedCurrencyArray,
              onClickPaymentValue,
              selectedValue,
              onPay,
            }}
          />,
        );
        break;
    }
  }, [selectedPaymentOption]);

  return (
    <div>
      <span className={styles.donate_title}>
        {t("donate.choosePaymentOption")}:
      </span>

      <div
        className={`${styles.donate_valueBlock_container} ${styles.donate_valueBlock_container1}`}
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
              <span className={styles.donate_valueBlockTitle}>
                {elem.text}

                {elem.icons?.map((elem) => (
                  <img src={elem} width={200} />
                ))}
              </span>{" "}
            </div>
          );
        })}
      </div>
      {selectedPaymentOptionNode}
    </div>
  );
};

export default Beforepay;
