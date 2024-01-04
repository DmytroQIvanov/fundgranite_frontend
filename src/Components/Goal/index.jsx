import React from "react";
import styles from "./Goal.module.scss";
import { Link } from "react-router-dom";

const Goal = () => {
  return (
    <article className={styles.goal}>
      <div className={styles.goal_container}>
        <div className={styles.goal_elem1}>
          <span className={styles.goalTitle}>ЦІЛЬ: 10 000 000$</span>
        </div>
        <div className={styles.goal_elem2}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ullamcorper sapien sed sapien convallis blandit. Etiam ullamcorper
            lectus lorem, id sollicitudin ligula blandit vel. Suspendisse porta
            volutpat nibh, nec tincidunt nisl condimentum in. Aliquam at
            sagittis turpis, vel maximus nisi. Donec rutrum ornare mi, vitae
            laoreet odio commodo vitae.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ullamcorper sapien sed sapien convallis blandit. Etiam ullamcorper
            lectus lorem, id sollicitudin ligula blandit vel. Suspendisse porta
            volutpat nibh, nec tincidunt nisl condimentum in.
          </span>
        </div>
        <div className={styles.goal_elem3}>
          <span className={styles.goalTitle}>ПЕРЕМОЖЕМО РАЗОМ</span>
        </div>

        <Link to={"/donate"} style={{ textDecoration: "none" }}>
          <div className={styles.goal_elem3} style={{ marginTop: "30px" }}>
            <span className={styles.goalTitle}>ПІДТРИМАТИ</span>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Goal;
