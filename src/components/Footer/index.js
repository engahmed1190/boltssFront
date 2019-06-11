import React from "react";
import { StaticQuery, graphql } from "gatsby"
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Label
} from "reactstrap";
import logo from "../../assets/images/logo.png";
import map from "../../assets/images/map.png";
import facebookIcon from "../../assets/images/facebook-logo.svg";
import linkedinIcon from "../../assets/images/linkedin-letters.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import youtubeIcon from "../../assets/images/youtube.svg";

import "./index.scss";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
  allMarkdownRemark(filter: {frontmatter: {section: {eq: "contact"}}}) {
    edges {
      node {
        id
        frontmatter {                    
          email
          phone
          address
        }
      }
    }
  }
}
    `}
    render={data => {
      const { email,phone,address } = data.allMarkdownRemark.edges[0].node.frontmatter

      return (
        <div className="footer-wrapper" id="contact">
          <Container>
            <Row>
              <Col xs="12">
                <Row>
                  <Col xs="12" md="3">
                    <img src={logo} alt="logo" />
                    <div className="footer-wrapper__data">
                      <div className="footer-wrapper__data__info">
                        <div style={{ marginBottom: "24px" }}>
                          <strong>Email</strong>
                          <p>{email}</p>
                        </div>
                        <div style={{ marginBottom: "24px" }}>
                          <strong>Phone</strong>
                          <p>{phone}</p>
                        </div>
                        <div style={{ marginBottom: "24px" }}>
                          <strong>Address</strong>
                          <p>{address}</p>
                        </div>
                      </div>
                      <div className="footer-wrapper__data__social-media">
                        <div className="footer-icon-button" role="button">
                          <img
                            src={facebookIcon}
                            alt="facebook icon"
                            className="icon-button__icon"
                          />
                        </div>
                        <div className="footer-icon-button" role="button">
                          <img
                            src={twitterIcon}
                            alt="facebook icon"
                            className="icon-button__icon"
                          />
                        </div>
                        <div className="footer-icon-button" role="button">
                          <img
                            src={linkedinIcon}
                            alt="linkedin icon"
                            className="icon-button__icon"
                          />
                        </div>
                        <div className="footer-icon-button" role="button">
                          <img
                            src={youtubeIcon}
                            alt="linkedin icon"
                            className="icon-button__icon"
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" md="5">
                    <img
                      src={map}
                      alt="map"
                      style={{ width: "100%", margin: "24px 0" }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "white"
                      }}
                    >
                      <p style={{ margin: "0 4px" }}>Home</p>
                      <p style={{ margin: "0 4px" }}>About us</p>
                      <p style={{ margin: "0 4px" }}>Projects</p>
                      <p style={{ margin: "0 4px" }}>Services</p>
                      <p style={{ margin: "0 4px" }}>Careers</p>
                      <p style={{ margin: "0 4px" }}>Contact us</p>
                    </div>
                  </Col>
                  <Col xs="12" md="4" className="p-4 d-flex justify-content-center">
                    <Form
                      style={{
                        backgroundColor: "#216896",
                        color: "white",
                        padding: "16px",
                        borderRadius: "10px"
                      }}
                    >
                      <FormGroup>
                        <h2>Sign Up</h2>
                        <p>
                          Planning to visit Las Vegas or any other vacational resort
                          where casinos Planning to visit Las Vegas or any other
                    vacational resort where casinos{" "}
                        </p>
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="Email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="Password"
                        />
                      </FormGroup>

                      <FormGroup>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>Country</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" /> By clicking you agree to the
                  </Label>
                      </FormGroup>
                      <Button color="primary" size="lg" block>
                        Sign Up
                </Button>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )
    }}
  />
  
);

export default Footer;
