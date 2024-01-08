import React, { useState } from "react";
import Header from "../../Header";
import FooterComponent from "../../Footer";
import SubHeaderLogo from "../../SubHeaderLogo";
import ScrollToTop from "../../ScrollToTop";
import CustomModal from "../../CustomModal";
import CallBackBottomBTN from "./CallBackBottomBTN";

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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ScrollToTop />
      {header && <Header />}
      {subheaderLogo && <SubHeaderLogo />}
      <div style={{ margin: "20px 0px 20px 0px" }}>{children}</div>
      {callMeBackBtn && (
        <CallBackBottomBTN onClick={() => onClickCallBack(true)} />
      )}
      {footer && <FooterComponent />}
      <CustomModal
        isOpened={callBackModalState}
        onClose={() => onClickCallBack(false)}
      />
    </div>
  );
};

export default PageWrapper;
