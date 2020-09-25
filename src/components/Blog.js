import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import {Link} from "gatsby";


const Blog = ({slug, id, image, title, desc, category, date}) => {
  return (
    <Link
      className="blog"
      to={`/blogs/${slug}`}
      key={id}
    >
      <article>
        {image && (
          <Image
            className="blog-img"
            fluid={image.childImageSharp.fluid}
          />
        )}

        <div className="blog-card">
          <h4>{title || `default title`}</h4>

          <p>{desc}</p>

          <div className="blog-footer">
            <p>{category}</p>

            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

Blog.propTypes = {
  slug: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};


export default Blog;
