import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-1.png")}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/man-working-on-laptop-while-woman-takes-notes-3153199.jpg")}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/letter-blocks-247819.jpg")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
