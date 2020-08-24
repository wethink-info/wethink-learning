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
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card >
                <CardBody >
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                     <img src ={imgHope} alt="cms-logo"></img>
                    </TabPane>
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card >
                <CardBody >
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                     <img src ={imgLightenEduc} alt="cms-logo"></img>
                    </TabPane>
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card >
                <CardBody >
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                     <img src ={imgHorizon} alt="cms-logo"></img>
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