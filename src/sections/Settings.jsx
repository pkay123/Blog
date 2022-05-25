import React from "react";
import { HiFolderAdd } from "react-icons/hi";
import "../styles/sections/Settings.css";

function Settings() {
  return (
    <div className="app__settings">
      <div className="container">
        <div className="settings__grid">
          <div className="settings__left">
            <h2 className="title">Your Profile</h2>

            <ul>
              <li>
                <p className="desc">Personal Info</p>
              </li>
              <li>
                <p className="desc">
                  <span>Profile</span>
                </p>
              </li>
              <li>
                <p className="desc">Social Network</p>
              </li>
              <li>
                <p className="desc">Email Setting</p>
              </li>
              <li>
                <p className="desc">Notification Setting</p>
              </li>
              <li>
                <p className="desc">Change Password</p>
              </li>
              <li>
                <p className="desc">Deactivate Account</p>
              </li>
            </ul>
          </div>
          <div className="settings__right">
            <h2 className="title">Profile</h2>

            <div className="settings__profile">
              <p className="subtitle">Avatar*</p>

              <div className="avatar__container">
                <img src="assets/img-6.jpg" alt="" className="profile__img" />

                <label htmlFor="fileInput">
                  <HiFolderAdd className="avatar__icon" />
                </label>

                <input type="file" id="fileInput" style={{ display: "none" }} />
              </div>
            </div>

            <form className="settings__form">
              <label>
                <h2 className="title"> Username</h2>
              </label>
              <input type="text" placeholder="Enter Username" />

              <label>
                <h2 className="title">Email</h2>
              </label>
              <input type="email" placeholder="Enter Email" />

              <label>
                <h2 className="title">Password</h2>
              </label>
              <input type="password" placeholder="Enter Password" />

              <div className="settings__btns">
                <button className="btn__light">Update</button>
                <button className="btn__dark">Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
