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
        <div className="services-parent" id="services">
          <Container className={`services-wrapper ${lang === "en" ? "" : "services-wrapper__ar"}`} >

            <Row>
              <Col xs="12" md="6">
                <h2 className="services-wrapper__heading">{lang === "en" ? title.toUpperCase() : arabicTitle}</h2>
                <h3 dangerouslySetInnerHTML={{ __html: lang === "en" ? content : arabicContent }} className="services-wrapper__body">
                </h3>
              </Col>
              <Col xs="12" md="6">
                <Row>
                  <Col
                    xs="12"
                    md="4"
                    className="text-center services-wrapper__text"
                  >
                    <div className="services-wrapper__image" />
                    {lang === "en" ? firstService : arabicFirstService}
                  </Col>
                  <Col
                    xs="12"
                    md="4"
                    className="text-center services-wrapper__text"
                  >
                    <div className="services-wrapper__image" />
                    {lang === "en" ? secondService : arabicSecondService}
                  </Col>
                  <Col
                    xs="12"
                    md="4"
                    className="text-center services-wrapper__text"
                  >
                    <div className="services-wrapper__image" />
                    {lang === "en" ? thirdService : arabicThirdService}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )
    }}
  />
)

export default Services;