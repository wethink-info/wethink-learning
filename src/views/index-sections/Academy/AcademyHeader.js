
import React from "react";

// reactstrap components
import { 
  Container,
  } from "reactstrap";
// core components
import '../../../components/Headers/indexHeader.css';
import './Academy.css';
 
function Academy () {

    let pageHeader = React.createRef();

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
    });
return (
    <>
    
      <div className="page-header" filter-color="blue"
        style={{
          backgroundImage: "url(" + require("assets/img/headeracademy.jpg") + ")",
        }}
      > 
      <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/headeracademy.jpg") + ")",
            height:"100px"
          }}
          ref={pageHeader}
        ></div>
        <Container >
         
            <header className="headerTitle">
            <h2 >
            Highly Qualified Trainers
            </h2>
            <h3>
            To provide you with world-class educational experiences
            </h3>
            </header> 
        </Container>
      </div>
    </>
  );
}
export default Academy;