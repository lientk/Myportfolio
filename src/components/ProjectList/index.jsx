import React from "react";
import internoweb from "../../assets/projects/interno_web.png";
import myportfolio from "../../assets/projects/myportfolio.png";
import shoesstore from "../../assets/projects/shoesstore_web.png";
import ProjectItem from "../ProjectItem";

function ProjectList(props) {
  const projects = [
    {
      project__id: 1,
      project__name: "Myportfolio",
      project__description: "",
      project__thumb: myportfolio,
      github_link: "https://github.com/Lien-1/Myportfolio",
      demo__link: "https://lienttk.me/",
      isReverse: false,
    },
    {
      project__id: 2,
      project__name: "IternoWeb",
      project__description: "",
      project__thumb: internoweb,
      github_link: "https://github.com/Lien-1/InternoWeb",
      demo__link: "https://interno-web.lienttk.me/",
      isReverse: true,
    },
    {
      project__id: 3,
      project__name: "Shoes Store Web",
      project__description: "",
      project__thumb: shoesstore,
      github_link: "https://github.com/Doan-1/Front-end",
      demo__link: "",
      isReverse: false,
    },
    {
      project__id: 4,
      project__name: "IternoWeb",
      project__description: "",
      project__thumb: "../../assets/projects/interno_web.png",
      github_link: "",
      demo__link: "",
      isReverse: true,
    },
  ];
  return (
    <>
      {projects.map((project, index) => {
        return <ProjectItem key={index} project={project} />;
      })}
    </>
  );
}

ProjectList.propTypes = {};

export default ProjectList;
