import React from "react";
import Button from "../Button";
import "./style.css";
function ProjectItem(props) {
  const { project } = props;
  return (
    <>
      {project.isReverse ? (
        <div
          className="project__item"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="project__description col-2">
            <h3>{project.project__name}</h3>
            <p>{project.project__description}</p>
            <Button link={project.github__link} children="Github" />
            <Button link={project.demo__link} children="Demo" />
          </div>
          <div className="project__img col-2">
            <img src={project.project__thumb} alt="" />
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
            <img src={project.project__thumb} alt="" />
          </div>
          <div className="project__description col-2">
            <h3>{project.project__name}</h3>
            <p>{project.project__description}</p>
            <Button link={project.github__link} children="Github" />
            <Button link={project.demo__link} children="Demo" />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectItem;
