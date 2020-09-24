import React from "react";
import {graphql, Link} from "gatsby";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";


const BlogTemplate = ({data}) => {
  const {content} = data.blog;

  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>

          <Link
            className="btn center-btn"
            to="/blog"
          >
            blog
          </Link>
        </div>
      </section>
    </Layout>
  );
};


export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: {eq: $slug}) {
      content
    }
  }
`;

export default BlogTemplate;
