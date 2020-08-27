import React from 'react';
import { Container, Row, Col } from "reactstrap";
import ContactUsForm from 'components/ContactUs/contactUsForm';

function ContactUs() {
    return (

        <>
        <div className="section mt-5" style={{backgroundColor:'#edf9f8'}}>
        <Container className="text-center" >

            <Row className="justify-content-md-center">
            <Col lg="8" className="text-left">
                <ContactUsForm />
            </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}
export default ContactUs;
