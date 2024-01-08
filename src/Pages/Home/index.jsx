import React from "react";
import Goal from "../../Components/Goal";
import GreenBlock from "../../Components/GreenBlock";
import HelmetWrapper from "../../Components/ReComponents/HelmetWrapper";
import { useTranslation } from "react-i18next";
import Effect from "../../Components/Effect/Effect";
import imgHome from "../../Assets/photo_2024-01-06_18-01-16.jpg";
import CustomModal from "../../Components/CustomModal";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <HelmetWrapper
      title={"Granite Fund"}
      description={"Фонд для збору коштів"}
      keywords={
        "Фонд, Granite Fund, fund, ЗСУ, дрони, волонтери, волонтерство, збір, разом переможемо, внесок, Fund, Granite Fund, fund, Armed Forces of Ukraine, drones, volunteers, volunteering, collection, together we will win, contribution"
      }
    >
      <div
        style={{
          width: "80%",
          margin: "auto",
          color: "#000000",
          fontSize: "26px",
          fontFamily: "Imbue",
          marginBottom: "30px",
        }}
      >
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        ullamcorper sapien sed sapien convallis blandit. Etiam ullamcorper
        lectus lorem, id sollicitudin ligula blandit vel. Suspendisse porta
        volutpat nibh, nec tincidunt nisl condimentum in. Aliquam at sagittis
        turpis, vel maximus nisi. Donec rutrum ornare mi, vitae laoreet odio
        commodo vitae. Aenean at purus auctor, efficitur turpis elementum,
        congue ex. Duis ac nisl eget augue egestas aliquam. Phasellus suscipit,
        velit non rhoncus congue, ligula lectus consequat quam, quis condimentum
        velit nunc sit amet quam.
      </div>
      <div style={{ display: "grid", rowGap: "30px" }}>
        <Effect
          imgUrl={"https://antytila.ua/wp-content/uploads/2022/08/5-scaled.jpg"}
        />
        <div
          style={{
            width: "80%",
            margin: "auto",
            color: "#000000",
            fontSize: "26px",
            fontFamily: "Imbue",
            marginBottom: "30px",
          }}
        >
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          ullamcorper sapien sed sapien convallis blandit. Etiam ullamcorper
          lectus lorem, id sollicitudin ligula blandit vel. Suspendisse porta
          volutpat nibh, nec tincidunt nisl condimentum in. Aliquam at sagittis
          turpis, vel maximus nisi. Donec rutrum ornare mi, vitae laoreet odio
          commodo vitae. Aenean at purus auctor, efficitur turpis elementum,
          congue ex. Duis ac nisl eget augue egestas aliquam. Phasellus
          suscipit, velit non rhoncus congue, ligula lectus consequat quam, quis
          condimentum velit nunc sit amet quam.
        </div>
        <Effect imgUrl={imgHome} />
        <div
          style={{
            width: "80%",
            margin: "auto",
            color: "#000000",
            fontSize: "26px",
            fontFamily: "Imbue",
            marginBottom: "30px",
          }}
        >
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          ullamcorper sapien sed sapien convallis blandit. Etiam ullamcorper
          lectus lorem, id sollicitudin ligula blandit vel. Suspendisse porta
          volutpat nibh, nec tincidunt nisl condimentum in. Aliquam at sagittis
          turpis, vel maximus nisi. Donec rutrum ornare mi, vitae laoreet odio
          commodo vitae. Aenean at purus auctor, efficitur turpis elementum,
          congue ex. Duis ac nisl eget augue egestas aliquam. Phasellus
          suscipit, velit non rhoncus congue, ligula lectus consequat quam, quis
          condimentum velit nunc sit amet quam.
        </div>
        <GreenBlock />
        {/*<Goal />*/}
      </div>
    </HelmetWrapper>
  );
};

export default HomePage;
