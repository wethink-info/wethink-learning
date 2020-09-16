import React from "react";
import { withNamespaces } from 'react-i18next';
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons({ t }) {
  return (
    <>
      <div className="section section-nucleo-icons" style={{backgroundColor: '#808080'}}>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">{t('widget:widget_title')}</h2>
              <h5 className="description">
                {t('widget:widget_paragraph')}
              </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                href="https://students.horizon-university.tn/"
                size="lg"
                target="_blank"
              >
                {t('widget:button_demo')}
              </Button>
              <Button
                className="btn-round"
                color="info"
                href="https://www.wethink.info/services"
                outline
                size="lg"
                target="_blank"
              >
                {t('widget:button_more')}
              </Button>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="now-ui-icons ui-1_send"></i>
                <i className="now-ui-icons ui-2_like"></i>
                <i className="now-ui-icons transportation_air-baloon"></i>
                <i className="now-ui-icons text_bold"></i>
                <i className="now-ui-icons tech_headphones"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i className="now-ui-icons shopping_cart-simple"></i>
                <i className="now-ui-icons objects_spaceship"></i>
                <i className="now-ui-icons media-2_note-03"></i>
                <i className="now-ui-icons ui-2_favourite-28"></i>
                <i className="now-ui-icons design_palette"></i>
                <i className="now-ui-icons clothes_tie-bow"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons objects_key-25"></i>
                <i className="now-ui-icons travel_istanbul"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default withNamespaces()(NucleoIcons);
