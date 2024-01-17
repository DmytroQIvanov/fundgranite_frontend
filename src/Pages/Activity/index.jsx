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
    let filterBySearch = posts.filter((item) => {
      if (item.uaTitle.toLowerCase().includes(filter.toLowerCase())) {
        return item;
      }
    });
    if (filterBySearch.length === 0) {
      filterBySearch = posts.filter((item) => {
        if (
          item.uaShortDescription.toLowerCase().includes(filter.toLowerCase())
        ) {
          return item;
        }
      });
    }

    if (filterBySearch.length === 0) {
      filterBySearch = posts.filter((item) => {
        if (
          item.uaFullDescription.toLowerCase().includes(filter.toLowerCase())
        ) {
          return item;
        }
      });
    }
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
        style={{
          display: "flex",
          width: "80%",
          margin: "auto",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredPosts.map((elem) => (
          <PostBlock key={elem.id} {...elem} />
        ))}
        {filteredPosts.length === 0 && (
          <div
            style={{ fontSize: "26px", margin: "auto", textAlign: "center" }}
          >
            Діяльність не знайдена..
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity;
