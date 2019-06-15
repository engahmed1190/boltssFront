import React from "react"
import Layout from "../components/layout"
import Carousel from "../components/Carousel";
import Why from "../components/Why";
import Products from "../components/Products";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Partners from "../components/Partners";
import Careers from "../components/Careers";
import SEO from "../components/seo"

import "./index.scss";

const IndexPageAr = () => (
    <Layout lang="ar">
        <SEO title="Home Arabic" />
        <Carousel lang="ar" />
        <Why lang="ar" />
        <Products lang="ar" />
        <Services lang="ar" />
        <Projects lang="ar" />
        <Partners lang="ar" />
        <Careers lang="ar" />
    </Layout>
)

export default IndexPageAr
