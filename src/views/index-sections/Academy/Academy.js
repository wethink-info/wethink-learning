import React from 'react';
import AcademyHeader from './AcademyHeader';
import CardCours from './AcademyCourses';
import { Container } from 'reactstrap';
import OurCoursTitle from './OurCoursTitle';
import ExpertsTitle from './ExpertsTitle';
import CardExperts from './AcademyExperts';

export default function (){
  return(
      <>
        <AcademyHeader/>
        <Container>
            <OurCoursTitle />

            <CardCours/>

            <ExpertsTitle/>
            <CardExperts/>
        </Container>
        
      </>
    )
}