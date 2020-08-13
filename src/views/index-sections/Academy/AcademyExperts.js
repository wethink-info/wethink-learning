import React from 'react';

import { CardGroup } from 'reactstrap';
import './Academy.css';
import CardComponentExpert from './CardComponentExpert';

const CardExperts = (props) => {
  return (
    <>
      <CardGroup class="row">
        
        <div class="col"><CardComponentExpert /></div>
        <div class="col"><CardComponentExpert/></div>
        <div class="col"><CardComponentExpert/></div>
        
      </CardGroup>
      <CardGroup class="row">
        
        <div class="col"><CardComponentExpert/></div>
        <div class="col"><CardComponentExpert/></div>
        <div class="col"><CardComponentExpert/></div>
      
        </CardGroup>
        <CardGroup class="row">
            
        <div class="col"><CardComponentExpert/></div>
        <div class="col"><CardComponentExpert/></div>
        <div class="col"><CardComponentExpert/></div>
        
        </CardGroup>
      </>
  );
};

export default CardExperts;

  