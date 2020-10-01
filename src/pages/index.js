import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import SEO from "../components/SEO";


const IndexPage = ({data}) => {
  const {
    allStrapiProjects: {
      nodes: projects
    },
    allStrapiBlogs: {
      nodes: blogs
    }
  } = data;

  return (
    <Layout>
      <SEO
        title="Home"
        description="this is our home page"
      />

      <h1 className="visually-hidden">Portfolio</h1>

      <Hero />

      <Services />

      <Jobs />

      <Projects
        title="featured projects"
        projects={projects}
        showLink
      />

      <Blogs
        title="latest articles"
        blogs={blogs}
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
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
