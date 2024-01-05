import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../Assets/LOGO.svg";
import Link from "./Link";
import { useTranslation } from "react-i18next";
import MobileSidebar from "../MobileSidebar";

const LANGUAGES = [
  {
    label: "ENG",
    code: "en",
  },
  {
    label: "UA",
    code: "ua",
  },
];

const LINKS = [
  {
    link: "/",
    text: "header.main",
  },
  {
    link: "/aboutUs",
    text: "header.aboutUs",
  },
  {
    link: "/donate",
    text: "header.donate",
    style: { fontFamily: "roboto" },
    underline: true,
  },
  {
    link: "/blog",
    text: "header.blog",
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
            <select
              defaultValue={"es"}
              value={selectedLanguage}
              onChange={(event) => onSelectLanguage(event.target.value)}
            >
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>

            {LINKS.map((elem, index) => (
              <Link
                link={elem.link}
                style={elem?.style}
                underline={elem?.underline}
              >
                {t(elem.text)}
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
      />
    </div>
  );
};

export default Header;
