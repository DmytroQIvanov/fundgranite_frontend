import React from "react";
import styles from "./Header.module.scss";
import logo from "../../Assets/LOGO.svg";
import Link from "./Link";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <div className={styles.header_logo}>
            <img src={logo} width={60} height={65} alt={"Logo"} />
          </div>

          <div className={styles.header_linksContainer}>
            <Link link={"/"}>Головна</Link>
            <Link link={"/donate"}>Донат</Link>
            <Link link={"/aboutUs"}>Про нас</Link>
          </div>
        </div>
        <div className={styles.header_bottom}></div>
      </header>
      <div className={styles.headerMock}></div>
    </div>
  );
};

export default Header;
