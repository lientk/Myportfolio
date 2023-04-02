import React from "react";
import PropTypes from "prop-types";
import Intro from "./components/IntroSection";
import About from "./components/AboutSection";
import Projects from "./components/ProjectsSection";
import Contact from "./components/ContactSection";
import "./style.css";

function MyPortfolio(props) {
  return (
    <div className="main">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

MyPortfolio.propTypes = {};

export default MyPortfolio;
