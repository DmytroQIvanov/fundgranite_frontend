import React from "react";
import styles from "./CallBackBottomBTN.module.scss";
import { useTranslation } from "react-i18next";
import { ReactComponent as PhoneSVG } from "../../../../Assets/phone.svg";

const CallBackBottomBTN = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.callBackBTN} onClick={onClick}>
      <span>
        <PhoneSVG />
      </span>
    </div>
  );
};

export default CallBackBottomBTN;
