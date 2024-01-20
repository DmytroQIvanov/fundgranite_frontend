import React, { useEffect, useState } from "react";
import axios from "axios";
import PostBlock from "../../Components/PostBlock";
import SearchPanel from "../../Components/SearchPanel";

const Activity = ({ admin, onPageAnim }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    axios.get("https://fundgranite.com.ua/api/post").then((resp) => {
      setLoading(false);
      console.log(resp.data);
      if (resp.data) {
        setPosts(resp.data);
      }
    });
  }, []);
  const onPostDelete = (postId) => {
    setPosts((prevState) => prevState.filter((elem) => elem.id !== postId));
  };
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
          height: "max-content",
        }}
      >
        {filteredPosts.map((elem) => (
          <PostBlock
            key={elem.id}
            {...elem}
            admin={admin}
            onPostDelete={onPostDelete}
            onPageAnim={onPageAnim}
          />
        ))}

        {filteredPosts.length === 0 && loading && (
          <div
            style={{ fontSize: "26px", margin: "auto", textAlign: "center" }}
          >
            Завантаження..
          </div>
        )}
        {filteredPosts.length === 0 && !loading && (
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
