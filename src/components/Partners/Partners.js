import React from "react";
import './Partners.css';
import { Container, Row, Col } from "reactstrap";
import PartnersItems from "./PartnersItems";

function Partners() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Our Partners, They trust us </h2>  
            </Col>
            <PartnersItems/>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Partners;
