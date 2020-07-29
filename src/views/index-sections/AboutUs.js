import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function AboutUs() {
  return (
    <>
      <div className="section">
        <Container className="text-align">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">The Mission</h2>
              <h5 className="description">
                Increase access to high-quality education for everyone, everywhere
                Enhance teaching and learning on campus and online
                Advance teaching and learning through research
              </h5>
              <h2 className="title">Our Impact</h2>
              <h5 className="description">
              We are proud to reflect on the impact that E-Learning WETHINK and our partner institutions
               have had on education and learning since our founding in 2020.
                </h5>
                <img
                  className="img-raised"
                  src={require("assets/img/selective-focus-photo-of-man-using-laptop-1438081.jpg")}
                ></img>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}

export default  AboutUs;
