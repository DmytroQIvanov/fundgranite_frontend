import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../Assets/LOGO.svg";
import Link from "./Link";
import { useTranslation } from "react-i18next";

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
const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, []);
  const onSelectLanguage = (value) => {
    setSelectedLanguage(value);
    i18n.changeLanguage(value);
  };
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <div className={styles.header_logo}>
            <img src={logo} width={60} height={65} alt={"Logo"} />
          </div>
          <h1
            style={{ color: "white", marginLeft: "10px" }}
            className={styles.header_title}
          >
            FUND GRANITE
          </h1>

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
            <Link link={"/"}>{t("header.main")}</Link>
            <Link link={"/aboutUs"}>{t("header.aboutUs")}</Link>
            <Link link={"/donate"} style={{ fontFamily: "roboto" }}>
              <span style={{ textDecoration: "underline" }}>
                {t("header.donate")}
              </span>
            </Link>
            <Link link={"/blog"}>{t("header.blog")}</Link>
          </div>
        </div>
        <div className={styles.header_bottom}></div>
      </header>
      <div className={styles.headerMock}></div>
    </div>
  );
};

export default Header;
