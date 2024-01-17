import React, { useEffect, useState } from "react";
import axios from "axios";
import PostBlock from "../../Components/PostBlock";
import SearchPanel from "../../Components/SearchPanel";

const Activity = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter === "") {
      setFilteredPosts(posts);
      return;
    }
    const filterBySearch = posts.filter((item) => {
      if (item.uaTitle.toLowerCase().includes(filter.toLowerCase())) {
        return item;
      }
    });
    setFilteredPosts(filterBySearch);
  }, [filter, posts]);

  useEffect(() => {
    axios.get("https://fundgranite.com.ua/api/post").then((resp) => {
      console.log(resp.data);
      if (resp.data) {
        setPosts(resp.data);
      }
    });
  }, []);
  return (
    <div>
      <SearchPanel onFilter={(value) => setFilter(value)} />
      <div
        style={{ display: "flex", width: "80%", margin: "auto", gap: "20px" }}
      >
        {filteredPosts.map((elem) => (
          <PostBlock key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
};

export default Activity;
