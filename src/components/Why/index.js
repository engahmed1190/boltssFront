import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap";

import "./index.scss";

const Why = () => (
  <StaticQuery
    query={graphql`
      query WhyQuery {
  allMarkdownRemark(filter: {frontmatter: {section: {eq: "why"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          content
          videoUrl
        }
      }
    }
  }
}
    `}
    render={data => {
      const { title, content, videoUrl } = data.allMarkdownRemark.edges[0].node.frontmatter

      return (
        <Container className="why-wrapper" id="about">
          <Row>
            <Col xs="12">
              <Row>
                <Col xs="12" md="6">
                  <h2 className="why-wrapper__heading">{title.toUpperCase()}</h2>
                  <h3 className="why-wrapper__body">
                    {content}
                  </h3>

                </Col>
                <Col xs="12" md="6" className="text-center">
                  <iframe
                    width="550"
                    height="350"
                    title="bolt"
                    src={videoUrl}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )
    }}
  />

);

export default Why;
