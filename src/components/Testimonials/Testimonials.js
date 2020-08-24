import React from "react";
import { withNamespaces } from 'react-i18next';
import { Container, Row, Col } from "reactstrap";

const background_Color = {
  backgroundColor: 'rgb(88, 109, 109)'
};

function Testimonials({ t }) {
  return (
    <>
      <div style={background_Color}>
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title"> {t('partners:testimonials_title')} </h2>
              <h3 className="description">
              {t('partners:testimonials_paragraph')}

              </h3>
            </Col>
          
              
          </Row>
        </Container>
      </div>
    </>
  );
}

export default withNamespaces()(Testimonials);
