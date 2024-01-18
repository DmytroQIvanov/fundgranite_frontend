import React, { useEffect, useState } from "react";
import axios from "axios";
import Activity from "../../Activity";

const AdminPosts = () => {
  // const [posts, setPosts] = useState([]);
  //
  // useEffect(() => {
  //   axios.get("https://fundgranite.com.ua/api/post");
  // }, []);
  return <Activity admin={true} />;
};

export default AdminPosts;
