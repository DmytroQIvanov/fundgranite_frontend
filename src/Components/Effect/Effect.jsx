import React from "react";
import styles from "./smth.module.scss";

const Effect = ({ imgUrl }) => {
  return (
    <div className={styles.effect}>
      <div className={styles.effect_borderElementTop}>
        <div className={styles.effect_borderElementContent}>
          <h1>Фонд для збору коштів на дрони</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ullamcorper sapien sed sapien convallis blandit. Etiam ullamcorper
            lectus lorem, id sollicitudin ligula blandit vel. Suspendisse porta
            volutpat nibh, nec tincidunt nisl condimentum in. Aliquam at
            sagittis turpis, vel maximus nisi. Donec rutrum ornare mi, vitae
            laoreet odio commodo vitae. Aenean at purus auctor, efficitur turpis
            elementum, congue ex. Duis ac nisl eget augue egestas aliquam.
            Phasellus suscipit, velit non rhoncus congue, ligula lectus
            consequat quam, quis condimentum velit nunc sit amet quam.
          </span>
        </div>
      </div>
      <div className={styles.effect_absoluteBackground}>
        <img src={imgUrl} />
      </div>
      <div className={styles.effect_borderElementBottom}>
        <div className={styles.effect_borderElementContent}>
          <h1>Фонд для збору коштів на дрони</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ullamcorper sapien sed sapien convallis blandit. Etiam ullamcorper
            lectus lorem, id sollicitudin ligula blandit vel. Suspendisse porta
            volutpat nibh, nec tincidunt nisl condimentum in. Aliquam at
            sagittis turpis, vel maximus nisi. Donec rutrum ornare mi, vitae
            laoreet odio commodo vitae. Aenean at purus auctor, efficitur turpis
            elementum, congue ex. Duis ac nisl eget augue egestas aliquam.
            Phasellus suscipit, velit non rhoncus congue, ligula lectus
            consequat quam, quis condimentum velit nunc sit amet quam.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Effect;
