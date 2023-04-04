import React from "react";
import test from "../../assets/images/132726218_1896005157225297_7414236719923744195_n.jpg";
import Button from "../Button";
import "./style.css";
function ProjectItem(props) {
  const { isReverse } = props;
  return (
    <>
      {isReverse ? (
        <div
          className="project__item"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="project__description col-2">
            <h3>Project Name</h3>
            <p>Technologies Development</p>
            <Button link={"/"} children="Github" />
            <Button link={"/"} children="Demo" />
          </div>
          <div className="project__img col-2">
            <img src={test} alt="" />
          </div>
        </div>
      ) : (
        <div
          className="project__item reverse"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="project__img col-2">
            <img src={test} alt="" />
          </div>
          <div className="project__description col-2">
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

export default ProjectItem;
