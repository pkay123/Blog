import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data";
import "../styles/components/Post.css";

function Post() {
  return (
    <div className="app__post">
      <div className="post__container">
        <div className="post__grid">
          {posts.map((post) => (
            <div className="post__content">
              <img src={post.img} alt="" className="post__img" />

              <div className="main__content">
                <p className="desc">{post.cats}</p>
                <h2 className="title">
                  <Link to="/singlepost">{post.title}</Link>
                </h2>
                <div className="author">
                  <p className="desc">By: {post.author}</p>
                  <p className="desc">{post.date}</p>
                </div>

                <p className="desc para">{post.desc}</p>

                <button className="btn__dark">
                  <Link to="/singlepost">{post.btn}</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
