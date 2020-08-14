import React from 'react';
import {Route, Switch, Redirect } from "react-router-dom";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
//import LandingPage from "views/examples/LandingPage.js";
import AboutUs from "./views/index-sections/AboutUs.js";
import Services from "./views/index-sections/Services";
import OurOffers from "./views/index-sections/Our Offers";
import IndexNavbar from "./components/Navbars/IndexNavbar.js";
//import Blog from "./views/index-sections/Blog.js";
import DarkFooter from "components/Footers/DarkFooter";
//import ContatctUs from "views/index-sections/ContatctUs";
import Academy from "views/index-sections/Academy/Academy";
import Login from 'components/Login';
import ContatctUs from 'views/index-sections/ContatctUs';
import Contacts from 'views/index-sections/Contacts.js';

const App = () =>  {
        let routes = (
            <>
                <IndexNavbar/>
                <Switch>
                    <Route exact 
                    path="/home"
                    render={(props) => <Index {...props} />}
                    />
                    <Route  exact
                      path="/Contacts-page"
                      render={(props) => <Contacts {...props} />}
                      /> 
                    <Route exact
                    path="/Services-page"
                    render={(props) => <Services {...props} />}
                    />
                    <Route exact
                    path="/OurOffers-page"
                    render={(props) => <OurOffers {...props} />}
                    />
                    <Route exact
                    path="/Academy-page"
                    render={(props) => <Academy {...props} />}
                    />
                    <Route exact
                    path="/AboutUs-page"
                    render={(props) => <AboutUs {...props} />}
                    />
                    {/* <Route exact
                    path="/Blog-page"
                    render={(props) => <Blog {...props} />}
                    /> */}
                    <Route exact
                    path="/ContactUs-page"
                    render={(props) => <ContatctUs {...props} />}
                    />
                    <Route exact
                    path="/login"
                    render={(props) => <Login {...props} />}
                    />
                    {/* <Route exact
                    path="/landing-page"
                    render={(props) => <LandingPage {...props} />}
                    /> */}
                    
                    <Redirect to="/home" />
                    <Redirect from="/" to="/home" />
                </Switch>
                <DarkFooter />
            </>
        )
        return(
          <div>
          {routes}
          
          </div>
        )
    }

export default App;
