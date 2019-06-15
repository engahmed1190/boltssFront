import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap";

import "./index.scss";

function detectScreenWidthChange() {
  if (typeof window !== 'undefined') {
    const screenWidth = window.matchMedia("(min-width: 767px)");
    if (screenWidth.matches) return 550;
    else return 320;
  }
}

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
        }
      }
    }
  }
}
    `}
    render={data => {
      const { title, arabicTitle, content, arabicContent, videoUrl } = data.allMarkdownRemark.edges[0].node.frontmatter

      return (
        <Container className={`why-wrapper ${lang === "en" ? "" : "why-wrapper__ar"}`} id="why">
          <Row>

            <Col xs="12" md="6">
              <h2 className="why-wrapper__heading">{lang === "en" ? title.toUpperCase() : arabicTitle}</h2>
              <h3 dangerouslySetInnerHTML={{ __html: lang === "en" ? content : arabicContent }} className="why-wrapper__body">
              </h3>
            </Col>
            <Col xs="12" md="6" className="text-center">
              <iframe
                width={detectScreenWidthChange()}
                height="350"
                title="bolt"
                src={videoUrl}
              />
            </Col>
          </Row>

        </Container>
      )
    }}
  />

);

export default Why;
