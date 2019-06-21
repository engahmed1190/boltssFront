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
} from "reactstrap";
import "./index.scss";

const Projects = ({ lang = "en" }) => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
  allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }filter: {frontmatter: {section: {eq: "projects"}}}) {
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
      const projects = data.allMarkdownRemark.edges.slice(1, data.allMarkdownRemark.edges.length)

      return (
        <Container className={`projects-wrapper ${lang === "en" ? "" : "projects-wrapper__ar"}`} id="projects">
          <Row>
            <Col xs="12">
              <h2 className="projects-wrapper__heading">{lang === "en" ? headingData.title.toUpperCase() : headingData.arabicTitle}</h2>
              <p dangerouslySetInnerHTML={{ __html: lang === "en" ? headingData.content : headingData.arabicContent }} className="projects-wrapper__body">
              </p>
            </Col>
            <Col xs="12">
              <Row className="justify-content-center">
                {projects.map((project, index) => (
                  <Col xs="12" md="3" key={index}>
                    <Card className="mb-2">
                      <div
                        className="projects-wrapper__card-img"
                        style={{
                          backgroundImage: `url(${project.node.frontmatter.image.childImageSharp.fluid.src})`
                        }}
                      />
                      <CardBody>
                        <CardTitle className="projects-wrapper__card-text-heading">
                          {project.node.frontmatter.title}
                        </CardTitle>
                        <CardText>
                          {lang === "en" ? project.node.frontmatter.content : project.node.frontmatter.arabicContent}
                        </CardText>
                        {/* <CardLink href="#">READ MORE</CardLink> */}
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      )
    }}
  />

);

export default Projects;
