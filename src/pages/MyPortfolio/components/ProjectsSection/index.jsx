import React from "react";
import ProjectList from "../../../../components/ProjectList";
import "./style.css";

function Projects(props) {
  return (
    <div className="projects__container" id="project">
      <ProjectList />
    </div>
  );
}

Projects.propTypes = {};

export default Projects;
