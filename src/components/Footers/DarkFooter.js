/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                target="_blank"
              >
                E-learning Horizon
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.horizon-university.tn/"
            target="_blank"
          >
            Horizon University
          </a>
          . Coded by{" "}
          <a
            href="https://www.wethink.info/"
            target="_blank"
          >
            Wethink info
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
