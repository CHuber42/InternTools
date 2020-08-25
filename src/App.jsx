import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar';
import Faq from './components/faq';


import Terms from './components/terms'
import PrivacyPolicy from './components/privacypolicy';
import WhatIsNLP from './components/nlp';

function App() {
  return (
    <>
    <Router>
      <Switch>
        {/* <Route path="/SomeForm">
          <p>This is the Team Route</p>
        </Route> */}
        <Route path="/">
          {/* <a href="/team">Link to Team</a> */}
          {/* <Navbar /> */}
          <Faq />
          {/* Flask backend interaction */}
          {/* <p>My Token = {window.token}</p> */}
          {/* <Footer /> */}
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;

