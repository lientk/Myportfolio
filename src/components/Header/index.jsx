import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header(props) {
  return (
    <div className="header__container">
      <div className="logo__section">
        <Link to={"/"}>
          <h2>KLien.Dev</h2>
        </Link>
      </div>
      <div className="menu__section">
        <ul className="menu__list">
          <li className="menu__item">
            <a to="/" href="#">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a href="#about">About</a>
          </li>
          <li className="menu__item">
            <a href="#project">Projects</a>
          </li>
          <li className="menu__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
