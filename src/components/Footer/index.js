import React from "react";
import { StaticQuery, graphql } from "gatsby"
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import logo from "../../assets/images/logo.png";
import facebookIcon from "../../assets/images/facebook-logo.svg";
import linkedinIcon from "../../assets/images/linkedin-letters.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import youtubeIcon from "../../assets/images/youtube.svg";

import "./index.scss";

function redirectToSocialMedia(website) {
  switch (website) {
    case "facebook":
      window.open("https://www.facebook.com/BOLTSS.EG", "__target");
      break;
    case "twitter":
      window.open("https://twitter.com/bolt_smart", "__target");
      break;
    case "linkedin":
      window.open("https://www.linkedin.com/in/bolt-smart-solutions-6957b6181", "__target");
      break;
    case "youtube":
      window.open("https://www.youtube.com/channel/UCnnKfVOg2vAkaME529PTQxw?view_as=subscriber", "__target");
      break;

    default:
      break;
  }
}

const Footer = ({ lang = "en" }) => (
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
          arabicAddress
        }
      }
    }
  }
}
    `}
    render={data => {
      const { email, phone, address, arabicAddress } = data.allMarkdownRemark.edges[0].node.frontmatter

      return (
        <div className="footer-wrapper" id="contact">
          <Container>
            <Row>
              <Col xs="12">
                <Row>
                  <Col xs="12" md="4">
                    <img src={logo} alt="logo" style={{ marginTop: "8px" }} />
                    <div className="footer-wrapper__data">
                      <div className="footer-wrapper__data__contact">
                        <p className="footer-wrapper__data__contact__item"><a href="#home">{lang === "en" ? "HOME" : "الرئيسية"}</a></p>
                        <p className="footer-wrapper__data__contact__item"><a href="#why">{lang === "en" ? "ABOUT US" : "عننا"}</a></p>

                        <p className="footer-wrapper__data__contact__item"><a href="#work">{lang === "en" ? "OUR WORK" : "اعمالنا"}</a></p>

                      </div>
                      <div className="footer-wrapper__data__contact">
                        <p className="footer-wrapper__data__contact__item"><a href="#partners">{lang === "en" ? "PARTNERS" : "شركائنا"}</a></p>
                        <p className="footer-wrapper__data__contact__item"><a href="#careers">{lang === "en" ? "CAREERS" : "الوظائف"}</a></p>
                        <p className="footer-wrapper__data__contact__item"><a href="#contact">{lang === "en" ? "CONTACT US" : "اتصل بنا"}</a></p>
                      </div>

                    </div>

                  </Col>
                  <Col xs="12" md="8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.8453052099494!2d31.291789015114485!3d30.012597981893887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzQ1LjQiTiAzMcKwMTcnMzguMyJF!5e0!3m2!1sen!2seg!4v1560992371265!5m2!1sen!2seg" width="400" height="300" frameBorder="0" style={{ width: "100%", margin: "24px 0" }} allowFullScreen></iframe>
                  </Col>
                </Row>
              </Col>
              <Col xs="12">
                <Row>
                  <Col xs="12" md="4">
                    <div className="footer-wrapper__data__social-media">
                      <div className="footer-icon-button" role="button" onClick={() => redirectToSocialMedia("facebook")}>
                        <img
                          src={facebookIcon}
                          alt="facebook icon"
                          className="icon-button__icon"
                        />
                      </div>
                      <div className="footer-icon-button" role="button" onClick={() => redirectToSocialMedia("twitter")}>
                        <img
                          src={twitterIcon}
                          alt="facebook icon"
                          className="icon-button__icon"
                        />
                      </div>
                      <div className="footer-icon-button" role="button" onClick={() => redirectToSocialMedia("linkedin")}>
                        <img
                          src={linkedinIcon}
                          alt="linkedin icon"
                          className="icon-button__icon"
                        />
                      </div>
                      <div className="footer-icon-button" role="button" onClick={() => redirectToSocialMedia("youtube")}>
                        <img
                          src={youtubeIcon}
                          alt="linkedin icon"
                          className="icon-button__icon"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" md="8">
                    <div className="footer-wrapper__data__info">
                      <div className="footer-wrapper__data__info__item">
                        <strong>{lang === "en" ? "Email" : "البريد الالكترونى"}</strong>
                        <p>{email}</p>
                      </div>
                      <div className="footer-wrapper__data__info__item">
                        <strong>{lang === "en" ? "Phone" : "التليفون"}</strong>
                        <p>{phone}</p>
                      </div>
                      <div className="footer-wrapper__data__info__item">
                        <strong>{lang === "en" ? "Address" : "العنوان"}</strong>
                        <p>{lang === "en" ? address : arabicAddress}</p>
                      </div>
                    </div>

                  </Col>

                </Row>
                <Row>
                  <Col xs="12" md="12" className="footer-wrapper__data__rights">
                    {lang === "en" ? `Copyright © ${new Date().getFullYear()} BOLT.

          All rights reserved.`: `${new Date().getFullYear()} ©  BOLT.

          جميع الحقوق محفوظة.`}

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
