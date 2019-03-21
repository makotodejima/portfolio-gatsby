import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import HomeWorkBtns from "../../components/homeWorkBtns";

function Soreike() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <SEO
            title="Soreike SF Tee"
            keywords={[
              `Makoto Dejima`,
              `Designer`,
              `Front-End Developer`,
              `Design`,
              `Graphic Design`,
              `JavaScript`,
              `React`,
              `Motion`
            ]}
          />

          <div className="hero flex flex-col justify-center text-center align-middle">
            <h3 className="font-light tracking-wide">T-shirt Design</h3>
            <h2 className="font-light my-4">Soreike San Francisco Tee</h2>
          </div>

          <div className="work flex flex-col">
            <Img
              fluid={data.soreike01.childImageSharp.fluid}
              alt="Soreike SF Tee - 01"
              className="my-16"
            />
            <Img
              fluid={data.soreike02.childImageSharp.fluid}
              alt="Soreike SF Tee - 02"
              className="my-16"
            />
            <Img
              fluid={data.soreike03.childImageSharp.fluid}
              alt="Soreike SF Tee - 03"
              className="my-16"
            />
            <Img
              fluid={data.soreike04.childImageSharp.fluid}
              alt="Soreike SF Tee - 04"
              className="my-16"
            />
            <Img
              fluid={data.soreike05.childImageSharp.fluid}
              alt="Soreike SF Tee - 05"
              className="my-16"
            />
          </div>
          <HomeWorkBtns />
        </Layout>
      )}
    />
  );
}

export default Soreike;

const query = graphql`
  query {
    soreike01: file(relativePath: { eq: "soreike01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike02: file(relativePath: { eq: "soreike02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike03: file(relativePath: { eq: "soreike03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike04: file(relativePath: { eq: "soreike04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    soreike05: file(relativePath: { eq: "soreike05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
