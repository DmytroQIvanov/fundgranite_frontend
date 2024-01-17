import React from "react";
import styles from "./PostBlock.module.scss";
import { Link } from "react-router-dom";

const PostBlock = (postData) => {
  return (
    <div className={styles.postBlock}>
      <h1>
        <Link to={`/activity/${postData.id}`}>{postData.uaTitle}</Link>
      </h1>
      <h2>{postData.uaShortDescription}</h2>
      <h3>{postData.uaFullDescription}</h3>
    </div>
  );
};

export default PostBlock;
