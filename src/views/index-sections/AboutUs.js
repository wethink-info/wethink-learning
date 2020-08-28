import React from "react";
import { withNamespaces } from 'react-i18next';
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import  whyWl_Logo from '../../assets/img/whyWl_Logo.png';
// core components

const AboutUs = ({ t }) => {
  return (
    <>
      <div className="section">
        <Container className="text-align">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">{t('aboutUs:mission')}</h2>
              <h5 className="description">
              {t('aboutUs:mission_paragraph')}
              </h5>
              <h2 className="title">{t('aboutUs:impact')}</h2>
              <h5 className="description">
                {t('aboutUs:impact_paragraph')}
                </h5>
              <h2 className="title">{t('aboutUs:story')}</h2>
              <h5 className="description">
                {t('aboutUs:story_paragraph')}
              </h5>
                <img

                  className="img-raised"
                  src={whyWl_Logo}
                  alt="img-why wethink learning"
                  ></img>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}

export default withNamespaces()(AboutUs);