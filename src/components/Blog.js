import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import {Link} from "gatsby";


const Blog = ({slug, id, image, title, desc, category, date, bgPageItem}) => {
  return (
    <Link
      className={`${bgPageItem ? bgPageItem : ``}`}
      to={`/blogs/${slug}`}
      key={id}
    >
      <article className="blog">
        <Image
          className="blog__img"
          fluid={image.childImageSharp.fluid}
        />

        <div className="blog__box">
          <h4 className="blog__heading">
            {title}
          </h4>

          <p className="blog__text">
            {desc}
          </p>

          <div className="blog__row">
            <span className="blog__category">
              {category}
            </span>

            <span className="blog__date">
              {date}
            </span>
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
