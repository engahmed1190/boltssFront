import React from "react";
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap";
// import Slider from "react-slick";
import "./index.scss";

const Partners = ({ lang = "en" }) => (
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
      // const settings = {
      //   dots: false,
      //   infinite: true,
      //   speed: 500,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   autoplay: true,
      //   arrows: false,
      //   autoplaySpeed: 4000
      // };
      return (
        <div className="partners-parent" id="partners">
          <Container className={`partners-wrapper ${lang === "en" ? "" : "partners-wrapper__ar"}`} >

            <Col xs="12" md="12">
              <h2 className="partners-wrapper__heading">{lang === "en" ? "PARTNERS" : "شركائنا"}</h2>
            </Col>
            <Col xs="12" md="12">
              <Row style={{ justifyContent: "center" }}>
                {partners.edges.map((partner, index) => (
                  <Col
                    xs="12"
                    md="3"
                    className="text-center partners-wrapper__image-wrapper"
                    id="partners-slides"
                    key={index}
                  >
                    <Img
                      fluid={partner.node.frontmatter.logo.childImageSharp.fluid}
                      className="partners-slide-image"
                    />
                  </Col>
                ))}
                {/* <Col
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
                      </Col> */}
              </Row>
            </Col>

          </Container>
        </div>
      )
    }}
  />
)

export default Partners;