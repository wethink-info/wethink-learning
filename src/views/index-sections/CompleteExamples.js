import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { withNamespaces } from 'react-i18next';
// core components

function CompleteExamples( { t}) {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">{t('home:whyWethink_Title')} </h2>
              <h5 className="description">
                  {t('home:whyWethink_paragraph')}
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default withNamespaces()(CompleteExamples);
