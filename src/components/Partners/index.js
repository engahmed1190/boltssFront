import React from "react";
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
          image
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
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000
      };
      return (
        <div className="services-parent">
          <Container className="services-wrapper" id="services">
            <Row>
              <Col xs="12">
                <Row>
                  <Col xs="12" md="6">
                    <h2 className="services-wrapper__heading">PARTNERS</h2>
                  </Col>
                  <Col xs="12" md="6">
                    <Row>
                      <Col
                        xs="12"
                        md="12"
                        className="text-center services-wrapper__text"
                      >
                        <Slider {...settings}>
                          {partners ? partners.edges.map(partner => (
                            <img
                              src={require(partner.node.frontmatter.image)}
                              className="slide-image"
                            />
                          )) : null}
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