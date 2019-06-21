import React from "react";
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { Container, Row, Col } from "reactstrap";

import "./index.scss";

const Services = ({ lang = "en" }) => (
  <StaticQuery
    query={graphql`
      query ServicesQuery {
  allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }filter: {frontmatter: {section: {eq: "services"}}}) {
    edges {
      node {
        id
        frontmatter {
          title                    
          content
          arabicTitle                    
          arabicContent
          image{
              childImageSharp {
                fluid(maxWidth: 700) {
                  srcSet
                  sizes
                  aspectRatio
                  src
                }
              }
            }          
        }
      }
    }
  }
}
    `}
    render={data => {
      const headingData = data.allMarkdownRemark.edges[0].node.frontmatter;
      const services = data.allMarkdownRemark.edges.slice(1, data.allMarkdownRemark.edges.length)


      return (
        <Container className={`services-wrapper ${lang === "en" ? "" : "services-wrapper__ar"}`} id="services">

          <Row>
            <Col xs="12">
              <h2 className="services-wrapper__heading">{lang === "en" ? headingData.title.toUpperCase() : headingData.arabicTitle}</h2>
              <p dangerouslySetInnerHTML={{ __html: lang === "en" ? headingData.content : headingData.arabicContent }} className="services-wrapper__body">
              </p>
            </Col>
            <Col xs="12">
              <Row className="justify-content-center">
                {services.map((service, index) => (
                  <Col
                    key={index}
                    xs="12"
                    md="3"
                    className="text-center services-wrapper__text"
                  >
                    <Img
                      fluid={service.node.frontmatter.image.childImageSharp.fluid}
                      className="services-wrapper__image"
                    />
                    {lang === "en" ? service.node.frontmatter.title : service.node.frontmatter.arabicTitle}
                  </Col>

                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      )
    }}
  />
)

export default Services;