import React from "react";
import {Link} from "gatsby";

import Title from "../components/Title";
import Blog from "../components/Blog";


const Blogs = ({title, blogs, showLink, bgPageList, bgPageItem}) => {
  return (
    <section className={`blogs ${bgPageList ? bgPageList : ``}`}>
      <Title myTitle={title} />

      <div className="blogs__wrapper">
        {blogs.map((blog) => {
          return (
            <Blog
              bgPageItem={`blog__link ${bgPageItem ? bgPageItem : ``}`}
              key={blog.id}
              {...blog}
            />
          );
        })}
      </div>

      {showLink && (
        <Link className="blogs__link" to="/blog">
          blog
        </Link>
      )}
    </section>
  );
};


export default Blogs;
