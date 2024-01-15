import React from "react";
import styles from "./TextBlockWithoutBackground.module.scss";
const TextBlockWithoutBackground = () => {
  return (
    <div className={styles.textBlockWithoutBackground}>
      <h1 style={{ textAlign: "center" }}>Благодійний фонд</h1>
      Це спільна справа, і кожен ваш внесок робить світ кращим для наших
      справжніх героїв. Долучайтеся до нашої спільноти та допомагайте нам
      формувати майбутнє військових в Україні. Дякуємо за вашу доброту та
      підтримку!
    </div>
  );
};

export default TextBlockWithoutBackground;
