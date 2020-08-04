import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function Services () {
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
      <div className="page-header" filter-color="blue"
      style={{
        backgroundImage: "url(" + require("assets/img/imgmain.jpg") + ")",
      }}
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/imgmain.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
            <Container>
              
                <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/logo.png")}
                ></img>
                 <h5 className="description"> </h5>

                <h1 className=" indexHeader">WeThink Learning</h1>
                <h2 >
                 </h2>
            </Container>
          </div>
      );
};
    export default Services;