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

const slide1 = require("../../assets/images/slide1.png");
const slide2 = require("../../assets/images/slide2.png");

const Projects = ({ lang = "en" }) => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
  allMarkdownRemark(filter: {frontmatter: {section: {eq: "projects"}}}) {
    edges {
      node {
        id
        frontmatter {
          title          
          firstProjectTitle
          firstProjectContent
          secondProjectTitle
          secondProjectContent
          content
          arabicTitle
          arabicFirstProjectContent
          arabicSecondProjectContent 
          arabicContent
        }
      }
    }
  }
}
    `}
    render={data => {
      const { title, content, firstProjectTitle, firstProjectContent, secondProjectTitle, secondProjectContent, arabicTitle,
        arabicFirstProjectContent,
        arabicSecondProjectContent,
        arabicContent } = data.allMarkdownRemark.edges[0].node.frontmatter

      return (
        <div className="projects-parent" id="projects">
          <Container className={`projects-wrapper ${lang === "en" ? "" : "projects-wrapper__ar"}`} >
            <Row>
              <Col xs="12" md="6">
                <h2 className="projects-wrapper__heading">{lang === "en" ? title.toUpperCase() : arabicTitle}</h2>
                <h3 dangerouslySetInnerHTML={{ __html: lang === "en" ? content : arabicContent }} className="projects-wrapper__body">
                </h3>
              </Col>
              <Col xs="12" md="6">
                <Row>
                  <Col xs="12" md="6">
                    <Card className="mb-2">
                      <div
                        className="projects-wrapper__card-img"
                        style={{
                          backgroundImage: `url(${slide1})`
                        }}
                      />
                      <CardBody>
                        <CardTitle className="projects-wrapper__card-text-heading">
                          {firstProjectTitle}
                        </CardTitle>
                        <CardText>
                          {lang === "en" ? firstProjectContent : arabicFirstProjectContent}
                        </CardText>
                        {/* <CardLink href="#">READ MORE</CardLink> */}
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
                          {secondProjectTitle}
                        </CardTitle>
                        <CardText>
                          {lang === "en" ? secondProjectContent : arabicSecondProjectContent}
                        </CardText>
                        {/* <CardLink href="#">READ MORE</CardLink> */}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )
    }}
  />

);

export default Projects;
