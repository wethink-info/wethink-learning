/*eslint-disable*/
import React from "react";
import { withNamespaces } from 'react-i18next';
// reactstrap components
import {
  Container,
  NavLink,
 } from "reactstrap";
import './DarkFooter.css';

function DarkFooter({ t }) {
  return (
    <footer className="footer minFooter" data-background-color="black" fixed="bottom" >
      <Container>
        <nav>
          <ul>
            <li>
            <NavLink href="/index">
              
                {t('footer:w_learning')}               
              
            </NavLink>
            </li>
            <li>
            <NavLink href="/AboutUs-page">
              
                {t('footer:about_us')}
              
            </NavLink>
            </li>
            
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()},
          
           {/* Designed by{" "}
          <a
            href="https://www.horizon-university.tn/"
            target="_blank"
          >
            E-Learning platform
          </a>
          . Coded by{" "} */}
          <a
            href="https://www.wethink.info/"
            target="_blank"
          >
             {t('footer:w_info')}
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default withNamespaces()(DarkFooter);
