import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./ActivityPost.module.scss";
import ModalBtn from "../../Components/ModalBtn";
const ActivityPost = ({ onPageAnim }) => {
  const params = useParams();
  const navigare = useNavigate();
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
          <img src={postData.url} />
          <desc>{postData.uaFullDescription}</desc>
          <div
            onClick={() => {
              onPageAnim({
                state: "hide",
                url: "/activity",
                pageAnimOption: "hide",
              });
            }}
          >
            <ModalBtn />
          </div>
        </div>
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
};

export default ActivityPost;
