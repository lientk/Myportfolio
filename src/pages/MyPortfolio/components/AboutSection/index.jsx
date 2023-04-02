import React from "react";
import "./style.css";
import PropTypes from "prop-types";
About.propTypes = {};

function About(props) {
  return (
    <div className="about__container" id="about">
      <div
        className="about__content"
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="content__detail">
          <div className="img__content"></div>
          <div className="text__content">
            <h2>About me</h2>
            <p>
              Hello, my name is <i> Kim Lien</i>. I am a senior in{" "}
              <i> Software Engineering </i> at the
              <i> University of Information and Technology </i>.
            </p>
            <p>
              I have experience working with HMTL/CSS, Javascript, ReactJS,
              Tailwind, Antd and UI/UX design for my college and personal
              projects. Additionally, I was also equipped with soft skills such
              as communication skills, management skills, teamwork skills
              through Union - Association activities.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
