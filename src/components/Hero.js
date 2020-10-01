import React from "react";
import Image from "gatsby-image";
import {Link, graphql, useStaticQuery} from "gatsby";

import SocialLinks from "../components/SocialLinks";


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
      <h2 className="visually-hidden">Hero info</h2>

      <div className="hero__wrapper">
        <article className="hero__info">
          <span className="hero__underline" />

          <h3 className="hero__name">
            i&apos;m john
          </h3>

          <h4 className="hero__profession">
            freelance web and mobile UI/UX Designer
          </h4>

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
