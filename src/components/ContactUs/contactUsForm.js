import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import firebase from '../../services/firebase';

export default function ContactUsForm () {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

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
  };
    return (
      <Container style={{backgroundColor:'#edf9f8'}}>
        <Form >
        <Row>
          <Col>
          <FormGroup>
            <Label >First Name</Label>
            <Input type="text" name="name" value={firstName} placeholder="your First Name" onChange={handleOnChangeName} />
          </FormGroup>
          </Col>
          <Col>
          <FormGroup>
            <Label >Last Name</Label>
            <Input type="tex" name="lastName" value={lastName} placeholder="your Last Name" onChange={handleOnChangeLastName} />
          </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
          <FormGroup>
          <Label >Email</Label>
          <Input type="email" name="email" value={email} placeholder="with a placeholder" onChange={handleOnChangeemail} />
        </FormGroup>
          </Col>
          <Col>
          <FormGroup>
          <Label >Phone Number</Label>
          <Input type="text" name="number" value={phoneNumber} placeholder="phoneNumber placeholder" onChange={handleOnChangeNumber} />
        </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label >Message</Label>
          <Input type="textarea" name="message" value={message} onChange={handleOnChangeMessage} />
        </FormGroup>
        <Button onClick={createContact}>Submit</Button>
      </Form>
      </Container>
      
    );
}