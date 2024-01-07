import React from "react";
import Goal from "../../Components/Goal";
import GreenBlock from "../../Components/GreenBlock";
import HelmetWrapper from "../../Components/ReComponents/HelmetWrapper";
import { useTranslation } from "react-i18next";
import Effect from "../../Components/Effect/Effect";
import imgHome from "../../Assets/photo_2024-01-06_18-01-16.jpg";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <HelmetWrapper
      title={"Granit Fund"}
      description={"Фонд для збору коштів"}
      keywords={
        "Фонд, Granite Fund, fund, ЗСУ, дрони, волонтери, волонтерство, збір, разом переможемо, внесок, Fund, Granite Fund, fund, Armed Forces of Ukraine, drones, volunteers, volunteering, collection, together we will win, contribution"
      }
    >
      <div style={{ display: "grid", rowGap: "30px" }}>
        <Effect
          imgUrl={"https://antytila.ua/wp-content/uploads/2022/08/5-scaled.jpg"}
        />
        <Effect imgUrl={imgHome} />
        <GreenBlock />
        <Goal />
      </div>
    </HelmetWrapper>
  );
};

export default HomePage;
