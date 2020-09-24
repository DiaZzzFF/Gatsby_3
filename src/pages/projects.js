import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/Layout";
import Projects from "../components/Projects";


const ProjectsPage = ({data}) => {
  const {
    allStrapiProjects: {
      nodes: projects
    }
  } = data;

  return (
    <Layout>
      <section className="projects-page">
        <Projects
          title="all projects"
          projects={projects}
        />
      </section>
    </Layout>
  );
};


export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        title
        description
        github
        url
        featured
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`;

export default ProjectsPage;
