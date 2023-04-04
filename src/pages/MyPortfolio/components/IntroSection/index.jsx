import React from "react";
import "./style.css";
import logos from "./constants";
Intro.propTypes = {};

function Intro(props) {
  return (
    <div className="intro__container" id="">
      <div className="intro__content">
        <div className="col-4"></div>
        <div className="intro__text col-4">
          <h1>Front-End Developer</h1>
          <p>
            Hi, I'm Kim Lien. A passionate Front-End React Developer based in Ho
            Chi Minh City.
          </p>
        </div>
        <div className="intro__img col-4"></div>
        <div className="col-4"></div>
      </div>
      <div className="tech__content">
        <div className="col-4"></div>
        <div className="tech__menu">
          <h3>Tech Stack |</h3>
          <ul className="tech__list">
            {logos.map((logo) => (
              <li key={logo.url} className="tech__item">
                <img src={logo.url} alt={logo.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Intro;
