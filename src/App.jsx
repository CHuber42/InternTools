import React from 'react';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Switch>
        {/* <Route path="/team">
          <p>This is the Team Route</p>
        </Route> */}
        <Route path="/">
          {/* <a href="/team">Link to Team</a> */}
          <Navbar />
          {/* Flask backend interaction */}
          {/* <p>My Token = {window.token}</p> */}
          <Footer />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;



