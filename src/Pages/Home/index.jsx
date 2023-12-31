import React from "react";
import Goal from "../../Components/Goal";
import GreenBlock from "../../Components/GreenBlock";

const HomePage = () => {
  return (
    <div style={{ display: "grid", rowGap: "30px" }}>
      <GreenBlock />
      <Goal />
    </div>
  );
};

export default HomePage;
