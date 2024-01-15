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
        {/*<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>*/}
        Наш фонд створений з метою підтримки та допомоги військовим, які віддано
        служать нашій країні. Ми віримо у необхідність та важливість надання
        підтримки тим, хто ризикує своїм життям для нашого безпеки та свободи.
      </div>
      <div style={{ display: "grid", rowGap: "30px" }}>
        <Effect
          titleTop={"Наша місія"}
          descriptionTop={`Благодійний фонд для військових зобов'язаний забезпечити
          військовослужбовцям необхідну підтримку у важкі моменти. Ми працюємо
          на благо наших героїв, щоб зробити їхнє життя комфортнішим та
          безпечнішим. Допомагаємо військовим частинами та іншим окремим
          спецпідрозділам, які потребують`}
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
          <h1 style={{ textAlign: "center" }}>Наша місія:</h1>
          Благодійний фонд для військових зобов'язаний забезпечити
          військовослужбовцям необхідну підтримку у важкі моменти. Ми працюємо
          на благо наших героїв, щоб зробити їхнє життя комфортнішим та
          безпечнішим. Допомагаємо військовим частинами та іншим окремим
          спецпідрозділам, які потребують
        </div>
        <Effect
          imgUrl={imgHome}
          titleTop={"Ви можете стати топ донатером!"}
          descriptionTop={
            <span>
              Ми вдячні тим, хто разом з нами допомогає в цій справі і зі згоди
              донатерів показуємо найбільші донати! <br />{" "}
              <div style={{ marginTop: "20px", fontWeight: "bolder" }}>
                Найбільші донати:
              </div>
              <ul>
                <li>Анна Шевченко - 102.000 грн</li>
                <li>Олександр Ковальчук - 80.200 грн</li>
                <li>Марія Петренко - 32.000 грн</li>
                <li>Іван Кравченко - 18.000 грн</li>
                <li>Олена Лисенко - 13.000 грн</li>
              </ul>
            </span>
          }
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
          <h1 style={{ textAlign: "center" }}>
            Благодійний фонд для військових
          </h1>
          Це спільна справа, і кожен ваш внесок робить світ кращим для наших
          справжніх героїв. Долучайтеся до нашої спільноти та допомагайте нам
          формувати майбутнє військових в Україні. Дякуємо за вашу доброту та
          підтримку!
        </div>
        <GreenBlock />
        {/*<Goal />*/}
      </div>
    </HelmetWrapper>
  );
};

export default HomePage;
