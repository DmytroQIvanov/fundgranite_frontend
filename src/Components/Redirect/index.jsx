import React, { useEffect } from "react";

const Redirect = (props) => {
  useEffect(() => {
    props?.onPageAnim({ url: "", pageAnimOption: "hide" });
  }, []);
  return <div></div>;
};

export default Redirect;
