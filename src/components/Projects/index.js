import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby"
import ItemsCarousel from "react-items-carousel";
import RightArrowIcon from "../../assets/icons/right-arrow.svg";
import LeftArrowIcon from "../../assets/icons/left-arrow.svg";
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

class Projects extends Component {
  state = { activeItemIndex: 0, isMobileView: false };
  componentDidMount() {
    this.setState({ isMobileView: this.detectScreenWidthChange() })
  }
  detectScreenWidthChange = () =>
    window.matchMedia("(max-width: 767px)").matches;
  render() {
    const { lang = "en" } = this.props;

    return (
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
          show
          file
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
          const { isMobileView } = this.state;
          return (
            <Container className={`projects-wrapper ${lang === "en" ? "" : "projects-wrapper__ar"}`} id="projects">
              <Row>
                <Col xs="12">
                  <h2 className="projects-wrapper__heading">{lang === "en" ? headingData.title.toUpperCase() : headingData.arabicTitle}</h2>
                  <p dangerouslySetInnerHTML={{ __html: lang === "en" ? headingData.content : headingData.arabicContent }} className="projects-wrapper__body">
                  </p>
                </Col>
                <Col xs="12" className={`${headingData.show ? "" : "projects-wrapper--hide"}`}>
                  <Row className="justify-content-center">
                    {isMobileView ?
                      projects.map((project, index) => (
                        <Col xs="12" key={index}>
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
                                {project.node.frontmatter.file === "undefined" ? "" : (<span><br /><a href={`https://docs.google.com/uc?export=download&id=${project.node.frontmatter.file}`} download>Download</a></span>)}
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>
                      ))
                      : (<ItemsCarousel
                        chevronWidth={30}
                        numberOfCards={3}
                        slidesToScroll={1}
                        outsideChevron={true}
                        showSlither={false}
                        firstAndLastGutter={false}
                        activeItemIndex={this.state.activeItemIndex}
                        requestToChangeActive={value =>
                          this.setState({ activeItemIndex: value })
                        }
                        rightChevron={<img src={RightArrowIcon} alt="right arrow" />}
                        leftChevron={<img src={LeftArrowIcon} alt="left arrow" />}
                        style={{ width: "100%" }}
                      >
                        {projects.map((project, index) => (

                          <Card className="mb-2" key={index}>
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
                                {project.node.frontmatter.file === "undefined" ? "" : (<span><br /><a href={`https://docs.google.com/uc?export=download&id=${project.node.frontmatter.file}`} download>Download</a></span>)}
                              </CardText>
                            </CardBody>
                          </Card>

                        ))}
                      </ItemsCarousel>)}

                  </Row>
                </Col>
              </Row>
            </Container>
          )
        }}
      />
    )
  }
}

export default Projects;
