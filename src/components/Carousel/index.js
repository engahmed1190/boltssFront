import React from "react";
import { StaticQuery, graphql } from "gatsby"
// import { Button } from "reactstrap";
import Slider from "react-slick";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
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

const Carousel = ({ lang = "en" }) => (
  <StaticQuery
    query={graphql`
      query SloganQuery {
  allMarkdownRemark(filter: {frontmatter: {section: {eq: "slogan"}}}) {
    edges {
      node {
        id
        frontmatter {
          title                  
        }
      }
    }
  }
}
    `}

    render={data => {
      const sloganData = data.allMarkdownRemark.edges[0].node.frontmatter;
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
        <div id="home" className="carousel-wrapper">
          <div className="carousel">
            <Slider {...settings}>
              <img src={slide1} alt="slide1" className="home-slide-image" />
              <img src={slide2} alt="slide2" className="home-slide-image" />
            </Slider>
          </div>
          <div className="hero-data">
            <div className="hero-data__section">
              <h1>
                {sloganData.title}
              </h1>
              {/* <Button color="primary" size="lg">
              {lang === "en" ? "About Us" : "من نحن"}
            </Button>
            <Button color="warning" size="lg" className="hero-data__cta">
              {lang === "en" ? "CTA" : "CTA"}
            </Button> */}
            </div>
          </div>
          <div className="social-media-wrapper">
            <div className="icon-button" role="button" onClick={() => redirectToSocialMedia("facebook")}>
              <img
                src={facebookIcon}
                alt="facebook icon"
                className="icon-button__icon"
              />
            </div>
            <div className="icon-button" role="button" onClick={() => redirectToSocialMedia("twitter")}>
              <img
                src={twitterIcon}
                alt="twitter icon"
                className="icon-button__icon"
              />
            </div>
            <div className="icon-button" role="button" onClick={() => redirectToSocialMedia("linkedin")}>
              <img
                src={linkedinIcon}
                alt="linkedin icon"
                className="icon-button__icon"
              />
            </div>
            <div className="icon-button" role="button" onClick={() => redirectToSocialMedia("youtube")}>
              <img
                src={youtubeIcon}
                alt="youtube icon"
                className="icon-button__icon"
              />
            </div>
          </div>
          <a href="#why" className="scroll-down" address="true" />
        </div>
      );
    }
    }


  />
);
export default Carousel;
