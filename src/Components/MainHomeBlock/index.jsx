import React from "react";
import styles from "./MainHomeBlock.module.scss";
import { ReactComponent as ControlArrow } from "../../Assets/right-arrow-svgrepo-com.svg";
import PostSlider from "./PostSlider";
import postImg from "./369115593_301046379171998_5060290123796350086_n.jpg";

const MainHomeBlock = ({ onPageAnim }) => {
  const postsArray = [
    {
      imgUrl:
        "https://gdb.rferl.org/058a0000-0aff-0242-08ec-08dae78d2203_w1023_r1_s.jpg",
      title: "Lorem text for example",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.`,
    },
    {
      imgUrl: "https://antytila.ua/wp-content/uploads/2022/08/5-scaled.jpg",
      title: "Lorem text for example2",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.`,
    },

    {
      imgUrl: postImg,
      title: "Lorem text for example3",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.`,
    },
  ];
  return (
    <div className={styles.mainHomeBlock}>
      <div className={styles.mainHomeBlock_container}>
        <img
          className={styles.mainHomeBlock_container_backgroundImg}
          src={"https://antytila.ua/wp-content/uploads/2022/08/5-scaled.jpg"}
        />
        <div className={styles.mainHomeBlock_subheaderMock} />
        <div className={styles.mainHomeBlock_containerMain}>
          {/*<div className={styles.mainHomeBlock_containerMain_buttons}>*/}
          {/*  <div className={styles.mainHomeBlock_containerMain_buttonsElem}>*/}
          {/*    <h1>Lorem text</h1>*/}
          {/*  </div>*/}
          {/*  <div className={styles.mainHomeBlock_containerMain_buttonsElem}>*/}
          {/*    <div />*/}
          {/*  </div>*/}
          {/*  <div className={styles.mainHomeBlock_containerMain_buttonsElem}>*/}
          {/*    <div />*/}
          {/*  </div>*/}
          {/*  <div className={styles.mainHomeBlock_containerMain_buttonsElem}>*/}
          {/*    <div />*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className={styles.mainHomeBlock_containerMain_postContainer}>
            <PostSlider postArray={postsArray} />
            {/*<div className={styles.mainHomeBlock_containerMain_supportBtn}>*/}
            {/*  Усі пости*/}
            {/*</div>*/}
          </div>
          <div className={styles.mainHomeBlock_containerMain_text}>
            <h1 className={styles.mainHomeBlock_containerMain_textTitle}>
              Lorem text for example
            </h1>
            <span
              className={styles.mainHomeBlock_containerMain_textDescription}
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </span>
              <div
                className={styles.mainHomeBlock_containerMain_supportBtn}
                onClick={() => {
                  onPageAnim({ url: "/donate" });
                }}
              >
                ПІДТРИМАТИ
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHomeBlock;
