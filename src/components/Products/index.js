import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap";
import "./index.scss";

const Products = ({ lang = "en" }) => (
  <StaticQuery
    query={graphql`
      query ProductsQuery {
  allMarkdownRemark(filter: {frontmatter: {section: {eq: "products"}}}) {
    edges {
      node {
        id
        frontmatter {
          title          
          firstProduct
          secondProduct
          content
          arabicTitle          
          arabicFirstProduct
          arabicSecondProduct
          arabicContent
        }
      }
    }
  }
}
    `}
    render={data => {
      const { title, firstProduct,
        secondProduct,
        content,
        arabicTitle,
        arabicFirstProduct,
        arabicSecondProduct,
        arabicContent } = data.allMarkdownRemark.edges[0].node.frontmatter

      return (
        <div className="products-parent" id="products">
          <Container className={`products-wrapper ${lang === "en" ? "" : "products-wrapper__ar"}`}>


            <Row>
              <Col xs="12" md="6">
                <h2 className="products-wrapper__heading">{lang === "en" ? title.toUpperCase() : arabicTitle}</h2>
                <h3 dangerouslySetInnerHTML={{ __html: lang === "en" ? content : arabicContent }} className="products-wrapper__body">
                </h3>
              </Col>
              <Col xs="12" md="6">
                <Row>
                  <Col
                    xs="12"
                    md="6"
                    className="text-center products-wrapper__text"
                  >
                    <div className="products-wrapper__image" />
                    {lang === "en" ? firstProduct : arabicFirstProduct}
                  </Col>
                  <Col
                    xs="12"
                    md="6"
                    className="text-center products-wrapper__text"
                  >
                    <div className="products-wrapper__image" />
                    {lang === "en" ? secondProduct : arabicSecondProduct}
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

export default Products;