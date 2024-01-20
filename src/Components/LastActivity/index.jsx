import React, { useEffect, useState } from "react";
import ActivityPost from "../../Pages/ActivityPost/ActivityPost";
import axios from "axios";

const LastActivity = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fundgranite.com.ua/api/post", {
        params: { queryLength: 2 },
      })
      .then((res) => {
        console.log(res.data);
        if (res?.data) setPosts(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div style={{ display: "flex" }}>
        {posts.map((elem) => (
          <ActivityPost {...elem} />
        ))}
      </div>
    </div>
  );
};

export default LastActivity;
