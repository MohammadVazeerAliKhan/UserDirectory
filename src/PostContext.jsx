import React, { createContext, useContext, useState, useEffect } from "react";

const PostContext = createContext();

export const usePostContext = () => {
  return useContext(PostContext);
};

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const fetchPostsData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts data:", err);
    }
  };

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <PostContext.Provider value={{ posts, fetchPostsData }}>
      {children}
    </PostContext.Provider>
  );
};
