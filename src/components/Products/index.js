import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap";
import "./index.scss";

const Products = () => (
  <StaticQuery
    query={graphql`
      query ProductsQuery {
  allMarkdownRemark(filter: {frontmatter: {section: {eq: "products"}}}) {
    edges {
      node {
        id
        frontmatter {
          title          
          firstService
          secondService
          content
        }
      }
    }
  }
}
    `}
    render={data => {
      const { title, content, firstService, secondService } = data.allMarkdownRemark.edges[0].node.frontmatter

      return (
        <div className="products-parent">
          <Container className="products-wrapper" id="products">
            <Row>
              <Col xs="12">
                <Row>
                  <Col xs="12" md="6">
                    <h2 className="products-wrapper__heading">{title.toUpperCase()}</h2>
                    <h3 dangerouslySetInnerHTML={{ __html: content }} className="products-wrapper__body">
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
                        {firstService}
                      </Col>
                      <Col
                        xs="12"
                        md="6"
                        className="text-center products-wrapper__text"
                      >
                        <div className="products-wrapper__image" />
                        {secondService}
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

export default Products;