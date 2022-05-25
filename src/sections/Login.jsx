import React from "react";
import { Link } from "react-router-dom";
import "../styles/sections/Login.css";

function Login() {
  return (
    <div className="app__login">
      <div className="container">
        <div className="login__content">
          <h2 className="title">Login</h2>
          <form className="app__form">
            <label>
              <h2 className="title">Email : </h2>
            </label>
            <input type="text" placeholder="Email..." />

            <label>
              <h2 className="title">Password : </h2>
            </label>
            <input type="password" placeholder="Password..." />

            <button className="btn__dark">Login</button>

            <span>
              <p className="desc">
                Don't have Account?{" "}
                <b>
                  <Link to="/register">Register</Link>
                </b>
              </p>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
