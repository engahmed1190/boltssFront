import React from "react"
import Layout from "../components/layout"
import Carousel from "../components/Carousel";
import Why from "../components/Why";
import Products from "../components/Products";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Partners from "../components/Partners";
import SEO from "../components/seo"

import "./index.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
    <Why />
    <Products />
    <Services />
    <Projects />
    <Partners />
  </Layout>
)

export default IndexPage
