import React from "react";
import "../styles/components/Header.css";
import { BiVideo } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="app__header">
      <div className="container">
        <div className="header__content">
          <h2 className="title">Share Your Amazing Travel Experience</h2>

          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            temporibus inventore hic voluptatum at iusto minus repellendus
            architecto aliquam distinctio.
          </p>

          <div className="btns">
            <button className="btn__dark">
              <Link to="/login">Login</Link>
            </button>
            <button className="btn__light">
              <BiVideo fontSize={24} /> Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
