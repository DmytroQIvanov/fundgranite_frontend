import React from "react";
import Goal from "../../Components/Goal";
import GreenBlock from "../../Components/TextComponents/GreenBlock";
import HelmetWrapper from "../../Components/ReComponents/HelmetWrapper";
import { useTranslation } from "react-i18next";
import Effect from "../../Components/Effect/Effect";
import imgHome from "../../Assets/photo_2024-01-06_18-01-16.jpg";
import CustomModal from "../../Components/CustomModal";
import TextBlockWithoutBackground from "../../Components/TextComponents/TextBlockWithoutBackground";
import GradientBlock from "../../Components/TextComponents/GradientBlock";
import DonatesBlock from "../../Components/TextComponents/DonatesBlock";
import LastActivity from "../../Components/LastActivity";
import MainHomeBlock from "../../Components/MainHomeBlock";
import ScrollTrigger from "../../Components/ScrollTrigger";

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
      <MainHomeBlock />
      {/*<div*/}
      {/*  style={{*/}
      {/*    width: "80%",*/}
      {/*    margin: "auto",*/}
      {/*    color: "#000000",*/}
      {/*    fontSize: "26px",*/}
      {/*    // fontFamily: "Imbue",*/}
      {/*    marginBottom: "30px",*/}
      {/*    height: "60px",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  /!*<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>*!/*/}
      {/*  /!*Наш фонд створений з метою підтримки та допомоги військовим, які віддано*!/*/}
      {/*  /!*служать нашій країні. Ми віримо у необхідність та важливість надання*!/*/}
      {/*  /!*підтримки тим, хто ризикує своїм життям для нашого безпеки та свободи.*!/*/}
      {/*</div>*/}
      <div style={{ display: "grid" }}>
        <Effect
          titleTop={"Змінюємо майбутнє разом"}
          descriptionTop={`Допомогаємо тим, хто цього потребує.
          Долучайтеся до наших зборів на амуніцію для благодійних місій. Ваша підтримка — це крок до гарантії безпеки в нашій країні допоможе закупити ліки та медичне обладнання.`}
          // imgUrl={"https://antytila.ua/wp-content/uploads/2022/08/5-scaled.jpg"}
          imgUrl={
            "https://gdb.rferl.org/058a0000-0aff-0242-08ec-08dae78d2203_w1200_r1.jpg"
          }
        />
        <ScrollTrigger>
          <GradientBlock />
        </ScrollTrigger>
        {/*<LastActivity />*/}
        <Effect
          imgUrl={imgHome}
          titleTop={"Ви можете стати топ донатером!"}
          descriptionTop={<DonatesBlock />}
        />
        {/*<TextBlockWithoutBackground />*/}
        {/*<Goal />*/}
      </div>
    </HelmetWrapper>
  );
};

export default HomePage;
