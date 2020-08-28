import React from "react";
import { withNamespaces } from 'react-i18next';
import { Container, Row, Col } from "reactstrap";
import './Partners.css';
import PartnersItems from "./PartnersItems";

function Partners({ t }) {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">{t('partners:partners_title')} </h2>
            </Col>
            <PartnersItems/>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default withNamespaces()( Partners);
