import React from "react";
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import "./index.scss";

const Partners = () => (
  <StaticQuery
    query={graphql`
      query PartnersQuery {
  allMarkdownRemark(filter: {frontmatter: {section: {eq: "partners"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          logo {
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
      const { allMarkdownRemark: partners } = data
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000
      };
      return (
        <div className="partners-parent">
          <Container className="partners-wrapper" id="partners">
            <Row>
              <Col xs="12">
                <Row>
                  <Col xs="12" md="12">
                    <h2 className="partners-wrapper__heading">PARTNERS</h2>
                  </Col>
                  <Col xs="12" md="12">
                    <Row>
                      <Col
                        xs="12"
                        md="12"
                        className="text-center partners-wrapper__text"
                        id="partners-slides"
                      >
                        <Slider {...settings}>
                          {partners.edges.map((partner, index) => (
                            <Img
                              key={index}
                              fluid={partner.node.frontmatter.logo.childImageSharp.fluid}
                              className="partners-slide-image"
                            />
                          ))}
                        </Slider>
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

export default Partners;