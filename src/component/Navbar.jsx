import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import "../styles/components/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app__navbar">
      <div className="container">
        <div className="left">
          <Link to="/">
            <h2 className="title">Prime BLOG</h2>
          </Link>
        </div>
        <div className="center">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <NavLink to="/posts">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/create">Create</NavLink>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="mobile">
          <HiOutlineMenuAlt3 fontSize={24} onClick={() => setOpen(true)} />
          {open && (
            <div className="mobile__close">
              <IoMdClose
                fontSize={24}
                onClick={() => setOpen(false)}
                className="close__menu"
              />
              <ul>
                <li onClick={() => setOpen(false)}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={() => setOpen(false)}>
                  <a href="/">About Us</a>
                </li>
                <li onClick={() => setOpen(false)}>
                  <NavLink to="/posts">Blogs</NavLink>
                </li>
                <li onClick={() => setOpen(false)}>
                  <NavLink to="/create">Create</NavLink>
                </li>
                <li onClick={() => setOpen(false)}>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="right">
          <div className="right__items">
            <IoMdSearch />
            <ul>
              <li>
                <NavLink to="/login">
                  <span>Login</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
