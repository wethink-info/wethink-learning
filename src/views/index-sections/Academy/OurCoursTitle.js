import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const OurCoursTitle = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 text-center">Our Successful Courses</h1>
          <p className="lead text-center">
          All courses are certified by Wethink Learning,
          as well as by the Expert Trainer who provides online training.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default OurCoursTitle;