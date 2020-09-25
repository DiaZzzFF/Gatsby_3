import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/Layout";
import Blogs from "../components/Blogs";
import SEO from "../components/SEO";


const BlogPage = ({data}) => {
  const {
    allStrapiBlogs: {
      nodes: blogs
    }
  } = data;

  return (
    <Layout>
      <SEO title="Blog" />

      <section className="blog-page">
        <Blogs
          title="blog"
          blogs={blogs}
        />
      </section>
    </Layout>
  );
};


export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: title, order: DESC}) {
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

export default BlogPage;
