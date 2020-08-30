import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { signout } from "../../store/actions/auth";
import './IndexNavbar.css';
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

// the hoc for translation
import { withNamespaces } from 'react-i18next';
import i18n from '../../Localization/i18n';

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
}
const IndexNavbar = ({ signout, auth, t }) => {
  const [navbarColor, setNavbarColor] = React.useState("");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      )
      {
        setNavbarColor("bg-info");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      )
      {
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
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
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
              E-learning platform<br />
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
                >
                  <i className="now-ui-icons "></i>
                  <p>{t('home')}</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>{t('platform')}</p>
                </DropdownToggle>
                <DropdownMenu data-background-color="black">
                  {!auth.isEmpty ?  // isEmpty means is Not Authenticated
                    <DropdownItem>
                      <NavLink href="/Contacts-page">
                        <i className="now-ui-icons files_box mr-1"></i>
                        {t('contacts')}
                      </NavLink>
                    </DropdownItem>
                    : null}
                  {/* <DropdownItem>
                  <NavLink href="/Services-page">
                    <i className="now-ui-icons business_briefcase-24 mr-1"></i>
                    {t('services')}
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/OurOffers-page">
                    <i className="now-ui-icons objects_spaceship mr-1"></i>
                    {t('our_offers')}
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/Academy-page">
                    <i className="now-ui-icons education_hat mr-1"></i>
                   {t('academy')}
                   </NavLink>
                  </DropdownItem>*/}
                  <DropdownItem >
                    <NavLink href="/ContactUs-page">
                      <i className="now-ui-icons ui-1_email-85 mr-1"></i>
                      {t('contact_us')}
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/AboutUs-page">
                      <i className="now-ui-icons travel_info mr-1"></i>
                      {t('about_us')}
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                {auth.isEmpty ?
                  <NavLink href="/login" >
                    <Button
                      className="btn-switch btn-auth"
                      color="info"
                      id="upgrade-to-pro"
                    >
                      {t('signin')}
                    </Button>
                  </NavLink>
                  : null}
                <UncontrolledTooltip target="#upgrade-to-pro">
                  You are Welcome
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                {!auth.isEmpty ?
                  <NavLink href="/logout" >
                    <Button
                      className="btn-switch btn-auth"
                      color="info"
                      id="upgrade-to-pro"
                      onClick={() => signout()}
                    >
                      Log Out
                    </Button>
                  </NavLink>
                  : null}
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons business_globe mr-1"></i>
                </DropdownToggle>
                <DropdownMenu data-background-color="black" >
                  <DropdownItem onClick={() => changeLanguage('en')}>
                    <i href="#">English</i>
                  </DropdownItem>
                  <DropdownItem onClick={() => changeLanguage('fr')}>
                    <i href="#">Français</i>
                  </DropdownItem>
                  <DropdownItem onClick={() => changeLanguage('ar')}>
                    <i href="#">العربية </i>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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
)(withNamespaces()(IndexNavbar));
