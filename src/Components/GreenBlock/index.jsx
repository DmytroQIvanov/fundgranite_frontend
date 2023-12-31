import React from "react";
import styles from "./GreenBlock.module.scss";

const GreenBlock = () => {
  return (
    <div className={styles.greenBlock}>
      <div className={styles.greenBlock_container}>
        <div className={styles.greenBlock_title}>Текст</div>
        <div className={styles.greenBlock_line} />
        <div className={styles.greenBlock_description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          ullamcorper sapien sed sapien convallis blandit. Etiam ullamcorper
          lectus lorem, id sollicitudin ligula blandit vel. Suspendisse porta
          volutpat nibh, nec tincidunt nisl condimentum in. Aliquam at sagittis
          turpis, vel maximus nisi. Donec rutrum ornare mi, vitae laoreet odio
          commodo vitae. Aenean at purus auctor, efficitur turpis elementum,
          congue ex. Duis ac nisl eget augue egestas aliquam. Phasellus
          suscipit, velit non rhoncus congue, ligula lectus consequat quam, quis
          condimentum velit nunc sit amet quam.  Cras in elit vulputate, tempor
          urna ut, tristique dolor. Maecenas urna diam, iaculis sit amet lectus
          vel, condimentum malesuada sapien. Etiam convallis volutpat augue et
          ultrices. Pellentesque tristique feugiat nisi, eget tempor nulla.
          Morbi in fermentum purus. Aliquam vel magna a est venenatis commodo ac
          ac est. Proin id purus pretium, lacinia tellus at, iaculis augue.
        </div>
        <div className={styles.greenBlock_line} />
      </div>
    </div>
  );
};

export default GreenBlock;
