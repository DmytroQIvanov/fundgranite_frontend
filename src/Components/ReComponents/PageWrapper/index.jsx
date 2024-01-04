import React from "react";
import Header from "../../Header";
import FooterComponent from "../../Footer";
import SubHeaderLogo from "../../SubHeaderLogo";

const PageWrapper = ({ children, header, footer, subheaderLogo }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {header && <Header />}
      {subheaderLogo && <SubHeaderLogo />}
      <div style={{ margin: "20px 0px 20px 0px" }}>{children}</div>
      {footer && <FooterComponent />}
    </div>
  );
};

export default PageWrapper;
