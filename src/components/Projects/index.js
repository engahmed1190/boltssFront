import React from "react";
import { StaticQuery, graphql } from "gatsby"
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardLink
} from "reactstrap";
import "./index.scss";

const slide1 = require("../../assets/images/slide1.png");
const slide2 = require("../../assets/images/slide2.png");

const Projects = () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
  allMarkdownRemark(filter: {frontmatter: {section: {eq: "projects"}}}) {
    edges {
      node {
        id
        html
        frontmatter {
          title          
          firstProjectTitle
          firstProjectContent
          secondProjectTitle
          secondProjectContent
        }
      }
    }
  }
}
    `}
    render={data => {
      const { html, frontmatter } = data.allMarkdownRemark.edges[0].node

      return (
        <Container className="projects-wrapper" id="projects">
          <Row>
            <Col xs="12">
              <Row>
                <Col xs="12" md="6">
                  <h2 className="projects-wrapper__heading">{frontmatter.title.toUpperCase()}</h2>
                  <h3 dangerouslySetInnerHTML={{ __html: html }} className="projects-wrapper__body">
                  </h3>
                </Col>
                <Col xs="12" md="6">
                  <Row>
                    <Col xs="12" md="6">
                      <Card>
                        <div
                          className="projects-wrapper__card-img"
                          style={{
                            backgroundImage: `url(${slide1})`
                          }}
                        />
                        <CardBody>
                          <CardTitle className="projects-wrapper__card-text-heading">
                            {frontmatter.firstProjectTitle}
                          </CardTitle>
                          <CardText>
                            {frontmatter.firstProjectContent}
                          </CardText>
                          <CardLink href="#">READ MORE</CardLink>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs="12" md="6">
                      <Card>
                        <div
                          className="projects-wrapper__card-img"
                          style={{
                            backgroundImage: `url(${slide2})`
                          }}
                        />
                        <CardBody>
                          <CardTitle className="projects-wrapper__card-text-heading">
                            {frontmatter.secondProjectTitle}
                          </CardTitle>
                          <CardText>
                            {frontmatter.secondProjectContent}
                          </CardText>
                          <CardLink href="#">READ MORE</CardLink>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )
    }}
  />

);

export default Projects;
