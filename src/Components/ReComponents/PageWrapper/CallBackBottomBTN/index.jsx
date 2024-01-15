import React from "react";
import styles from "./CallBackBottomBTN.module.scss";
import { useTranslation } from "react-i18next";

const CallBackBottomBTN = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.callBackBTN} onClick={onClick}>
      <span>{t("wrapper.recallMe")}</span>
    </div>
  );
};

export default CallBackBottomBTN;
