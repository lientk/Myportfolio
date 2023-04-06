import React from "react";
import image from "../../../../assets/images/132726218_1896005157225297_7414236719923744195_n.jpg";
import "./style.css";

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
          <div className="img__content">
            <img src={image} alt="" />
          </div>
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
