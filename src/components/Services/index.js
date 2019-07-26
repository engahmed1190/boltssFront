import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby"
import ItemsCarousel from "react-items-carousel";
import RightArrowIcon from "../../assets/icons/right-arrow.svg";
import LeftArrowIcon from "../../assets/icons/left-arrow.svg";
import {
  Container, Row, Col, Card,
  CardText,
  CardTitle,
} from "reactstrap";
import "./index.scss";

class Services extends Component {
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
      query ServicesQuery {
  allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }filter: {frontmatter: {section: {eq: "services"}}}) {
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
          const services = data.allMarkdownRemark.edges.slice(1, data.allMarkdownRemark.edges.length)
          const { isMobileView } = this.state;
          return (
            <Container className={`services-wrapper ${lang === "en" ? "" : "services-wrapper__ar"}`} id="services">
              <Row>
                <Col xs="12">
                  <h2 className="services-wrapper__heading">{lang === "en" ? headingData.title.toUpperCase() : headingData.arabicTitle}</h2>
                  <p dangerouslySetInnerHTML={{ __html: lang === "en" ? headingData.content : headingData.arabicContent }} className="services-wrapper__body">
                  </p>
                </Col>
                <Col xs="12" className={`${headingData.show ? "" : "services-wrapper--hide"}`}>
                  <Row className="justify-content-center">
                    {isMobileView ?
                      services.map((service, index) => (
                        <Col
                          key={index}
                          xs="12"
                          md="4"
                          className="text-center services-wrapper__text-wrapper"
                        >
                          <Card className="mb-2 services-wrapper__card" key={index}>
                            <div
                              className="services-wrapper__image"
                              style={{
                                backgroundImage: `url(${service.node.frontmatter.image.childImageSharp.fluid.src})`
                              }}
                            />
                            <CardTitle className="services-wrapper__card-text-heading">
                              {service.node.frontmatter.title}
                            </CardTitle>
                            <CardText className="services-wrapper__text">
                              {lang === "en" ? service.node.frontmatter.content : service.node.frontmatter.arabicContent}
                              {service.node.frontmatter.file === "" ? "" : (<span><br /><a href={`https://docs.google.com/uc?export=download&id=${service.node.frontmatter.file}`} download>Download</a></span>)}
                            </CardText>
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
                        {services.map((service, index) => (

                          <Card className="mb-2 services-wrapper__card" key={index}>
                            <div
                              className="services-wrapper__image"
                              style={{
                                backgroundImage: `url(${service.node.frontmatter.image.childImageSharp.fluid.src})`
                              }}
                            />
                            <CardTitle className="services-wrapper__card-text-heading">
                              {service.node.frontmatter.title}
                            </CardTitle>
                            <CardText className="services-wrapper__text">
                              {lang === "en" ? service.node.frontmatter.content : service.node.frontmatter.arabicContent}
                              {service.node.frontmatter.file === "" ? "" : (<span><br /><a href={`https://docs.google.com/uc?export=download&id=${service.node.frontmatter.file}`} download>Download</a></span>)}
                            </CardText>
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

export default Services;