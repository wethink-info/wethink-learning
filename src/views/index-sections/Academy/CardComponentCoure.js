import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import courseLogo from '../../../assets/img/course-logo.jpg';

const CardComponentCourse = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src= {courseLogo} alt="Course logo"/>
        <CardBody d-flex flex-column>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button mt-auto align-self-end>View</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponentCourse;