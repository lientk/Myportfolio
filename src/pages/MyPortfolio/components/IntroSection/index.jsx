import React from "react";
import image from "../../../../assets/images/132726218_1896005157225297_7414236719923744195_n.jpg";
import Button from "../../../../components/Button";
import logos from "./constants";
import "./style.css";
Intro.propTypes = {};

function Intro(props) {
  return (
    <div className="intro__container" id="">
      <div className="intro__content">
        <div className="intro__text col-2">
          <h1>Front-End Developer</h1>
          <p>
            Hi, I'm Kim Lien. A passionate Front-End React Developer based in Ho
            Chi Minh City.
          </p>
          <Button children="Download My CV" />
        </div>
        <div className="intro__img col-2">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="tech__content">
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
