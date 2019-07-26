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

class Products extends Component {
  state = { activeItemIndex: 0 };
  detectScreenWidthChange = () =>
    window.matchMedia("(max-width: 767px)").matches;
  render() {
    const { lang = "en" } = this.props;

    return (
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
          const products = data.allMarkdownRemark.edges.slice(1, data.allMarkdownRemark.edges.length)

          return (
            <Container className={`products-wrapper ${lang === "en" ? "" : "products-wrapper__ar"}`} id="products">
              <Row>
                <Col xs="12">
                  <h2 className="products-wrapper__heading">{lang === "en" ? headingData.title.toUpperCase() : headingData.arabicTitle}</h2>
                  <p dangerouslySetInnerHTML={{ __html: lang === "en" ? headingData.content : headingData.arabicContent }} className="products-wrapper__body">
                  </p>
                </Col>
                <Col xs="12" className={`${headingData.show ? "" : "products-wrapper--hide"}`}>
                  <Row className="justify-content-center">
                    {this.detectScreenWidthChange() ?
                      products.map((product, index) => (
                        <Col
                          key={index}
                          xs="12"
                          md="4"
                          className="text-center products-wrapper__text-wrapper"
                        >
                          <Card className="mb-2 products-wrapper__card" key={index}>
                            <div
                              className="products-wrapper__image"
                              style={{
                                backgroundImage: `url(${product.node.frontmatter.image.childImageSharp.fluid.src})`
                              }}
                            />
                            <CardTitle className="products-wrapper__card-text-heading">
                              {product.node.frontmatter.title}
                            </CardTitle>
                            <CardText className="products-wrapper__text">
                              {lang === "en" ? product.node.frontmatter.content : product.node.frontmatter.arabicContent}
                              {product.node.frontmatter.file === "undefined" ? "" : (<span><br /><a href={`https://docs.google.com/uc?export=download&id=${product.node.frontmatter.file}`} download>Download</a></span>)}
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
                        {products.map((product, index) => (

                          <Card className="mb-2 products-wrapper__card" key={index}>
                            <div
                              className="products-wrapper__image"
                              style={{
                                backgroundImage: `url(${product.node.frontmatter.image.childImageSharp.fluid.src})`
                              }}
                            />
                            <CardTitle className="products-wrapper__card-text-heading">
                              {product.node.frontmatter.title}
                            </CardTitle>
                            <CardText className="products-wrapper__text">
                              {lang === "en" ? product.node.frontmatter.content : product.node.frontmatter.arabicContent}
                              {product.node.frontmatter.file === "undefined" ? "" : (<span><br /><a href={`https://docs.google.com/uc?export=download&id=${product.node.frontmatter.file}`} download>Download</a></span>)}
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

export default Products;