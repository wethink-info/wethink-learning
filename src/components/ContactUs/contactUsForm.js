import React, { useState } from 'react';
import { withNamespaces } from 'react-i18next';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container, Jumbotron } from 'reactstrap';
import firebase from '../../services/firebase';
import './styles.css';

function ContactUsForm ({ t }) {
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
      <Container >
          {isSubmit ?
                <Form className="formBox">
                <Row>
                <div class="container-fluid d-flex col-9">
                <h3> {t('contactUs:title_form')}</h3>
                </div>
                </Row>
                <Row>
                  <Col>
                  <FormGroup>
                    <Label >{t('contactUs:firstName')}</Label>
                    <Input type="text" name="name" value={firstName} placeholder={t('contactUs:firstName_placeholder')} onChange={handleOnChangeName} required/>
                  </FormGroup>
                  </Col>
                  <Col>
                  <FormGroup>
                    <Label >{t('contactUs:lastName')}</Label>
                    <Input type="tex" name="lastName" value={lastName} placeholder={t('contactUs:lastName_placeholder')} onChange={handleOnChangeLastName} required/>
                  </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <FormGroup>
                  <Label >{t('contactUs:email')}</Label>
                  <Input type="email" name="email" value={email} placeholder={t('contactUs:email_placeholder')} onChange={handleOnChangeemail} required/>
                </FormGroup>
                  </Col>
                  <Col>
                  <FormGroup>
                  <Label >{t('contactUs:phone')}</Label>
                  <Input type="text" name="number" value={phoneNumber} placeholder={t('contactUs:phone_placeholder')} onChange={handleOnChangeNumber} required/>
                </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label >{t('contactUs:message')}</Label>
                  <Input type="textarea" name="message" value={message} placeholder={t('contactUs:message_placeholder')} onChange={handleOnChangeMessage} required/>
                </FormGroup>
                <Button onClick={createContact}>{t('contactUs:button_submit')}</Button>
              </Form> : 
              <Jumbotron>
                <div class="container-fluid d-flex text-center mt-5 mb-5">
                  <h4 style={{color:'#96b796'}}>
                  {t('contactUs:confirm_msg')}
                  </h4> 
                </div>
              </Jumbotron>
        }
      </Container>
      
    );
}
export default withNamespaces()(ContactUsForm);