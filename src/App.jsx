import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar';

import Faq from './components/faq';
import Team from './components/team';
import Terms from './components/terms'
import PrivacyPolicy from './components/privacypolicy';
import PreRegister from './components/PreRegister/preregister.jsx';
import FreeTrial from './components/freetrial.jsx';
import Banner from './components/banner.jsx';
import Home from './components/Index.jsx';
import PricingPlans from './components/pricingplans.jsx';
import Contact from './components/contact.jsx';
import Gov from './components/PreRegister/gov.jsx';
import Edu from './components/PreRegister/edu.jsx';
import Smb from './components/PreRegister/smb.jsx';
import DashNavbar from './components/Dashboard/dashnav.jsx';
// import DashboardSidebar from './components/Dashboard/dashboardsidebar.jsx';
import DashMain from './components/Dashboard/dashboardmain.jsx';
import NLP from './components/nlp';
import Registration from './components/Registration/registrationform.jsx';
import Login from './components/Registration/login.jsx';


function App(props) {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/nlp">
          <Navbar />
          <NLP />
          <Footer />
        </Route>
        <Route path="/privacypolicy">
          <Navbar />
          <PrivacyPolicy />
          <Footer />
        </Route>
        <Route path="/terms">
          <Navbar />
          <Terms />
          <Footer />
        </Route>
        <Route path="/faq">
          <Navbar />
          <Faq />
          <Footer />
        </Route>
        <Route path="/team">
          <Navbar />
          <Banner />
          <Team />
          <Footer />
        </Route>
        <Route path="/edu">
          <Navbar />
          <Banner />
          <Edu />
          <Footer />
        </Route>
        <Route path="/smb">
          <Navbar />
          <Banner />
          <Smb />
          <Footer />
        </Route>
        <Route path="/gov">
          <Navbar />
          <Banner />
          <Gov />
          <Footer />
        </Route>
        <Route path='/preregister'>
          <Navbar />
          <Banner />
          <PreRegister/>
          <Footer />
        </Route>
        <Route path="/pricingplans">
          <Navbar />
          <Banner />
          <PricingPlans />
          <Footer />
        </Route>
        <Route path="/contact">
          <Navbar />
          <Banner />
          <Contact />
          <Footer />
        </Route>
        <Route path="/freetrial">
          <Navbar />
          <Banner />
          <FreeTrial />
          <Footer />
        </Route>
        <Route path="/register">
          <Navbar/>
          <Registration />
          <Footer />
        </Route>
        <Route path="/login">
          <Navbar/>
          <Login />
          <Footer />
        </Route>
        <Route path="/Dashboard">
          <DashNavbar />
          <DashMain />
          {/* <DashMain userData={props.userData}/> */}
        </Route>
        <Route path="/">
          <Navbar />
          <Banner />
          <Home />
          <Footer />
        </Route> 
      </Switch>
    </Router>
    </>
  );
}

export default App;

