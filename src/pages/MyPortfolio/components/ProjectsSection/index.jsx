import React from "react";
import PropTypes from "prop-types";
import ProjectItem from "../../../../components/ProjectItem";
import "./style.css";

function Projects(props) {
  return (
    <div className="projects__container" id="project">
      <ProjectItem isReverse={true} />
      <ProjectItem />
      <ProjectItem isReverse={true} />
    </div>
  );
}

Projects.propTypes = {};

export default Projects;
