import React from "react"
import Layout from "../components/layout"
import Carousel from "../components/Carousel";
import Why from "../components/Why";
import Services from "../components/Services";
import Projects from "../components/Projects";
import SEO from "../components/seo"

import "./index.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
    <Why />
    <Services />
    <Projects />
  </Layout>
)

export default IndexPage
