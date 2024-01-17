import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./ActivityPost.module.scss";
const ActivityPost = () => {
  const params = useParams();
  console.log(params);
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fundgranite.com.ua/api/post/${params.id}`)
      .then((resp) => {
        console.log(resp.data);
        if (resp.data) {
          setPostData(resp.data);
        }
      });
  }, []);
  return (
    <div className={styles.activityPost}>
      {postData ? (
        <div className={styles.activityPost_container}>
          <h1>{postData.uaTitle}</h1>
          <desc>{postData.uaFullDescription}</desc>
        </div>
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
};

export default ActivityPost;
