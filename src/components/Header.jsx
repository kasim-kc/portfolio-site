import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-container">
      <div className="kasim-info">
        <h2 className="name">Kasim Chhota</h2>
        <p className="contact-num">+91 8830404813</p>
        <p className="email">kasimsactive1@gmail.com</p>
      </div>
      <div className="nav-links-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="kasim-img">
        <img src="../src/assets/pic.jpg" alt="my_photo" />
      </div>
    </div>
  );
};

export default Header;
