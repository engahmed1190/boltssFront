import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Why from "../../components/Why";
import Services from "../../components/Services";
import Projects from "../../components/Projects";

import "./index.scss";

const Home = () => (
  <div className="home-wrapper">
    <Header />
    <Carousel />
    <Why />
    <Services />
    <Projects />
    <Footer />
  </div>
);

export default Home;
