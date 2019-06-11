import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardLink
} from "reactstrap";
import "./index.scss";

const slide1 = require("../../assets/images/slide1.png");
const slide2 = require("../../assets/images/slide2.png");

const Projects = () => (
  <Container className="projects-wrapper" id="projects">
    <Row>
      <Col xs="12">
        <Row>
          <Col xs="12" md="6">
            <h2 className="projects-wrapper__heading">PROJECTS</h2>
            <h3 className="projects-wrapper__body">
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
            
          </Col>
          <Col xs="12" md="6">
            <Row>
              <Col xs="12" md="6">
                <Card>
                  <div
                    className="projects-wrapper__card-img"
                    style={{
                      backgroundImage: `url(${slide1})`
                    }}
                  />
                  <CardBody>
                    <CardTitle className="projects-wrapper__card-text-heading">
                      TROTTBEE
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <CardLink href="#">READ MORE</CardLink>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" md="6">
                <Card>
                  <div
                    className="projects-wrapper__card-img"
                    style={{
                      backgroundImage: `url(${slide2})`
                    }}
                  />
                  <CardBody>
                    <CardTitle className="projects-wrapper__card-text-heading">
                      Hologram
                    </CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <CardLink href="#">READ MORE</CardLink>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Projects;
