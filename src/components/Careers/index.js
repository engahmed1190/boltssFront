import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap";
import careers from "../../assets/images/careers.webp"
import "./index.scss";

const Careers = () => (
  <StaticQuery
    query={graphql`
      query CareersQuery {
  allMarkdownRemark(filter: {frontmatter: {section: {eq: "careers"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          email
        }
      }
    }
  }
}
    `}
    render={data => {
      const { title, email } = data.allMarkdownRemark.edges[0].node.frontmatter

      return (
        <div className="careers-parent">
          <Container className="careers-wrapper" id="careers">
            <Row>
              <Col xs="12">
                <Row>
                  <Col xs="12" md="6">
                    <h2 className="careers-wrapper__heading">{title.toUpperCase()}</h2>
                    <div style={{ height: "30%", width: "100%",fontSize:"1.5rem",lineHeight:"50px" }} >
                        If you want to build a successful career and be part of our talented team, Please send your resume to <strong>{email}     </strong>                 
                    </div>
                  </Col>
                  <Col xs="12" md="6">
                    <img src={careers} alt="careers" style={{ width: "80%" }} />
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

export default Careers;