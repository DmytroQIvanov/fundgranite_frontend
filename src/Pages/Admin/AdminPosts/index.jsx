import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://fundgranite.com.ua/api/post");
  }, []);
  return <div></div>;
};

export default AdminPosts;
