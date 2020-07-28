import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
//import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import SignUp from "./views/index-sections/SignUp";
import AboutUs from "./views/index-sections/AboutUs.js";
import Services from "./views/index-sections/Services";
import OurOffers from "./views/index-sections/Our Offers";
import IndexNavbar from "./components/Navbars/IndexNavbar.js";
ReactDOM.render(
  <BrowserRouter>
   <IndexNavbar/>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/SignUp-page"
          render={(props) => <SignUp {...props} />}
        />
        <Route
           path="/Services-page"
           render={(props) => <Services {...props} />}
        />
          <Route
           path="/OurOffers-page"
           render={(props) => <OurOffers {...props} />}
        />
          <Route
           path="/AboutUs-page"
           render={(props) => <AboutUs {...props} />}
        />
          <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);