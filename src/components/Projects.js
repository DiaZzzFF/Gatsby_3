import React from "react";
import {Link} from "gatsby";

import Title from "../components/Title";
import Project from "../components/Project";


const Projects = ({title, projects, showLink}) => {
  return (
    <section className="projects">
      <Title myTitle={title} />

      <div className="projects__wrapper">
        {projects.map((project, index) => {
          return (
            <Project
              key={project.id}
              index={index}
              {...project}
            />
          );
        })}
      </div>

      {showLink && (
        <Link className="projects__link" to="/projects">
          projects
        </Link>
      )}
    </section>
  );
};


export default Projects;
