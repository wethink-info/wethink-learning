import React from 'react';
import {
    Row, Col, Container, TabContent, TabPane, CardBody, Card
} from 'reactstrap';
import './Partners.styles.scss';
import imgHope from "assets/img/hope.png";
import imgLightenEduc from "assets/img/enlightenEducation.png";
import imgHorizon from "assets/img/horizonUniversity.png";

function PartnersItem () { 
  const [iconPills] = React.useState("1");
  return (
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" lg="4">
              <Card >
                <CardBody >
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <a href='https://hopeai.org/' target='blanck'>
                      <img src ={imgHope} alt="hope-logo"></img>
                      </a>
                    </TabPane>
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" lg="4">
              <Card >
                <CardBody >
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <a href='https://enlighteneducationcorp.com' target='blanck'>
                      <img src ={imgLightenEduc} alt="LightenEduc-logo"></img>
                      </a>
                    </TabPane>
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" lg="4">
              <Card >
                <CardBody >
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <a href='https://horizon-university.tn/' target='blanck'>
                     <img src ={imgHorizon} alt="horizon-logo"></img>
                     </a>
                    </TabPane>
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>

          </Row>
          </Container>

  );
} ;

export default PartnersItem;