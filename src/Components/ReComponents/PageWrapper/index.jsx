import React, { useState } from "react";
import Header from "../../Header";
import FooterComponent from "../../Footer";
import SubHeaderLogo from "../../SubHeaderLogo";
import ScrollToTop from "../../ScrollToTop";
import CustomModal from "../../CustomModal";
import CallBackBottomBTN from "./CallBackBottomBTN";
import ReInput from "../Input";
import ReButton from "../Button";

const PageWrapper = ({
  children,
  header,
  footer,
  subheaderLogo,
  scrollToTop,
  callMeBackBtn = true,
}) => {
  const [callBackModalState, setCallBackmodalState] = useState(false);

  const onClickCallBack = (value) => {
    setCallBackmodalState((prevState) => value ?? !prevState);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ScrollToTop />
      {header && <Header />}
      <div>
        {subheaderLogo && <SubHeaderLogo />}
        <div style={{ margin: "20px 0px 20px 0px" }}>{children}</div>
        {callMeBackBtn && (
          <CallBackBottomBTN onClick={() => onClickCallBack(true)} />
        )}
        {footer && <FooterComponent />}
        <CustomModal
          isOpened={callBackModalState}
          onClose={() => onClickCallBack(false)}
        >
          <h3>Вкажіть номер і ми Вам перетелефонуємо!</h3>
          <ReInput
            title={{ text: "Номер телефону" }}
            placeholder={"+380999999999"}
            // defaultValue={}
            type={"number"}
            maxLength={13}
          />
          <div style={{ marginTop: "10px" }}>
            <ReInput
              title={{ text: "Питання (не обов'язково)" }}
              height={"300px"}
              type={"textarea"}
              placeholder={"Як можна допомогти ще?"}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <ReButton
              type={"brownBorder"}
              onClick={() => {
                onClickCallBack(false);
              }}
            >
              Відправити
            </ReButton>
          </div>
        </CustomModal>
      </div>
    </div>
  );
};

export default PageWrapper;
