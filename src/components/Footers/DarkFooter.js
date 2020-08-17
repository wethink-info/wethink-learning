/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Container,
  NavLink,
 } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black" fixed="bottom" >
      <Container>
        <nav>
          <ul>
            <li>
            <NavLink href="/index">
              
                Wethink learning                
              
            </NavLink>
            </li>
            <li>
            <NavLink href="/AboutUs-page">
              
                About Us
              
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
             WeThink.info
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
