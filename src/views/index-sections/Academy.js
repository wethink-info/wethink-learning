
import React from "react";

// reactstrap components
import { 
  Container,
  Col,
  Row,
 } from "reactstrap";
// core components
import '../../components/Headers/indexHeader.css';

 import IndexHeader from "components/Headers/IndexHeader";
 
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
        backgroundImage: "url(" + require("assets/img/letter-blocks-247819.jpg") + ")",
      }}
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/letter-blocks-247819.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand"
          >
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/logo.png")}
            ></img>
            <h1 className=" indexHeader">WeThink Learning</h1>
            <h2 >
            Highly Qualified Trainers
             </h2>
          </div>
        </Container>
      </div>
    </>
  );
        }
        export default Academy;