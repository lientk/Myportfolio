import React, { useEffect } from "react";
import PropTypes from "prop-types";
import test from "../../assets/images/132726218_1896005157225297_7414236719923744195_n.jpg";
import "./style.css";
import Button from "../Button";
function ProjectItem(props) {
  const { isReverse } = props;
  return (
    <>
      {isReverse ? (
        <div className="project__item">
          <div
            className="project__description col-2"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3>Project Name</h3>
            <p>Technologies Development</p>
            <Button link={"/"} children="Github" />
            <Button link={"/"} children="Demo" />
          </div>
          <div
            className="project__img col-2"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img src={test} alt="" />
          </div>
        </div>
      ) : (
        <div className="project__item reverse">
          <div
            className="project__img col-2"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img src={test} alt="" />
          </div>
          <div
            className="project__description col-2"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3>Project Name</h3>
            <p>Technologies Development</p>
            <Button link={"/"} children="Github" />
            <Button link={"/"} children="Demo" />
          </div>
        </div>
      )}
    </>
  );
}

ProjectItem.propTypes = {};

export default ProjectItem;
