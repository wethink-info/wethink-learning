import React from "react";
//import './Testimonials.css';
import { Container, Row, Col } from "reactstrap";

const background_Color = {
  backgroundColor: 'rgb(88, 109, 109)'
}
function Testimonials() {
  return (
    <>
      <div style={background_Color}>
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title"> Testimonials </h2>
              <h3 className="description">
              The best reward for our continued efforts is the love shown by our customers.

              </h3>
            </Col>
          
              
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Testimonials;
