import React from "react"
import { Row, Col } from "reactstrap";
import Products from "../Products";
import Services from "../Services";
import Projects from "../Projects";

import "./index.scss"

const Work = ({ lang = "en" }) => (
  <div id="work" className="work-wrapper">
    <Row className="text-center text-justify">
      <Col xs="12">
        <h1>{lang === "en" ? "OUR WORK" : "اعمالنا"}</h1>
      </Col>
    </Row>
    <Products lang={lang} />
    <Services lang={lang} />
    <Projects lang={lang} />
  </div>
)

export default Work
