/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import './indexHeader.css';
// the hoc for translation
import { withNamespaces } from 'react-i18next';


const  IndexHeader = ({ t }) => {
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
        backgroundImage: "url(" + require("assets/img/elearning2.png") + ")",
        backgroundRepeat: 'repeat-x'
      }}
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/elearning2.png") + ")",
            backgroundRepeat: 'repeat-x'
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand" style={{ marginTop:'320px'}}>
        <h1 className=" indexHeader">{t('home:wethinkPlatform')}</h1>
            <h2 >
            {t('home:wethinkDescription')}
             </h2>
          </div>
          
        
        </Container>
      </div>
    </>
  );
}

export default withNamespaces()(IndexHeader);
