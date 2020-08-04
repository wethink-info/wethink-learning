import React from "react";

// reactstrap components
import { 
  Container,
  Col,
  Row,
 } from "reactstrap";
// core components
import '../../components/Headers/indexHeader.css';
 
function Blog () {
/*     let pageHeader = React.createRef();

    React.useEffect(() => {
      if (window.innerWidth > 991) {
        const updateScroll = () => {
          let windowScrollTop = window.pageYOffset / 3;
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        };
        window.addEventListener("scroll", updateScroll);
        return function cleanup() {
          window.removeEventListener("scroll", updateScroll);
        };
      }
    }); */
  
    return (
      <>
      <div className="content-center brand">
      <img
        alt="..."
        className="n-logo"
        src={require("assets/img/logo.png")}
      ></img>
      <h1 className=" indexHeader">E-learning platform</h1>
      </div>
       <div className="section">
       <Container className="text-align">
         <Row className="justify-content-md-center">
           <Col lg="8" md="12">
             <h2 className="title">Blog</h2>
             <h5 className="description">
               I Organizations, including enterprises, startups, and academic institutions are 
          looking for robust learning management platform to facilitate training experience. 
          Best LMS platforms used worldwide are intuitive,easy to navigate, 
          and customizable as per the bespoke requirements of all.
             </h5>
             <h5 className="description">
             The Learning Management System (LMS) and Virtual Learning Environment (VLE) have become 
            increasingly common in education.
               </h5>
             <h5 className="description">
             While there is a time and place for face-to-face learning, increasingly 
            learning and courses are being conducted through digital channels. Not only
            can this be cheaper and easier to manage for businesses,
            but for educators it also means being able to reach people from a distance. 
             </h5>
            
           </Col>
         </Row>
       </Container>
     </div>
    
    </>
    );
  }
  
export default Blog;