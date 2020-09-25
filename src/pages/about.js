import React from "react";
import {graphql} from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/Layout";
import Title from "../components/Title";


const AboutPage = ({data}) => {
  const {
    about: {
      nodes
    },
  } = data;
  const {image, title, info, stack} = nodes[0];

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image
            className="about-img"
            fluid={image.childImageSharp.fluid}
          />

          <article className="about-text">
            <Title title={title} />

            <p>{info}</p>

            <div className="about-stack">
              {stack.map((item) => {
                return (
                  <span key={item.id}>
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
