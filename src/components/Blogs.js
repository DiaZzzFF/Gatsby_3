import React from "react";
import {Link} from "gatsby";

import Title from "../components/Title";
import Blog from "../components/Blog";


export const Blogs = ({title, blogs, showLink}) => {
  return (
    <section className="section">
      <Title title={title} />

      <div className="section-center blogs-center">
        {blogs.map((blog) => {
          return (
            <Blog
              key={blog.id}
              {...blog}
            />
          );
        })}
      </div>

      {showLink && (
        <Link className="btn center-btn" to="/blog">
          blog
        </Link>
      )}
    </section>
  );
};


export default Blogs;
