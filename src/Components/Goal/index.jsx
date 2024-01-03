import React from "react";
import styles from "./Goal.module.scss";
import Link from "../Header/Link";

const Goal = () => {
  return (
    <article className={styles.goal}>
      <div className={styles.goal_container}>
        <div className={styles.goal_elem1}>
          <span className={styles.goalTitle}>ЦІЛЬ: 10 000 000$</span>
        </div>
        <div className={styles.goal_elem2}></div>
        <div className={styles.goal_elem3}>
          <span className={styles.goalTitle}>ПЕРЕМОЖЕМО РАЗОМ</span>
        </div>

        <Link link={"/donate"}>
          <div className={styles.goal_elem3} style={{ marginTop: "30px" }}>
            <span className={styles.goalTitle}>ПІДТРИМАТИ</span>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Goal;
