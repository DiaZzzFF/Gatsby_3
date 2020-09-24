import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";


const IndexPage = ({data}) => {
  const {
    allStrapiProjects: {
      nodes: projects
    }
  } = data;

  return (
    <Layout>
      <Hero />

      <Services />

      <Jobs />

      <Projects
        title="featured projects"
        projects={projects}
        showLink
      />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        id
        strapiId
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


export default IndexPage;
