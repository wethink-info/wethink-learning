import React from "react";
import {FcApproval, FcBullish, FcCustomerSupport  } from 'react-icons/fc';
import { withNamespaces } from 'react-i18next';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import cmsLogo from "../../assets/img/cms.svg";
import lmsLogo from "../../assets/img/lms.svg";

// core components
const styleicons = {
  width : '50px',
  height: '50px'
}
function Tabs({ t }) {
  const [iconPills, setIconPills] = React.useState("1");
  //const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
              {/* <p className="category"> title option features </p> */}
              <Card >
                <CardBody >
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                     <img src ={lmsLogo} alt="cms-logo"></img>
                    </TabPane>
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
                  <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                    
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                       
                        <i className="now-ui-icons "></i>
                        {t('tabs:lms_title')}
                      </NavLink>
                    </NavItem>
                   
                  </Nav>
                </CardHeader>
                <p style={{marginTop:'15px'}}>
                      {t('tabs:lms_paragraph_desc')}
                </p>
                  </Col> 
                </Row>
                <Row>
                <Col className="ml-auto mr-auto" md="10" xl="6">
                <div> 
                      <CardHeader>
                        <Nav className="justify-content-center" role="tablist" tabs>
                          <NavItem>
                            <NavLink
                              className={iconPills === "1" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setIconPills("1");
                              }}
                            >
                              <i className="now-ui-icons "></i>
                              {t('tabs:cms_title')}
                            </NavLink>
                          </NavItem>   
                        </Nav>
                      </CardHeader>
                      <p style={{marginTop:'15px'}}>
                        {t('tabs:cms_paragraph_desc')}
                      </p>
                    </div>
                  </Col>
                  <Col className="ml-auto mr-auto" md="10" xl="6">
                    <Card>
                      <CardBody>
                        <TabContent
                          className="text-center"
                          activeTab={"iconPills" + iconPills}
                        >
                          <TabPane tabId="iconPills1">
                          <img src ={cmsLogo} alt="cms-logo"></img>
                          </TabPane>
                          
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                <Col className="ml-auto mr-auto" md="10" xl="4" shadow-none>
                    <Card>
                      <CardHeader>
                        <Nav className="justify-content-center" role="tablist" tabs>
                          <NavItem>
                            <NavLink
                              className={iconPills === "3" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setIconPills("1");
                              }}
                            >
                              <FcCustomerSupport style={styleicons}/>
                              <i className="now-ui-icons"></i>
                              {t('tabs:visio_title')}
                            </NavLink>
                          </NavItem>
                          
                        </Nav>
                      </CardHeader>
                      <CardBody>
                        <TabContent
                          className="text-center"
                          activeTab={"iconPills" + iconPills}
                        >
                          <TabPane tabId="iconPills1">
                            <p>
                            {t('tabs:visio_paragraph_desc')}
                            </p>
                          </TabPane>
                          
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="ml-auto mr-auto" md="10" xl="4">
                    <Card>
                      <CardHeader>
                        <Nav className="justify-content-center" role="tablist" tabs>
                          <NavItem>
                          
                            <NavLink
                              className={iconPills === "4" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setIconPills("1");
                              }}
                            >
                            <FcBullish style={styleicons}/>
                              <i className="now-ui-icons "></i>
                              {t('tabs:scalability_title')}
                            </NavLink>
                          </NavItem>
                        
                        </Nav>
                      </CardHeader>
                      <CardBody>
                        <TabContent
                          className="text-center"
                          activeTab={"iconPills" + iconPills}
                        >
                          <TabPane tabId="iconPills1">
                            <p>
                              {t('tabs:scalability_paragraph_desc')}
                            </p>
                          </TabPane>
                          
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="ml-auto mr-auto" md="10" xl="4">
                    <Card>
                      <CardHeader>
                        <Nav className="justify-content-center" role="tablist" tabs>
                          <NavItem>
                            <NavLink
                              className={iconPills === "5" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setIconPills("1");
                              }}
                            >
                              <FcApproval style={styleicons}/>
                              <i className="now-ui-icons"></i>
                              {t('tabs:availability_title')}
                            </NavLink>
                          </NavItem>
                          
                        </Nav>
                      </CardHeader>
                      <CardBody>
                        <TabContent
                          className="text-center"
                          activeTab={"iconPills" + iconPills}
                        >
                          <TabPane tabId="iconPills1">
                            <p>
                              {t('tabs:availability_paragraph_desc')}
                            </p>
                          </TabPane>
                          
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                  
                </Row>
              </Container>
      </div>
    </>
  );
}

export default withNamespaces()(Tabs);
