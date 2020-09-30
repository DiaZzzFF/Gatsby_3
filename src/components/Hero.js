import React from "react";
import Image from "gatsby-image";
import {Link, graphql, useStaticQuery} from "gatsby";

import SocialLinks from "../constants/socialLinks";


const query = graphql`
  {
    file(relativePath: {eq: "hero-img.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: {
        fluid
      },
    },
  } = useStaticQuery(query);

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <article className="hero__info">
          <span className="hero__underline" />

          <h2 className="hero__heading">
            i&apos;m john
          </h2>

          <strong className="hero__strong">
            freelance web and mobile UI/UX Designer
          </strong>

          <Link className="hero__btn" to="/contact/">
            contact me
          </Link>

          <SocialLinks />
        </article>

        <Image className="hero__img" fluid={fluid} />
      </div>
    </section>
  );
};


export default Hero;
