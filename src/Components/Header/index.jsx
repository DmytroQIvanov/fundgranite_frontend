import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../Assets/LOGO.svg";
import Link from "./Link";
import { useTranslation } from "react-i18next";
import MobileSidebar from "../MobileSidebar";
import ReSelect from "../ReComponents/ReSelect";
import homeSVG from "../../Assets/home-1-svgrepo-com.svg";
import aboutUsSVG from "../../Assets/about-us-svgrepo-com.svg";
import donateSVG from "../../Assets/donate-svgrepo-com.svg";
import activitySVG from "../../Assets/activity-heart-svgrepo-com.svg";
import redHeart from "../../Assets/redHeart.svg";

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
  },
  {
    link: "/aboutUs",
    text: "header.aboutUs",
    icon: aboutUsSVG,
  },
  {
    link: "/activity",
    text: "header.blog",
    icon: activitySVG,
  },

  {
    link: "/donate",
    text: "header.donate",
    style: { fontFamily: "roboto" },
    underline: true,
    icon: donateSVG,
    icon2: redHeart,
  },
];
const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [sidebarState, setSidebarState] = useState(false);

  const { t, i18n } = useTranslation();
  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, []);
  const onSelectLanguage = (value) => {
    setSelectedLanguage(value);
    i18n.changeLanguage(value);
  };

  const onSidebarIconClick = () => {
    setSidebarState((prevState) => !prevState);
  };
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <div className={styles.header_logo}>
            <img src={logo} width={60} height={65} alt={"Fund Granite logo"} />
          </div>
          <h1
            style={{ color: "white", marginLeft: "10px" }}
            className={styles.header_title}
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
                <div>
                  <span
                    onClick={() => onSelectLanguage(elem.code)}
                    style={
                      elem.code === selectedLanguage
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
            className={styles.header_sidebarIcon}
            onClick={() => {
              onSidebarIconClick();
            }}
          >
            <div className={styles.header_sidebarIconDiv} />
            <div className={styles.header_sidebarIconDiv} />
            <div className={styles.header_sidebarIconDiv} />
          </div>
          <div className={styles.header_linksContainer}>
            {LINKS.map((elem, index) => (
              <Link
                link={elem.link}
                style={elem?.style}
                underline={elem?.underline}
              >
                {t(elem.text)}
                {/*{elem.icon2 && <img src={elem.icon2} width={30} />}*/}
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
      />
    </div>
  );
};

export default Header;
