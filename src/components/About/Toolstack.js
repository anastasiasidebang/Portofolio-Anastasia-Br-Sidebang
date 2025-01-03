import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiOverleaf,
  SiFigma,
  SiPython,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOverleaf />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>

    </Row>
  );
}

export default Toolstack;
