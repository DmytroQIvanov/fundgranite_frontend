import React, { useState } from "react";
import Header from "../../Header";
import FooterComponent from "../../Footer";
import SubHeaderLogo from "../../SubHeaderLogo";
import ScrollToTop from "../../ScrollToTop";
import CustomModal from "../../CustomModal";
import CallBackBottomBTN from "./CallBackBottomBTN";
import ReInput from "../Input";
import ReButton from "../Button";
import styles from "./PageWrapper.module.scss";
// import { h } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useNavigate } from "react-router-dom";

const PageWrapper = ({
  children,
  header,
  footer,
  subheaderLogo,
  scrollToTop,
  callMeBackBtn = true,
}) => {
  const [callBackModalState, setCallBackmodalState] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");
  const [pageAnim, setPageAnim] = useState(null);
  const [pageAnimSide, setPageAnimSide] = useState("Right");
  // const history = useHistory();

  // let history = createBrowserHistory();
  // history.listen(({ location, action }) => {
  // this is called whenever new locations come in
  // the action is POP, PUSH, or REPLACE
  // });
  let navigate = useNavigate();

  const navigateToCheckout = (url) => {
    navigate(url);
  };

  const onPageAnim = (value, url, swipeSide) => {
    setCurrentPage(url);
    setPageAnimSide(swipeSide);
    setPageAnim(value ?? null);
    setTimeout(() => {
      setPageAnim("show");
      // setPageAnimSide("right");
      navigateToCheckout(url);
      setTimeout(() => {
        setPageAnim(null);
      }, [300]);
    }, [300]);
  };
  const onClickCallBack = (value) => {
    setCallBackmodalState((prevState) => value ?? !prevState);
  };
  return (
    <div className={styles.pageWrapper}>
      <ScrollToTop />
      {header && <Header onPageAnim={onPageAnim} />}
      {/*{pageAnimSide} / {pageAnim}*/}
      <div
        className={`${styles.pageWrapper_Page} 
        ${pageAnim ? "pageSwapping" : ""}
        ${
          pageAnim === "show"
            ? styles[`pageWrapper_PageAnim__show__Active${pageAnimSide}`]
            : styles[`pageWrapper_PageAnim__show__Inactive${pageAnimSide}`]
        }
         ${
           pageAnim === "hide"
             ? styles[`pageWrapper_PageAnim__hide__Active${pageAnimSide}`]
             : styles[`pageWrapper_PageAnim__hide__Inactive${pageAnimSide}`]
         }`}
      >
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
    </div>
  );
};

export default PageWrapper;
