import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import firebase from '../../services/firebase';

export default function ContactUsForm () {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmit, setisSubmit] = useState(true);

const handleOnChangeName = (e) => {
    setFirstName(e.target.value)
  };
  const handleOnChangeLastName = (e) => {
    setLastName(e.target.value)
  };
  const handleOnChangeemail = (e) => {
    setEmail(e.target.value)
  };
  const handleOnChangeNumber = (e) => {
    setPhoneNumber(e.target.value)
  };
  const handleOnChangeMessage = (e) => {
    setMessage(e.target.value)
  };

  const createContact = () => {
    const contactsRef = firebase.database().ref('contacts');
    const contact = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    };

    contactsRef.push(contact);
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setMessage('');
    setisSubmit(false)
  };
    return (
      <Container style={{backgroundColor:'#edf9f8'}}>
          {isSubmit ?
                <Form >
                <Row>
                <div class="container-fluid d-flex col-9">
                <h3> Please contact us for any reason. our staff can help you as soon as possible</h3>
                </div>
                </Row>
                <Row>
                  <Col>
                  <FormGroup>
                    <Label >First Name</Label>
                    <Input type="text" name="name" value={firstName} placeholder="your First Name" onChange={handleOnChangeName} required/>
                  </FormGroup>
                  </Col>
                  <Col>
                  <FormGroup>
                    <Label >Last Name</Label>
                    <Input type="tex" name="lastName" value={lastName} placeholder="your Last Name" onChange={handleOnChangeLastName} required/>
                  </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <FormGroup>
                  <Label >Email</Label>
                  <Input type="email" name="email" value={email} placeholder="with a placeholder" onChange={handleOnChangeemail} required/>
                </FormGroup>
                  </Col>
                  <Col>
                  <FormGroup>
                  <Label >Phone Number</Label>
                  <Input type="text" name="number" value={phoneNumber} placeholder="phoneNumber placeholder" onChange={handleOnChangeNumber} required/>
                </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label >Message</Label>
                  <Input type="textarea" name="message" value={message} onChange={handleOnChangeMessage} required/>
                </FormGroup>
                <Button onClick={createContact}>Submit</Button>
              </Form> : 
              <div class="container-fluid d-flex  mt-5 mb-5">
                <h2 style={{color:'#96b796'}}>
                  Thank you for contacting us. Your message was sent and we will reach out to you shortly!
                </h2> 
              </div>
  
        }
      </Container>
      
    );
}