import React from 'react';
import AcademyHeader from './AcademyHeader';
import CardCours from './AcademyMain';
import { Container } from 'reactstrap';
import OurCoursTitle from './OurCoursTitle';
export default function (){
  return(
      <>
        <AcademyHeader/>
        <Container>
        <OurCoursTitle />
          <CardCours/>
          <CardCours/>
          <CardCours/>
        </Container>
        
      </>
    )
}