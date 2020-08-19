import React from 'react';
import image from "../img/guf_logo.png";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from '../Home';

const headerStyle = {
    backgroundColor: '#959595',
    height: '10vh'
  };
  
const logoStyle = {
    height: '75%',
    paddingTop: '.6%',
    paddingLeft: '.8%'
}

const navLinksStyle = {
    color: 'white'
}

function Navbar() {
    return(
        <>
        <Router>
            <div style={headerStyle}>
                <img src={image} alt="Logo" style={logoStyle} />
                <Link style={navLinksStyle} to="/home">Home</Link>
                <Link style={navLinksStyle} to="/team">Our Team</Link>
                <Link style={navLinksStyle} to="/pricingplans">Pricing & Plans</Link>
                <Link style={navLinksStyle} to="/contact">Contact</Link>
                <Link style={navLinksStyle} to="/freetrial">7-Day Free Trial</Link>
                <Switch>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/team.html'>
                        <h2>Team</h2>
                    </Route>
                    <Route path='/pricingplans'>
                        <h2>Price Plan</h2>
                    </Route>
                    <Route path="/freetrial">
                        <h2>Free Trial</h2>
                    </Route>
                    <Route path='/contact'>
                        <h2>Contact</h2>
                    </Route>
                    <Route path='/'>
                        <h2>Home</h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    </>
    )
}

  export default Navbar;