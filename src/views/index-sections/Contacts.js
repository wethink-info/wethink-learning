import React, { Component } from "react";
 
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import firebase from '../../services/firebase';
import ContactList from "components/ContactList";
import requireAuth from "components/hoc/requireAuth";

// core components
class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
        list_emails: [],
        
      };
    }
    componentDidMount(){
        const contactsRef = firebase.database().ref('contacts/');
        contactsRef.on('value', (snapshot) => {
            let emails = snapshot.val();
            console.log(emails)
            let newstate = [];
          
          for(let email in emails) {
            newstate.push({
              id : email,
              firstName: emails[email].firstName,
              lastName: emails[email].lastName,
              email: emails[email].email,
              phoneNumber:emails[email].phoneNumber,
              message: emails[email].message

            });
          }
          this.setState({list_emails: newstate})
        });
    }

    render(){ 
        return (
            <>
            <div className="section">
                <Container className="text-align">
                <Row className="justify-content-md-center">
                    <Col lg="8" md="12">
                    <h2 className="title">Our Received E-mails</h2>  
                    </Col>
                </Row>
                <Row>
                <div>
                        {this.state.list_emails.map(email => (
                            <ContactList
                            key={email.id}
                            firstName={email.firstName}
                            lastName={email.lastName}
                            email={email.email}
                            phoneNumber={email.phoneNumber}
                            message={email.message}
                              />
                        )) }           
                </div>
                </Row>
                </Container>
            </div>

            </>
  );
}
}
export default requireAuth(Contacts);
