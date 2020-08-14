import React from 'react';
import {
    Row,Col
} from 'reactstrap';
import './Partners.styles.scss';
import imgHope from "assets/img/hope.png";
import imgLightenEduc from "assets/img/enlightenEducation.png";
import imgHorizon from "assets/img/horizonUniversity.png";

function PartnersItem () { 
  return (
        
          <Row >
            <Col className="menu-item" xs={6} md={3} >
                <img src={imgHope} alt="img"/>
            </Col>
            <Col className="menu-item" xs={6} md={3}>
                <img src={imgLightenEduc}  alt="img"/>
            </Col>
            <Col className="menu-item" xs={6} md={4}>
                <img src={imgHorizon}  alt="img"/>
            </Col>
          </Row>
        
  );
} ;

export default PartnersItem;