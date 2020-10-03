import React from "react";
import {graphql} from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/Layout";
import Title from "../components/Title";
import SEO from "../components/SEO";


const AboutPage = ({data}) => {
  const {
    about: {
      nodes
    },
  } = data;
  const {image, title, info, stack} = nodes[0];

  return (
    <Layout>
      <SEO
        title="About Me"
        description="about webdev"
      />

      <section className="about">
        <div className="about__wrapper">
          <Image
            className="about__img"
            fluid={image.childImageSharp.fluid}
          />

          <article className="about__box">
            <Title
              boxClass="about__title-box"
              headingClass="about__title"
              underlineClass="about__underline"
              myTitle={title}
            />

            <p className="about__text">
              {info}
            </p>

            <div className="about__stack-box">
              {stack.map((item) => {
                return (
                  <span className="about__stack" key={item.id}>
                    {item.title}
                  </span>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};


export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        title
        info
        stack {
          id
          title
        }
      }
    }
  }
`;

export default AboutPage;
