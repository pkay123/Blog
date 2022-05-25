import React from "react";
import { Single } from "../component";
import "../styles/sections/SinglePost.css";

function SinglePost() {
  return (
    <div className="app__singlepost">
      <div className="container">
        <Single />
      </div>
    </div>
  );
}

export default SinglePost;
