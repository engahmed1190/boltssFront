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
        html
        frontmatter {
          title          
          videoUrl
        }
      }
    }
  }
}
    `}
    render={data => {
      const { frontmatter, html } = data.allMarkdownRemark.edges[0].node
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      return (
        <Container className="why-wrapper" id="about">
          <Row>
            <Col xs="12">
              <Row>
                <Col xs="12" md="6">
                  <h2 className="why-wrapper__heading">{frontmatter.title.toUpperCase()}</h2>
                  <h3 dangerouslySetInnerHTML={{ __html: html }} className="why-wrapper__body">
                  </h3>
                </Col>
                <Col xs="12" md="6" className="text-center">
                  <iframe
                    width="550"
                    height="350"
                    title="bolt"
                    src={frontmatter.videoUrl}
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
