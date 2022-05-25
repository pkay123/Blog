import React from "react";
import { Post, Sidebar } from "../component";
import "../styles/sections/Posts.css";

function Posts() {
  return (
    <div className="app__posts">
      <div className="container">
        <div className="posts__content">
          <Post />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Posts;
