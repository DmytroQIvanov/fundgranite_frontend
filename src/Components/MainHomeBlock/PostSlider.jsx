import React, { useState } from "react";
import Post from "./Post";
import styles from "./PostSlider.module.scss";
const PostSlider = ({ postArray }) => {
  const [currentPost, setCurrentPost] = useState(0);
  const [maxPost, setMaxPost] = useState(0);
  const [animStarted, setAnimStarted] = useState(false);
  const onArrowClick = () => {
    setAnimStarted(true);
    setTimeout(() => {
      setCurrentPost(1);
      setAnimStarted(false);
    }, [5000]);
  };

  return (
    <div className={styles.postSlider}>
      <div className={styles.postSlider_container}>
        <Post
          {...postArray[postArray.length - 1]}
          className={styles.postSlider_elem_inactiveLeft}
          onArrowClick={onArrowClick}
        />
        <Post
          {...postArray[currentPost]}
          className={styles.postSlider_elem_active}
          onArrowClick={onArrowClick}
        />
        <Post
          {...postArray[currentPost + 1]}
          className={`${
            animStarted
              ? styles.postSlider_elem_activeRight
              : styles.postSlider_elem_inactiveRight
          }`}
          onArrowClick={onArrowClick}
        />
      </div>
    </div>
  );
};

export default PostSlider;
