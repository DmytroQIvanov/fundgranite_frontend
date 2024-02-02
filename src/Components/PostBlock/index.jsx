import React, { useState } from "react";
import styles from "./PostBlock.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const PostBlock = (postData) => {
  const [loading, setLoading] = useState(true);

  const onLoadFinish = () => {
    setLoading(false);
  };
  return (
    <>
      <div
        className={`${styles.postBlock} ${
          loading ? styles.postBlock_loading : ""
        }`}
        onClick={() => {
          postData.onPageAnim({
            state: "hide",
            url: `/activity/${postData.id}`,
            pageAnimOption: "hide",
          });
        }}
      >
        <div className={styles.postBlock__details}>
          <h1 className={styles.postBlock__detailsTitle}>{postData.uaTitle}</h1>
          <img
            src={postData.url}
            className={styles.postBlock_img}
            onLoad={() => {
              onLoadFinish();
            }}
          />
        </div>
        <div className={styles.postBlock__description}>
          <span>{postData.uaShortDescription}</span>
        </div>
        {/*<h3>{postData.uaFullDescription}</h3>*/}
        {postData.admin && (
          <div
            onClick={() => {
              postData.onPostDelete(postData.id);
              axios.delete(
                `https://fundgranite.com.ua/api/post/${postData.id}`,
              );
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
      {loading && (
        <div style={{ margin: "auto", display: "flex" }}>Loading...</div>
      )}
    </>
  );
};

export default PostBlock;
