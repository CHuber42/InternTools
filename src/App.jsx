import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar';
import Faq from './components/faq/faq';
import Team from './components/team';
import Terms from './components/Fragments/terms'
import PrivacyPolicy from './components/Fragments/privacypolicy';
import PreRegister from './components/PreRegister/deprecated-preregister.jsx';
import FreeTrial from './components/freetrial.jsx';
import Banner from './components/Fragments/banner.jsx';
import Home from './components/Index.jsx';
import PricingPlans from './components/pricingplans.jsx';
import Contact from './components/contact.jsx';
import Gov from './components/PreRegister/gov.jsx';
import Edu from './components/PreRegister/edu.jsx';
import Smb from './components/PreRegister/smb.jsx';
import DashNavbar from './components/UserPortal/dashnav.jsx';
import DashboardSidebar from './components/UserPortal/dashboardsidebar.jsx';
import DashBoardMain from './components/UserPortal/dashboardmain.jsx';
import NLP from './components/Fragments/nlp';
import Registration from './components/Registration/registrationform.jsx';
import Login from './components/Registration/login.jsx';
import Teammanagement from './components/UserPortal/teammanagement';
import ML from './components/Fragments/ml.jsx';
import GrantSearch from './components/UserPortal/grantsearch.jsx'
// import DashMain from './components/UserPortal/dashboardmain.jsx';
import UserProfile from './components/UserPortal/userprofile.jsx';
import Help from './components/UserPortal/help.jsx';
import ProjectsPage from './components/UserPortal/projectspage.jsx';
import ReferralProgram from './components/UserPortal/referralprogram.jsx'
import Calendar from './components/UserPortal/Calendar/calendar.jsx'

function App(props) {
  return (
    <>
    <Router>
      <Switch>
      <Route path="/referralprogram">
          <DashNavbar />
          <DashboardSidebar/>
          <ReferralProgram/>
          <Footer/>
        </Route> 
      <Route path="/projectspage">
          <DashNavbar />
          <DashboardSidebar/>
          <ProjectsPage/>
          <Footer/>
        </Route> 
      <Route path="/help">
          <DashNavbar />
          <DashboardSidebar/>
          <Help/>
          <Footer/>
        </Route> 
      <Route path="/userprofile">
          <DashNavbar />
          <DashboardSidebar/>
          <UserProfile/>
          <Footer/>
        </Route> 
        <Route path="/nlp">
          <Navbar />
          <NLP />
          <Footer />
        </Route>
        <Route path="/ml">
          <Navbar />
          <ML />
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
          {/* <DashBoardMain /> */}
          <DashboardSidebar />
          <DashBoardMain userData={props.userData}/>
          <Footer />
        </Route>
        <Route path="/teammanagement">
          <DashNavbar />
          <DashboardSidebar/>
          <Teammanagement />
          <Footer />
        </Route>
        <Route path="/grantsearch">
          <DashNavbar />
          <DashboardSidebar/>
          <GrantSearch/>
          <Footer/>
        </Route> 
        <Route path="/calendar">
          <DashNavbar />
          <DashboardSidebar/>
          <Calendar/>
          <Footer/>
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

