import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import courseLogo from '../../../assets/img/ryan.jpg';

const CardComponentExpert = (props) => {
  return (
    <div>
      <Card >
        <CardImg top width="100%" src= {courseLogo} alt="Course logo"/>
        <CardBody d-flex flex-column >
          <div text-center>
          <CardTitle >Expert Name</CardTitle>
          <CardSubtitle>expert degree</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponentExpert;