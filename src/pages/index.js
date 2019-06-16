import React from "react"
import Layout from "../components/layout"
import Carousel from "../components/Carousel";
import Why from "../components/Why";
import Work from "../components/Work";
import Partners from "../components/Partners";
import Careers from "../components/Careers";
import SEO from "../components/seo"

import "./index.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
    <Why />
    <Work />
    <Partners />
    <Careers />
  </Layout>
)

export default IndexPage
