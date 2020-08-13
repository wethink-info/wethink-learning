import React from 'react';

import { CardGroup } from 'reactstrap';
import './Academy.css';
import CardComponent from './CardComponentCoure';

const CardCourses = (props) => {
  return (
    <>
      <CardGroup class="row">
        <div class="col"><CardComponent/></div>
        <div class="col"><CardComponent/></div>
        <div class="col"><CardComponent/></div>
      </CardGroup>

      <CardGroup class="row">
        <div class="col"><CardComponent/></div>
        <div class="col"><CardComponent/></div>
        <div class="col"><CardComponent/></div>
      </CardGroup>
    
      </>
  );
};

export default CardCourses;

  