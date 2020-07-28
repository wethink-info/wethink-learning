import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function AboutUs() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">About Us</h2>
              <h5 className="description">
                Increase access to high-quality education for everyone, everywhere
                Enhance teaching and learning on campus and online
                Advance teaching and learning through research
              </h5>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default  AboutUs;
