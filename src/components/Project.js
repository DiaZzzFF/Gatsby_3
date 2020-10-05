import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import {FaGithubSquare, FaShareSquare} from "react-icons/fa";


const Project = ({image, index, title, description, stack, github, url}) => {
  return (
    <article className="project">
      <Image
        className="project__img"
        fluid={image.childImageSharp.fluid}
      />

      <div className="project__box">
        <span className="project__number">
          0{index + 1}.
        </span>

        <h3 className="project__heading">
          {title}
        </h3>

        <p className="project__text">
          {description}
        </p>

        <div className="project__stack-box">
          {stack.map((item) => {
            return (
              <span className="project__stack" key={item.id}>
                {item.title}
              </span>
            );
          })}
        </div>

        <div className="project__link-box">
          <a className="project__link project__link--github" href={github}>
            <FaGithubSquare className="project__icon" />
          </a>

          <a className="project__link project__link--share" href={url}>
            <FaShareSquare className="project__icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};


export default Project;
