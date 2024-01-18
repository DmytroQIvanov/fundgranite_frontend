import React from "react";
import styles from "./GradientBlock.module.scss";

const GradientBlock = () => {
  return (
    <div className={styles.gradientBlock}>
      <div className={styles.gradientBlock_container}>
        <h1 style={{ textAlign: "center" }}>Наша місія:</h1>
        Благодійний фонд для військових зобов'язаний забезпечити
        військовослужбовцям необхідну підтримку у важкі моменти. Ми працюємо на
        благо наших героїв, щоб зробити їхнє життя комфортнішим та безпечнішим.
        Допомагаємо військовим частинами та іншим окремим спецпідрозділам, які
        потребують
      </div>
    </div>
  );
};

export default GradientBlock;
