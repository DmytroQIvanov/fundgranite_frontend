import React from "react";
import { chooseCurrency } from "../index";
import styles from "./Postpaid.module.scss";
import ReButton from "../../../Components/ReComponents/Button";

const Postpaid = ({ postPaid, setPostPaid }) => {
  return (
    <div className={styles.postPaid}>
      <h1>Оплата прошла успішно!</h1>
      <h2>
        Ваш внесок: {postPaid.value} {chooseCurrency[postPaid.currency].text} !
        Дякуємо за внесок!
      </h2>

      <span
        style={{ fontSize: "22px", cursor: "pointer" }}
        onClick={() => {
          setPostPaid(false);
        }}
      >
        Повернутись
      </span>
    </div>
  );
};

export default Postpaid;
