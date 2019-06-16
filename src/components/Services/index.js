import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap";

import "./index.scss";

const Services = ({ lang = "en" }) => (
  <StaticQuery
    query={graphql`
      query ServicesQuery {
  allMarkdownRemark(filter: {frontmatter: {section: {eq: "services"}}}) {
    edges {
      node {
        id
        frontmatter {
          title          
          firstService
          secondService
          thirdService
          content
          arabicTitle          
          arabicFirstService
          arabicSecondService
          arabicThirdService
          arabicContent
        }
      }
    }
  }
}
    `}
    render={data => {
      const { title, content, firstService, secondService, thirdService, arabicTitle,
        arabicFirstService,
        arabicSecondService,
        arabicThirdService,
        arabicContent } = data.allMarkdownRemark.edges[0].node.frontmatter

      return (
        <Container className={`services-wrapper ${lang === "en" ? "" : "services-wrapper__ar"}`} id="services">

          <Row>
            <Col xs="12">
              <h2 className="services-wrapper__heading">{lang === "en" ? title.toUpperCase() : arabicTitle}</h2>
              <p dangerouslySetInnerHTML={{ __html: lang === "en" ? content : arabicContent }} className="services-wrapper__body">
              </p>
            </Col>
            <Col xs="12">
              <Row className="justify-content-center">
                <Col
                  xs="12"
                  md="3"
                  className="text-center services-wrapper__text"
                >
                  <div className="services-wrapper__image" />
                  {lang === "en" ? firstService : arabicFirstService}
                </Col>
                <Col
                  xs="12"
                  md="3"
                  className="text-center services-wrapper__text"
                >
                  <div className="services-wrapper__image" />
                  {lang === "en" ? secondService : arabicSecondService}
                </Col>
                <Col
                  xs="12"
                  md="3"
                  className="text-center services-wrapper__text"
                >
                  <div className="services-wrapper__image" />
                  {lang === "en" ? thirdService : arabicThirdService}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )
    }}
  />
)

export default Services;