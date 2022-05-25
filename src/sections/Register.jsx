import React from "react";
import { Link } from "react-router-dom";
import "../styles/sections/Register.css";

function Register() {
  return (
    <div className="app__register">
      <div className="container">
        {" "}
        <div className="register__content">
          <h2 className="title">Register</h2>
          <form className="app__form">
            <label>
              <h2 className="title">Username : </h2>
            </label>
            <input type="text" placeholder="Username..." />
            <label>
              <h2 className="title">Email : </h2>
            </label>
            <input type="text" placeholder="Email..." />

            <label>
              <h2 className="title">Password : </h2>
            </label>
            <input type="password" placeholder="Password..." />

            <button className="btn__dark">Register</button>

            <span>
              <p className="desc">
                {" "}
                Already a Member?{" "}
                <b>
                  <Link to="/login">Login</Link>
                </b>
              </p>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
