import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap";
import "./index.scss";

const Services = () => (
  <StaticQuery
    query={graphql`
      query ServicesQuery {
  allMarkdownRemark(filter: {frontmatter: {section: {eq: "services"}}}) {
    edges {
      node {
        id
        html
        frontmatter {
          title          
          firstService
          secondService
        }
      }
    }
  }
}
    `}
    render={data => {
      const { title, content, firstService, secondService } = data.allMarkdownRemark.edges[0].node.frontmatter

      return (
        <div className="services-parent">
          <Container className="services-wrapper" id="services">
            <Row>
              <Col xs="12">
                <Row>
                  <Col xs="12" md="6">
                    <h2 className="services-wrapper__heading">{title.toUpperCase()}</h2>
                    <h3 dangerouslySetInnerHTML={{ __html: content }} className="services-wrapper__body">
                    </h3>
                  </Col>
                  <Col xs="12" md="6">
                    <Row>
                      <Col
                        xs="12"
                        md="6"
                        className="text-center services-wrapper__text"
                      >
                        <div className="services-wrapper__image" />
                        {firstService}
                      </Col>
                      <Col
                        xs="12"
                        md="6"
                        className="text-center services-wrapper__text"
                      >
                        <div className="services-wrapper__image" />
                        {secondService}
                      </Col>
                    </Row>
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