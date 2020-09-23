import React from "react";
import Image from "gatsby-image";
import {Link} from "gatsby";
import {graphql, useStaticQuery} from "gatsby";

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
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>

            <h1>i'm john</h1>

            <h4>freelance web and mobile UI/UX Designer</h4>

            <Link className="btn" to="/contact/">
              contact me
            </Link>

            <SocialLinks />
          </div>
        </article>
        <Image className="hero-img" fluid={fluid} />
      </div>
    </header>
  );
};


export default Hero;
