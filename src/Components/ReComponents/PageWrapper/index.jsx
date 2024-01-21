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
import { useTranslation } from "react-i18next";

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
  const [currentFullPage, setCurrentFullPage] = useState("/ua");
  // const [pageAnim, setPageAnim] = useState(null);
  const [pageAnim, setPageAnim] = useState();
  const [pageAnimOption, setPageAnimOption] = useState("swipe");
  const [pageAnimSide, setPageAnimSide] = useState("Right");
  const location = useLocation();

  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("ua");
  const path = location.pathname.split("/");
  let navigate = useNavigate();

  useEffect(() => {
    setCurrentFullPage(location.pathname);
    if (path[1] === "ua" || path[1] === "en") setCurrentLanguage(path[1]);
    console.log("path[1]", path[1]);
    console.log("path", location.pathname);

    onLanguageChange({ language: path[1], firstTime: true });
  }, []);

  const onLanguageChange = ({ language = "ua", firstTime }) => {
    // navigate(`/${currentLanguage}/`);

    setCurrentLanguage(language);
    i18n.changeLanguage(language);

    if (!firstTime && language === "ua") {
      window.history.replaceState(
        null,
        "",
        currentFullPage.replace("/en", "/ua"),
      );
      setCurrentFullPage((prevState) => prevState.replace("/en", "/ua"));
    } else if (!firstTime) {
      window.history.replaceState(
        null,
        "",
        currentFullPage.replace("/ua", "/en"),
      );

      setCurrentFullPage((prevState) => prevState.replace("/ua", "/en"));
    }
  };

  useEffect(() => {
    if (currentFullPage === "/") {
      window.history.replaceState(null, "", "/ua/");
      setCurrentFullPage("/ua/");
      setCurrentLanguage("ua");
      // return;
    }
    // if (path[1] === "ua" || path[1] === "en") setCurrentLanguage(path[1]);

    if (
      currentFullPage === "/" &&
      (!currentFullPage.includes("ua") || !currentFullPage.includes("en"))
    ) {
      setCurrentPage(currentFullPage);
    } else {
      setCurrentPage("/" + currentFullPage.split("/").slice(2).join("/"));
    }
  }, [currentFullPage]);

  const navigateToCheckout = (url) => {
    setCurrentFullPage(`/${currentLanguage ?? "ua"}` + url);
    // navigate(`/${currentLanguage ?? "ua"}` + url);
    navigate(`/${currentLanguage ?? "ua"}` + url);
  };

  const onPageAnim = ({
    state: value = "hide",
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

  return (
    <div className={styles.pageWrapper}>
      <ScrollToTop />
      {header && (
        <Header
          onPageAnim={onPageAnim}
          currentPage={currentPage}
          onLanguageChange={onLanguageChange}
          currentLanguage={currentLanguage}
        />
      )}
      {/*{currentFullPage} -------*/}
      {/*{currentPage}*/}
      {/*-------{currentLanguage}*/}
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

          {footer && <FooterComponent onPageAnim={onPageAnim} />}
          <CustomModal
            isOpened={callBackModalState}
            onClose={() => onClickCallBack(false)}
          >
            <h3>{t("callBackModal.title")}</h3>
            <ReInput
              title={{ text: t("callBackModal.numberInputTitle") }}
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
                title={{ text: t("callBackModal.descriptionInputTitle") }}
                height={"300px"}
                type={"textarea"}
                placeholder={t("callBackModal.descriptionInputPlaceholder")}
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
                {t("callBackModal.send")}
              </ReButton>
            </div>
          </CustomModal>
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
