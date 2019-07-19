import React from "react";
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { Container, Row, Col } from "reactstrap";
import "./index.scss";

const Products = ({ lang = "en" }) => (
  <StaticQuery
    query={graphql`
      query ProductsQuery {
  allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }filter: {frontmatter: {section: {eq: "products"}}}) {
    edges {
      node {
        id
        frontmatter {
          title          
          content
          arabicTitle                    
          arabicContent
          show
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
      const products = data.allMarkdownRemark.edges.slice(1, data.allMarkdownRemark.edges.length)

      return (
        <Container className={`products-wrapper ${lang === "en" ? "" : "products-wrapper__ar"} ${headingData.show ? "" : "products-wrapper--hide"}`} id="products">
          <Row>
            <Col xs="12">
              <h2 className="products-wrapper__heading">{lang === "en" ? headingData.title.toUpperCase() : headingData.arabicTitle}</h2>
              <p dangerouslySetInnerHTML={{ __html: lang === "en" ? headingData.content : headingData.arabicContent }} className="products-wrapper__body">
              </p>
            </Col>
            <Col xs="12">
              <Row className="justify-content-center">
                {products.map((product, index) => (
                  <Col
                    key={index}
                    xs="12"
                    md="4"
                    className="text-center products-wrapper__text-wrapper"
                  >
                    <Img
                      fluid={product.node.frontmatter.image.childImageSharp.fluid}
                      className="products-wrapper__image"
                    />
                    <span className="products-wrapper__text">
                      {lang === "en" ? product.node.frontmatter.content : product.node.frontmatter.arabicContent}
                    </span>
                  </Col>
                ))}
              </Row>
            </Col>

          </Row>

        </Container>
      )
    }}
  />
)

export default Products;