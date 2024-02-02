import React from "react";
import styles from "./CallBackBottomBTN.module.scss";
import { useTranslation } from "react-i18next";
import { ReactComponent as PhoneSVG } from "../../../../Assets/phone.svg";

const CallBackBottomBTN = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    // <div
    //   style={{
    //     width: "100px",
    //     height: "1000px",
    //     position: "sticky",
    //   }}
    // >
    <div className={`${styles.callBackBTN} prevent-select`} onClick={onClick}>
      <PhoneSVG />
    </div>
    // </div>
  );
};

export default CallBackBottomBTN;
