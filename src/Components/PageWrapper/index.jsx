import React from "react";
import Header from "../Header";
import FooterComponent from "../Footer";

const PageWrapper = ({ children, header, footer }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {header && <Header />}
      <div style={{ margin: "20px 0px 20px 0px" }}>{children}</div>
      {footer && <FooterComponent />}
    </div>
  );
};

export default PageWrapper;
