import React from "react";
import styles from "./MainHomeBlock.module.scss";
import { ReactComponent as ControlArrow } from "../../Assets/right-arrow-svgrepo-com.svg";

const Post = ({ imgUrl, title, description, className, onArrowClick }) => {
  return (
    <div className={`${styles.mainHomeBlock_containerMain_post} ${className}`}>
      <img src={imgUrl} />
      <div className={styles.mainHomeBlock_containerMain_postContent}>
        {/*<div*/}
        {/*  className={*/}
        {/*    styles.mainHomeBlock_containerMain_postContent_controlArrowRight*/}
        {/*  }*/}
        {/*  onClick={() => onArrowClick({ direction: "prev" })}*/}
        {/*>*/}
        {/*  <ControlArrow />*/}
        {/*</div>*/}
        {/*<div*/}
        {/*  className={*/}
        {/*    styles.mainHomeBlock_containerMain_postContent_controlArrowLeft*/}
        {/*  }*/}
        {/*  onClick={() => onArrowClick({ direction: "next" })}*/}
        {/*>*/}
        {/*  <ControlArrow />*/}
        {/*</div>*/}
        <h1>Lorem text for example</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </span>
      </div>
    </div>
  );
};

export default Post;
