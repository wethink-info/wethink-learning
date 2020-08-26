import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import firebase from '../../../services/firebase';

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
      message,
      complete: false,
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
  



/*  constructor(props) {
    super(props);
    this.state = {
      
        firstName: 'ttttttt',
        lastName: '',
        email: '',
        phoneNumber: '',
        adress: '',
        message:''
        
      
    };
    this.submitData = this.submitData.bind(this);
    this.inputData = this.inputData.bind(this);
  }
  componentDidMount() {
    firebase
      .database()
      .ref(`/contacts`)
      .on('value', snap => console.log('from db', snap.val()));
  }
  submitData(event) {
    event.preventDefault();
    firebase
      .database()
      .ref(`/contacts`)
      .push({ 
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        adress: this.state.adress,
        message: this.state.message
      })
      .catch(error => console.log(error));
  }
  inputData(event) {
    const firstName = this.refs.input1.value;
    const lastName = this.refs.input2.value;
    const email = this.refs.input3.value;
    const phoneNumber = this.refs.input4.value;
    const adress = this.refs.input5.value;
    const message= this.refs.input6.value;

    this.setState({ firstName, lastName, email, phoneNumber, message, adress });
  }
   */