import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { signout } from "../../store/actions/auth";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import WLearningLogo from '../Logo/logo.jsx';

const IndexNavbar = ({ signout }) => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
            >
            <NavLink href="/home">
            <WLearningLogo />
            </NavLink>           
             </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
            E-learning platform<br/>
              By WeThink info
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
             <NavItem>
                  <NavLink
                      href="/home"
                      /* onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("download-section")
                          .scrollIntoView();
                      }} */
                      >
                      <i className="now-ui-icons "></i>
                      <p>Home</p>
                  </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>platform</p>
                </DropdownToggle>
                <DropdownMenu data-background-color="black">
                  <DropdownItem>
                    
                    <NavLink href="/Contacts-page">
                    <i className="now-ui-icons files_box mr-1"></i>
                    Contacts
                    </NavLink>
                    
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/Services-page">
                    <i className="now-ui-icons business_briefcase-24 mr-1"></i>
                    Services
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/OurOffers-page">
                    <i className="now-ui-icons objects_spaceship mr-1"></i>
                    Our Offers
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/Academy-page">
                    <i className="now-ui-icons education_hat mr-1"></i>
                   Academy
                   </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/AboutUs-page">
                    <i className="now-ui-icons travel_info mr-1"></i>
                   About Us
                   </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/Blog-page">
                    <i className="now-ui-icons travel_info mr-1"></i>
                   Blog
                   </NavLink>
                  </DropdownItem>
                  <DropdownItem >
                    <NavLink href="/ContactUs-page">
                      <i className="now-ui-icons ui-1_email-85 mr-1"></i>
                    Contact WeThink
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/login">
                <Button
                  className="btn-switch"
                  color="info"
                  id="upgrade-to-pro"
                >
                  <i className="now-ui-icons  mr-1"></i>
                  Sign IN
                </Button> 
                <Button className="btn-switch" onClick={() => signout()}>
                  Log out
                </Button>
                </NavLink>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  You are Welcome 
                </UncontrolledTooltip>
              </NavItem>
        
               <NavItem>
                <NavLink
                  href="#"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/GlobalService5"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signout: () => dispatch(signout())
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(IndexNavbar);
