import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./index.scss";

const Why = () => (
  <Container className="why-wrapper" id="about">
    <Row>
      <Col xs="12">
        <Row>
          <Col xs="12" md="6">
            <h2 className="why-wrapper__heading">WHY BOLT</h2>
            <h3 className="why-wrapper__body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </h3>
            <a href="#">READ MORE</a>
          </Col>
          <Col xs="12" md="6" className="text-center">
            <iframe
              width="550"
              height="350"
              src="https://www.youtube.com/embed/TdSA7gkVYU0"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Why;
