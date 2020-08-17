import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { Container, Row} from "reactstrap";

const DataNow = Date(Date.now()).toString();
    
const Logout = () => {
return (
    <Container className="text-align mt-5" style={{height:'520px'}}>
          <Row className="justify-content-md-center">
    <div className="section">
        <div className="text-center mt-5">
            <h3>You are successfully Logged Out</h3>
            <p>Happy to see you on WeThink Learning Platform, Goodbye</p>
       </div>  
       <div className="blockquote-footer text-center " >
        
         <h4><Moment>{DataNow}</Moment></h4>
        
        </div> 
    </div>
    </Row>
    </Container>

)
}
export default Logout;