import React from "react";
import { HiFolderAdd } from "react-icons/hi";
import "../styles/sections/Create.css";

function Create() {
  return (
    <div className="app__create">
      <div className="container">
        <div className="create__grid">
          <div className="create__img-container">
            <img src="assets/img5.jpg" alt="" className="create__img" />
          </div>

          <form className="create__content-container">
            <h2 className="title">Share Your Travel Story</h2>
            <div className="create__content">
              <label htmlFor="fileInput">
                <HiFolderAdd fontSize={22} />
              </label>

              <input type="file" id="fileInput" style={{ display: "none" }} />
              <input
                type="text"
                placeholder="Enter Title"
                className="text__input"
              />
            </div>

            <div className="text__area-container">
              <textarea
                className="text__area"
                type="text"
                placeholder="Let Hear Your Story"
                autoFocus={true}
              />
            </div>

            <button className="btn__dark">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
