import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./PostSlider.module.scss";
import { ReactComponent as ControlArrow } from "../../Assets/right-arrow-svgrepo-com.svg";

const PostSlider = ({ postArray }) => {
  const [currentPost, setCurrentPost] = useState(0);
  const [nextPost, setNextPost] = useState(1);
  const [prevPost, setPrevPost] = useState(postArray.length - 1);
  const [maxPost, setMaxPost] = useState(0);
  const [animStarted, setAnimStarted] = useState(false);
  const [currentDirection, setCurrentDirection] = useState(null);
  const arrayLength = postArray.length;
  let intervalValue;
  const onArrowClick = ({ direction }) => {
    if (animStarted) return;
    setAnimStarted(true);
    setCurrentDirection(direction);
    setTimeout(() => {
      const newCurrentPost = direction === "next" ? nextPost : prevPost;
      let newNextPost;
      let newPrevPost;
      if (direction === "next") {
        newPrevPost = currentPost - 1;
      } else {
        newNextPost = currentPost;
      }

      if (!postArray?.[newCurrentPost + 1]) {
        setNextPost(0);
      } else {
        setNextPost(newCurrentPost + 1);
      }
      if (!postArray?.[newCurrentPost - 1]) {
        setPrevPost(arrayLength - 1);
      } else {
        setPrevPost(newCurrentPost - 1);
      }

      setCurrentPost(newCurrentPost);
      setAnimStarted(false);
      setCurrentDirection(null);
    }, [400]);
  };

  useEffect(() => {
    intervalValue = setInterval(() => {
      onArrowClick({ direction: "prev" });
    }, 6000);
    return () => {
      clearInterval(intervalValue);
    };
  }, [animStarted]);

  return (
    <div className={styles.postSlider}>
      <div className={styles.postSlider_container}>
        <div
          className={styles.postSlider_container_controlArrowLeft}
          onClick={() => onArrowClick({ direction: "next" })}
        >
          <ControlArrow />
        </div>

        <div
          className={styles.postSlider_container_controlArrowRight}
          onClick={() => onArrowClick({ direction: "prev" })}
        >
          <ControlArrow />
        </div>
        <Post
          {...postArray[prevPost]}
          className={`${
            animStarted && currentDirection === "prev"
              ? styles.postSlider_elem_activeLeft
              : styles.postSlider_elem_inactiveLeft
          }`}
          // onArrowClick={}
        />
        <Post
          {...postArray[currentPost]}
          className={styles.postSlider_elem_active}
          onArrowClick={onArrowClick}
        />
        <Post
          {...postArray[nextPost]}
          className={`${
            animStarted && currentDirection === "next"
              ? styles.postSlider_elem_activeRight
              : styles.postSlider_elem_inactiveRight
          }`}
          // onArrowClick={onArrowClick}
        />
      </div>
    </div>
  );
};

export default PostSlider;
