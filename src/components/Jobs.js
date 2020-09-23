import React from "react";
import {Link} from "gatsby";
import {graphql, useStaticQuery} from "gatsby";
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
    <section className="section jobs">
      <Title title="expierence" />

      <div className="jobs-center">
        {/* btn container */}

        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                className={`job-btn ${index === value && `active-btn`}`}
                key={item.strapiId}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>

        {/* job info */}

        <article className="job-info">
          <h3>{position}</h3>

          <h4>{company}</h4>

          <p className="job-date">{date}</p>

          {desc.map((item) => {
            return (
              <div className="job-desc" key={item.id}>
                <FaAngleDoubleRight className="job-icon" />

                <p>{item.name}</p>
              </div>
            );
          })}
        </article>
      </div>

      <Link className="btn center-btn" to="/about">
        more info
      </Link>
    </section>
  );
};


export default Jobs;
