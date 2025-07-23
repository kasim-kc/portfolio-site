import React from "react";
import portfolioData from "../constants/data.js";
import "./Header.css";

const Header = () => {
  const data = portfolioData;
  return (
    <div className="header-container">
      <div className="img-div">
        <img src={data.image} alt="my-img" />
      </div>
      <h1>{data.name}</h1>
      <h2>
        {data.keywords[0]} | {data.keywords[1]}
      </h2>
      <div className="user-links">
        <a href="mailto:kasimsactive1@gmail.com">
          <i class="fa-solid fa-envelope"></i> kasimsactive1@gmail.com
        </a>
        <a href="tel:+918830404813">
          <i class="fa-solid fa-phone"></i> +91 883040 4813
        </a>
        <a href="https://github.com/kasim-kc" target="_blank">
          <i class="fa-brands fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/kasim221/" target="_blank">
          <i class="fa-brands fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Header;
