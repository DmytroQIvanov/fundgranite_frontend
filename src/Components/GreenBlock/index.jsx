import React from "react";
import styles from "./GreenBlock.module.scss";

const GreenBlock = () => {
  return (
    <div className={styles.greenBlock}>
      <div className={styles.greenBlock_container}>
        <div className={styles.greenBlock_title}>Наші ініціативи</div>
        <div className={styles.greenBlock_line} />
        <div className={styles.greenBlock_description}>
          <ul>
            <li>
              <b>Фінансова допомога: </b>Надаємо фінансову допомогу
              військовослужбовцям та їх родинам для покриття різних витрат,
              таких як медичні послуги, освіта, житло та інше.
            </li>
            <li>
              <b>Медична підтримка: </b>Забезпечуємо доступ до реабілітації
              після травм, отриманих на війні.
            </li>
            <li>
              <b>Навчання та розвиток: </b>Забезпечуємо безкоштовне навчання
              військовослужбовців на БпЛА різного типу
            </li>
          </ul>
        </div>
        <div className={styles.greenBlock_line} />
      </div>
    </div>
  );
};

export default GreenBlock;
