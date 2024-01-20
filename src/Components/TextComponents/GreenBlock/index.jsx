import React, { useEffect, useRef, useState } from "react";
import styles from "./GreenBlock.module.scss";
import { useTranslation } from "react-i18next";

const GreenBlock = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.greenBlock}>
      <div className={styles.greenBlock_container}>
        <div className={styles.greenBlock_title}>
          {t("aboutUs.ourInitiatives.title")}
        </div>
        <div className={styles.greenBlock_line} />
        <div className={styles.greenBlock_description}>
          <div className={styles.greenBlock_description_item}>
            <h3>{t("aboutUs.ourInitiatives.block1.title")}</h3>
            <span>{t("aboutUs.ourInitiatives.block1.description")}</span>
            <div className={styles.greenBlock_description_item_Border1} />
            <div className={styles.greenBlock_description_item_Border2} />
          </div>
          <div className={styles.greenBlock_description_item}>
            <h3>{t("aboutUs.ourInitiatives.block1.title")}</h3>
            <span>{t("aboutUs.ourInitiatives.block2.description")}</span>
            <div className={styles.greenBlock_description_item_Border1} />
            <div className={styles.greenBlock_description_item_Border2} />
          </div>
          <div className={styles.greenBlock_description_item}>
            <h3>{t("aboutUs.ourInitiatives.block1.title")}</h3>
            <span>{t("aboutUs.ourInitiatives.block3.description")}</span>
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
