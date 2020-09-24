import React from "react";
import {Link} from "gatsby";

import Title from "../components/Title";
import Project from "../components/Project";


const Projects = ({title, projects, showLink}) => {
  return (
    <section className="section projects">
      <Title title={title} />

      <div className="section-center projects-center">
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
        <Link className="btn center-btn" to="/projects">
          projects
        </Link>
      )}
    </section>
  );
};


export default Projects;
