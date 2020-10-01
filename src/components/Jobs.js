import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import {FaAngleDoubleRight} from "react-icons/fa";

import Title from "../components/Title";


const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`;

const Jobs = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiJobs: {
      nodes: jobs
    }
  } = data;
  const [value, setValue] = React.useState(0);
  const {company, date, position, desc} = jobs[value];

  return (
    <section className="jobs">
      <Title myTitle="expierence" />

      <div className="jobs__wrapper">
        <div className="jobs__btn-box">
          {jobs.map((item, index) => {
            return (
              <button
                className={`jobs__btn ${index === value && `jobs__btn--active`}`}
                key={item.strapiId}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>

        <article className="jobs__info">
          <h3 className="jobs__heading">
            {position}
          </h3>

          <h4 className="jobs__subtitle">
            {company}
          </h4>

          <p className="jobs__date">
            {date}
          </p>

          {desc.map((item) => {
            return (
              <div className="jobs__text-box" key={item.id}>
                <FaAngleDoubleRight className="jobs__icon" />

                <p className="jobs__text">
                  {item.name}
                </p>
              </div>
            );
          })}
        </article>
      </div>

      <Link className="jobs__link" to="/about">
        more info
      </Link>
    </section>
  );
};


export default Jobs;
