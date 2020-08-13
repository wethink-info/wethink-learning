import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const ExpertsTitle = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 text-center">Learn from recognized experts !!</h1>
          <p className="lead text-center">
          WeThink Learning brings together highly qualified trainers who are passionate<br/>
          about personal growth to provide you with world-class learning experiences,<br/>
          both online and offline.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ExpertsTitle;