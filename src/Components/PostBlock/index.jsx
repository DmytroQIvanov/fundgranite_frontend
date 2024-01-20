import React from "react";
import styles from "./PostBlock.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const PostBlock = (postData) => {
  return (
    <div className={styles.postBlock}>
      <h1
        onClick={() => {
          postData.onPageAnim({
            state: "hide",
            url: `/activity/${postData.id}`,
            pageAnimOption: "hide",
          });
        }}
      >
        {postData.uaTitle}
      </h1>
      <h3>{postData.uaShortDescription}</h3>
      {/*<h3>{postData.uaFullDescription}</h3>*/}
      <img src={postData.url} className={styles.postBlock_img} />
      {postData.admin && (
        <div
          onClick={() => {
            postData.onPostDelete(postData.id);
            axios.delete(`https://fundgranite.com.ua/api/post/${postData.id}`);
          }}
          style={{
            color: "white",
            position: "absolute",
            left: "10px",
            bottom: "10px",
            padding: "5px",
            backgroundColor: "blue",
          }}
        >
          Delete
        </div>
      )}
    </div>
  );
};

export default PostBlock;
