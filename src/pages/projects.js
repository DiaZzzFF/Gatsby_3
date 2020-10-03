import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/Layout";
import Projects from "../components/Projects";
import SEO from "../components/SEO";


const ProjectsPage = ({data}) => {
  const {
    allStrapiProjects: {
      nodes: projects
    }
  } = data;

  return (
    <Layout>
      <SEO title="Projects" />

      <Projects
        title="all projects"
        projects={projects}
      />

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
