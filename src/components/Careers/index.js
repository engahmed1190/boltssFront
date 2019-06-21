import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap";
import careers from "../../assets/images/careers.webp"
import "./index.scss";

const Careers = ({ lang = "en" }) => (
  <StaticQuery
    query={graphql`
      query CareersQuery {
  allMarkdownRemark(filter: {frontmatter: {section: {eq: "careers"}}}) {
    edges {
      node {
        id
        frontmatter {          
          content
          arabicContent
          email
        }
      }
    }
  }
}
    `}
    render={data => {
      const {  content,
arabicContent,
email } = data.allMarkdownRemark.edges[0].node.frontmatter

      return (

        <Container className={`careers-wrapper ${lang === "en" ? "" : "careers-wrapper__ar"}`} id="careers">
          <Row className="text-center">
            <Col xs="12">
              <h1 className="careers-wrapper__heading">{lang === "en" ? "CAREERS" : "الوظائف"}</h1>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="6">
              <div className="careers-wrapper__body">
                {lang === "en" ? <span>{content} <strong>{email}</strong></span> : <span>
                  {arabicContent} <strong>{email}</strong>
                </span>}
              </div>
            </Col>
            <Col xs="12" md="6" className="careers-wrapper__image-wrapper">
              <img src={careers} alt="careers" className="careers-wrapper__image" />
            </Col>
          </Row>
        </Container>

      )
    }}
  />
)

export default Careers;