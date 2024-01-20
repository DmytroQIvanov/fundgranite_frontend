import React, { useEffect, useRef, useState } from "react";
import styles from "./DonatesBlock.module.scss";

const DonatesBlock = () => {
  const ref = useRef(null);
  // var screenPosition = ref.getBoundingClientRect();
  console.log(ref?.current?.getBoundingClientRect());
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  console.log(scrollPosition);

  return (
    <div
      className={styles.donatesBlock}
      ref={ref}
      onScroll={() => {
        console.log("////////////");
      }}
    >
      <div className={styles.donatesBlock_container}>
        <span
          style={{
            margin: "20px 0px",
            display: "flex",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          Ми вдячні тим, хто разом з нами допомогає в цій справі і зі згоди
          донатерів показуємо найбільші донати!
        </span>
        {/*<div style={{ margin: "20px 0px", fontWeight: "bolder" }}>*/}
        {/*  Найбільші донати:*/}
        {/*</div>*/}
        <div
          style={{ position: "relative" }}
          className={styles.donatesBlock_containerlList}
        >
          <div className={styles.donatesBlockBorderElem1} />
          <div className={styles.donatesBlockBorderElem2} />
          <span>Анна Шевченко - 80 000 грн</span>
          <span>Олександр Ковальчук - 55 000 грн </span>
          <span>Марія Петренко - 32 000 грн </span>
          <span>Іван Кравченко - 15 000 грн</span>
          <span> Олена Лисенко - 9 000 грн</span>
        </div>
      </div>
    </div>
  );
};

export default DonatesBlock;
