import React, { useEffect, useState } from "react";
import Link from "./Link";
import { useTranslation } from "react-i18next";
import MobileSidebar from "../MobileSidebar";
import { useNavigate } from "react-router-dom";
// --- STYLES ---
import styles from "./Header.module.scss";

// --- ICONS ---
import homeSVG from "../../Assets/home-1-svgrepo-com.svg";
import aboutUsSVG from "../../Assets/about-us-svgrepo-com.svg";
import donateSVG from "../../Assets/donate-svgrepo-com.svg";
import activitySVG from "../../Assets/activity-heart-svgrepo-com.svg";
import redHeart from "../../Assets/iconmonstr-heart-thin.svg";
import logo from "../../Assets/LOGO.svg";
import searchSVG from "../../Assets/search-svgrepo-com.svg";

const LANGUAGES = [
  {
    label: "UA",
    code: "ua",
  },
  {
    label: "ENG",
    code: "en",
  },
];

const LINKS = [
  {
    link: "/",
    text: "header.main",
    icon: homeSVG,
    key: 0,
  },
  {
    link: "/aboutUs",
    text: "header.aboutUs",
    icon: aboutUsSVG,
    key: 1,
  },
  {
    link: "/activity",
    text: "header.blog",
    icon: activitySVG,
    icon2: (
      <div className={styles.header_searchContainer}>
        <img
          className={styles.header_searchContainer_search}
          src={searchSVG}
          width={25}
          style={{ margin: "auto" }}
        />
      </div>
    ),
    key: 2,
  },

  {
    link: "/donate",
    text: "header.donate",
    style: { fontFamily: "roboto", display: "flex" },
    underline: true,
    icon: donateSVG,
    icon2: (
      <img
        src={redHeart}
        width={25}
        style={{ margin: "auto" }}
        className={styles.header_heart}
      />
    ),
    key: 3,
  },
];
const Header = ({
  onPageAnim,
  currentIndex,
  currentPage,
  onLanguageChange,
  currentLanguage,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [sidebarState, setSidebarState] = useState(false);

  let navigate = useNavigate();
  const { t, i18n } = useTranslation();
  // useEffect(() => {
  //   setSelectedLanguage(i18n.language);
  // }, []);
  const onSelectLanguage = (value) => {
    onLanguageChange({ language: value });
    // setSelectedLanguage(value);
    // i18n.changeLanguage(value);
  };

  const onSidebarIconClick = () => {
    setSidebarState((prevState) => !prevState);
  };
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <div className={styles.header_logo} onClick={() => navigate("/")}>
            <img src={logo} width={60} height={65} alt={"Fund Granite logo"} />
          </div>
          <h1
            style={{ color: "white", marginLeft: "10px" }}
            className={styles.header_title}
            onClick={() => navigate("/")}
          >
            FUND GRANITE
          </h1>
          <div
            style={{
              margin: "auto 20px auto auto",
              display: "flex",
              gap: "6px",
              cursor: "pointer",
            }}
            className={"prevent-select"}
          >
            {LANGUAGES.map((elem, index) => {
              return (
                <div key={index}>
                  <span
                    onClick={() => onSelectLanguage(elem.code)}
                    style={
                      elem.code === currentLanguage
                        ? { textDecoration: "underline", color: "white" }
                        : { color: "white" }
                    }
                  >
                    {elem.label}
                  </span>
                  <span style={{ color: "white" }}>{index === 0 && " -"}</span>
                </div>
              );
            })}
            {/*<ReSelect*/}
            {/*  value={selectedLanguage}*/}
            {/*  onChange={onSelectLanguage}*/}
            {/*  array={LANGUAGES}*/}
            {/*/>*/}
          </div>

          {/*--- MOBILE SIDEBAR ---*/}
          <div
            className={`${styles.header_sidebarIcon} ${
              sidebarState
                ? styles.header_sidebarIcon__active
                : styles.header_sidebarIcon__inactive
            }`}
            onClick={() => {
              onSidebarIconClick();
            }}
          >
            <div
              className={`${styles.header_sidebarIconDiv} ${styles.header_sidebarIconDiv_1}`}
            />
            <div
              className={`${styles.header_sidebarIconDiv} ${styles.header_sidebarIconDiv_2}`}
            />
            <div
              className={`${styles.header_sidebarIconDiv} ${styles.header_sidebarIconDiv_3}`}
            />
          </div>
          <div className={styles.header_linksContainer}>
            {LINKS.map((elem, index) => (
              <Link
                link={elem.link}
                style={elem?.style}
                underline={elem?.underline}
                onClick={onPageAnim}
                index={index}
                currentIndex={currentIndex}
                LINKS={LINKS}
                currentPage={currentPage}
                key={index}
              >
                <div style={{ display: "flex", gap: "5px" }}>
                  {t(elem.text)}
                  {elem.icon2 && elem.icon2}
                </div>
              </Link>
            ))}

            {/*<Link link={"/aboutUs"}>{t("header.aboutUs")}</Link>*/}
            {/*<Link link={"/donate"}>{t("header.donate")}</Link>*/}
            {/*<Link link={"/blog"}>{t("header.blog")}</Link>*/}
          </div>
        </div>
        <div className={styles.header_bottom}></div>
      </header>
      <div className={styles.headerMock}></div>
      <MobileSidebar
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
        links={LINKS}
        onPageAnim={onPageAnim}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Header;
