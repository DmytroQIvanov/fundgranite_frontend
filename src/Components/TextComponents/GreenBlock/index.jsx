import React, { useEffect, useRef, useState } from "react";
import styles from "./GreenBlock.module.scss";

const GreenBlock = () => {
  return (
    <div className={styles.greenBlock}>
      <div className={styles.greenBlock_container}>
        <div className={styles.greenBlock_title}>Наші ініціативи</div>
        <div className={styles.greenBlock_line} />
        <div className={styles.greenBlock_description}>
          <div className={styles.greenBlock_description_item}>
            <h3>Фінансова допомога</h3>
            <span>
              Надаємо фінансову допомогу військовослужбовцям та їх родинам для
              покриття різних витрат, таких як медичні послуги, освіта, житло та
              інше.
            </span>
            <div className={styles.greenBlock_description_item_Border1} />
            <div className={styles.greenBlock_description_item_Border2} />
          </div>
          <div className={styles.greenBlock_description_item}>
            <h3>Медична підтримка </h3>
            <span>
              Забезпечуємо доступ до реабілітації після травм, отриманих на
              війні.
            </span>
            <div className={styles.greenBlock_description_item_Border1} />
            <div className={styles.greenBlock_description_item_Border2} />
          </div>
          <div className={styles.greenBlock_description_item}>
            <h3>Навчання та розвиток</h3>
            <span>
              Забезпечуємо безкоштовне навчання військовослужбовців на БпЛА
              різного типу.
            </span>
            <div className={styles.greenBlock_description_item_Border1} />
            <div className={styles.greenBlock_description_item_Border2} />
          </div>
        </div>
        <div className={styles.greenBlock_line} />
      </div>
    </div>
  );
};

export default GreenBlock;
