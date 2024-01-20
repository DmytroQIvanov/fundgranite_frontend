import React, { useEffect, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const PageWrapper = ({
  children,
  header,
  footer,
  subheaderLogo,
  scrollToTop,
  callMeBackBtn = true,
}) => {
  const [callBackStates, setCallBackStates] = useState({
    phone: "",
    description: "",
  });
  const [callBackModalState, setCallBackmodalState] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");
  const [pageAnim, setPageAnim] = useState(null);
  const [pageAnimOption, setPageAnimOption] = useState("swipe");
  const [pageAnimSide, setPageAnimSide] = useState("Right");
  const location = useLocation();
  useEffect(() => {
    // console.log();
    setCurrentPage(location.pathname);
  }, []);
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

  const onPageAnim = ({
    state: value,
    url,
    swipeSide,
    pageAnimOption: pageAnimOptionResp,
  }) => {
    console.log("url", pageAnimOptionResp);
    setCurrentPage(url);
    setPageAnimOption(pageAnimOptionResp);
    if (pageAnimOptionResp === "swipe") {
      setPageAnimSide(swipeSide);
      setPageAnim(value ?? null);
    } else {
      setPageAnim(value ?? null);
    }
    setTimeout(() => {
      setPageAnim("show");
      navigateToCheckout(url);
      setTimeout(() => {
        setPageAnim(null);
      }, [300]);
    }, [300]);
  };
  const onClickCallBack = (value) => {
    setCallBackmodalState((prevState) => value ?? !prevState);
  };

  const onCallBackSend = () => {
    if (callBackStates.phone) {
      axios.post("https://fundgranite.com.ua/api/telegram", callBackStates);
    }
    onClickCallBack(false);
  };

  const [wrapperClassString, setWrapperClassString] = useState("");

  useEffect(() => {
    setWrapperClassString(
      pageAnimOption === "swipe"
        ? `${
            pageAnim === "show"
              ? styles[`pageWrapper_PageAnim__show__Active${pageAnimSide}`]
              : styles[`pageWrapper_PageAnim__show__Inactive${pageAnimSide}`]
          }
         ${
           pageAnim === "hide"
             ? styles[`pageWrapper_PageAnim__hide__Active${pageAnimSide}`]
             : styles[`pageWrapper_PageAnim__hide__Inactive${pageAnimSide}`]
         }`
        : `${
            pageAnim !== "hide"
              ? styles[`pageWrapper_PageAnim__hide__Active`]
              : styles[`pageWrapper_PageAnim__hide__Inactive`]
          }
          ${
            pageAnim !== "show"
              ? styles[`pageWrapper_PageAnim__hide__Active`]
              : styles[`pageWrapper_PageAnim__hide__Inactive`]
          }
          `,
    );
    console.log("wrapperClassString", wrapperClassString);
  }, [pageAnimOption, pageAnim, pageAnimSide]);
  // let wrapperClassString =
  //   pageAnimOption === "swipe"
  //     ? `${
  //         pageAnim === "show"
  //           ? styles[`pageWrapper_PageAnim__show__Active${pageAnimSide}`]
  //           : styles[`pageWrapper_PageAnim__show__Inactive${pageAnimSide}`]
  //       }
  //        ${
  //          pageAnim === "hide"
  //            ? styles[`pageWrapper_PageAnim__hide__Active${pageAnimSide}`]
  //            : styles[`pageWrapper_PageAnim__hide__Inactive${pageAnimSide}`]
  //        }`
  //     : `${
  //         pageAnim === "show"
  //           ? styles[`pageWrapper_PageAnim__hide__Active`]
  //           : styles[`pageWrapper_PageAnim__hide__Inactive`]
  //       }`;
  // switch () {
  //
  // }
  return (
    <div className={styles.pageWrapper}>
      <ScrollToTop />
      {header && <Header onPageAnim={onPageAnim} currentPage={currentPage} />}
      {/*{pageAnimSide} / {pageAnim}*/}
      <div
        className={`${styles.pageWrapper_Page} 
        ${pageAnim ? "pageSwapping" : ""}
        ${wrapperClassString}
        `}
      >
        <div>
          {callMeBackBtn && (
            <CallBackBottomBTN onClick={() => onClickCallBack(true)} />
          )}
          {subheaderLogo && <SubHeaderLogo />}
          {/*--- CHILDREN ---*/}
          {/*<div style={{ margin: "20px 0px 20px 0px" }}>*/}
          {children({ onPageAnim })}
          {/*</div>*/}

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
              onChange={(value) => {
                setCallBackStates((prevState) => {
                  return { ...prevState, phone: value };
                });
              }}
            />
            <div style={{ marginTop: "10px" }}>
              <ReInput
                title={{ text: "Питання (не обов'язково)" }}
                height={"300px"}
                type={"textarea"}
                placeholder={"Як можна допомогти ще?"}
                onChange={(value) => {
                  setCallBackStates((prevState) => {
                    return { ...prevState, description: value };
                  });
                }}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <ReButton
                type={"brownBorder"}
                onClick={() => {
                  onCallBackSend();
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
