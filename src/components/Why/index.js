import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap";

import "./index.scss";

const Why = ({ lang = "en" }) => (
  <StaticQuery
    query={graphql`
      query WhyQuery {
  allMarkdownRemark(filter: {frontmatter: {section: {eq: "why"}}}) {
    edges {
      node {
        id        
        frontmatter {
          title
          arabicTitle          
          videoUrl
          content
          arabicContent
          show
        }
      }
    }
  }
}
    `}
    render={data => {
      const { title, arabicTitle, content, arabicContent, videoUrl,show } = data.allMarkdownRemark.edges[0].node.frontmatter

      return (
        <Container className={`why-wrapper ${lang === "en" ? "" : "why-wrapper__ar"} ${show ? "" : "why-wrapper--hide"}`} id="why">
          <Row>

            <Col xs="12" md="6">
              <h1 className="why-wrapper__heading">{lang === "en" ? title.toUpperCase() : arabicTitle}</h1>
              <p dangerouslySetInnerHTML={{ __html: lang === "en" ? content : arabicContent }} className="why-wrapper__body">
              </p>
            </Col>
            {/* <Col xs="12" md="6" className="text-center why-wrapper__iframe-container">
              <iframe
                title="bolt"
                src={videoUrl}
              />
            </Col> */}
          </Row>

        </Container>
      )
    }}
  />

);

export default Why;
