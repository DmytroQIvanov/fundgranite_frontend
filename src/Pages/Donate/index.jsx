import React, { useEffect, useState } from "react";
import styles from "./Donate.module.scss";
import { useTranslation } from "react-i18next";
import Postpaid from "./Postpaid/Postpaid";
import Beforepay from "./Beforepay/Beforepay";

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

export const chooseCurrency = [
  { value: "UAH", text: "UAH" },
  { value: "USD", text: "USD" },
  { value: "EUR", text: "EUR" },
];

export const paymentOptions = [
  { text: "Через Google Pay && Apple Pay" },
  { text: "Вручну" },
  { text: "По реквізитам" },
];
const DonatePage = () => {
  const selectCurrencyFunction = (selectedCurrencyValue) => {
    let value;
    switch (selectedCurrencyValue) {
      case 1:
        value = chooseValueUAN;
        break;
      case 2:
        value = chooseValueUSD;
        break;

      case 3:
        value = chooseValueEUR;
        break;

      default:
        value = chooseValueUAN;
    }
    return value;
  };
  /// --- STATES ---
  const [selectedCurrency, setSelectedCurrency] = useState(0);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);

  const [selectedCurrencyArray, setSelectedCurrencyArray] =
    useState(chooseValueUAN);
  const [postPaid, setPostPaid] = useState();

  const { t, i18n } = useTranslation();

  // --- FUNCTIONS ---
  const onClickCurrency = (id) => {
    setSelectedCurrency(id);
  };
  const onClickPaymentOption = (id) => {
    setSelectedPaymentOption(id);
  };

  const onClickPaymentValue = (value) => {
    setSelectedValue(value);
  };
  const onPay = () => {
    setPostPaid({
      value: "300",
      currency: selectedCurrency,
      state: true,
    });
  };

  /// --- USE-EFFECTS ---

  useEffect(() => {
    setSelectedCurrencyArray(selectCurrencyFunction(selectedCurrency));
  }, [selectedCurrency]);
  return (
    <div className={styles.donate}>
      <div className={styles.donate_container}>
        {postPaid && postPaid?.state ? (
          <Postpaid setPostPaid={setPostPaid} postPaid={postPaid} />
        ) : (
          <Beforepay
            onClickCurrency={onClickCurrency}
            selectedCurrency={selectedCurrency}
            selectedCurrencyArray={selectedCurrencyArray}
            onPay={onPay}
            onClickPaymentOption={onClickPaymentOption}
            selectedPaymentOption={selectedPaymentOption}
            onClickPaymentValue={onClickPaymentValue}
            selectedValue={selectedValue}
          />
        )}
      </div>
    </div>
  );
};

export default DonatePage;
