import React from "react";
import { Button } from "reactstrap";
import Slider from "react-slick";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import facebookIcon from "../../assets/images/facebook-logo.svg";
import linkedinIcon from "../../assets/images/linkedin-letters.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import youtubeIcon from "../../assets/images/youtube.svg";
import "./index.scss";

const Carousel = () => {
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
          <img src={slide1} alt="slide1" className="slide-image" />
          <img src={slide2} alt="slide2" className="slide-image" />
        </Slider>
      </div>
      <div className="hero-data">
        <div className="hero-data__section1">
          <h1>
            We're Leading in
            <br /> smart Technology
          </h1>
          <Button color="primary" size="lg">
            About Us
          </Button>
        </div>
        <div className="hero-data__section2">
          <Button color="warning" size="lg">
            CTA
          </Button>
        </div>
      </div>
      <div className="social-media-wrapper">
        <div className="icon-button icon-button" role="button">
          <img
            src={facebookIcon}
            alt="facebook icon"
            className="icon-button__icon"
          />
        </div>
        <div className="icon-button icon-button" role="button">
          <img
            src={twitterIcon}
            alt="facebook icon"
            className="icon-button__icon"
          />
        </div>
        <div className="icon-button icon-button" role="button">
          <img
            src={linkedinIcon}
            alt="linkedin icon"
            className="icon-button__icon"
          />
        </div>
        <div className="icon-button icon-button" role="button">
          <img
            src={youtubeIcon}
            alt="linkedin icon"
            className="icon-button__icon"
          />
        </div>
      </div>
    </div>
  );
};
export default Carousel;
