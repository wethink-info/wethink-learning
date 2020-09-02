import React, { useState } from 'react';
import { withNamespaces } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Row, Col, Container, Jumbotron } from 'reactstrap';
import firebase from '../../services/firebase';
import './contactsusformHooks.css';

function ContactUsFormHook({ t }) {
  const { register, handleSubmit, errors } = useForm();
  const [is_Submit, set_SubmitEvent] = useState(false);
  const contactsRef = firebase.database().ref('contacts');

  const onSubmit = (data) => {
    try {
      contactsRef.push(data);
      set_SubmitEvent(true);
    }
    catch(error) {
      errors(true);
    }
  }

  return (
    <Container >
      {!is_Submit ?
      <Form className="form_group" onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <div class="container-fluid title-h2 d-flex col-9">
          <h3> {t('contactUs:title_form')}</h3>
        </div>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <input className="form__input" type="text" placeholder={t('contactUs:firstName_placeholder')} name="firstName" ref={register({required: true, max: 20, min: 3, maxLength: 80})} />
            {errors.firstName && <p id="required">This field is required</p>}
            <label className="form__label">{t('contactUs:firstName')}</label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <input className="form__input" type="text" placeholder={t('contactUs:lastName_placeholder')} name="lastName" ref={register({required: true, maxLength: 100})} />
            {errors.lastName && <p id="required">This field is required</p>}
            <label className="form__label">{t('contactUs:lastName')}</label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <input className="form__input" type="text" placeholder={t('contactUs:email_placeholder')} name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
            {errors.Email && <p id="required">This field is required</p>}
            <label className="form__label">{t('contactUs:email')}</label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <input className="form__input" type="tel" placeholder={t('contactUs:phone_placeholder')} name="mobileNumber" ref={register({required: true, max: 20, min: 8, maxLength: 12 })} />
            {errors.mobileNumber && <p id="required">This field is required</p>}
            <label className="form__label">{t('contactUs:phone')}</label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <textarea className="form__input" type="textarea" placeholder={t('contactUs:message_placeholder')} name="message" ref={register({maxLength: 500})} />
            {errors.message && <p id="required">This field is required</p>}
            <label className="form__label"> {t('contactUs:message')} </label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
        <button className="button" type="Submit" ><span>{t('contactUs:button_submit')}</span></button>
        </Col>
      </Row>
    </Form>: 
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

export default  withNamespaces()(ContactUsFormHook);