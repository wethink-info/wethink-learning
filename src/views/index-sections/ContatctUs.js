import React from 'react';
import { Container, Row, Col } from "reactstrap";

function ContactUs() {
    return (

        <>
        <div className="section mt-5">
        <Container className="text-center">
            <Row className="justify-content-md-center">
            <Col lg="8" md="12">
            <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSex0idQ8h3WpcYrRPxcSfh3-8i5cUiiPK9Ap9ef2TaXJdCwTg/viewform?embedded=true" 
                    width="640" 
                    height="747" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0"
                    title= "title">Loading…</iframe>

            </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}
export default ContactUs;
