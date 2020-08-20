import React, {Component} from 'react';
import image from "../img/guf_logo.png";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from './Index';
import Contact from './contact'
import FreeTrial from './freetrial'
import PricingPlans from './pricingplans';
import Team from './team';

const headerStyle = {
    backgroundColor: '#959595',
    flexWrap: "nowrap"
  };
  
const logoStyle = {
    maxHeight: '8.2vh',
    height: '100%'
}

const navLinksStyle = {
    color: '#ffffff',
}

const btnLogin = {
    display: "inline-block",
    backgroundColor: '#7598cc',
    color: 'white',
    width: '10vw',
    height: '100%',
    border: '.1rem solid white',
    borderRadius: '5px'
}

const searchStyle = {
    borderRadius: '5px',
    height: '100%',
    width: '100%'
}

const magGlassStyle = {
    height: '100%',
    borderRadius: '5px',
    marginLeft: '-15%',
    border: 'none',
}

function someFunction(){
    return;
}

class Navbar extends Component {
    render(){
    return(
        <>
        <Router>
            <div style={headerStyle} className="navbar">
                <div className="navbar-brand">
                  <img src={image} alt="Logo" style={logoStyle} />
                </div>
                <div className="nav-item">
                    <Link style={navLinksStyle} to="/">Home</Link>
                </div>
                <div className="nav-item">
                    <Link style={navLinksStyle} to="/team">Our Team</Link>
                </div>
                <div className="nav-item">
                    <Link style={navLinksStyle} to="/pricingplans">Pricing & Plans</Link>
                </div>
                <div className="nav-item">
                    <Link style={navLinksStyle} to="/contact">Contact</Link>
                </div>
                <div className="nav-item">
                    <Link style={{color: 'yellow'}} to="/freetrial">7-Day Free Trial</Link>
                </div>
                <div className="nav-item">
                    <input style={searchStyle} type="text" placeholder="Search For..."/>
                    <button className='fas fa-search fa-sm' style={magGlassStyle} type='submit' onSubmit={() => someFunction()}/>
                </div>
                <button style={btnLogin} className='btn-login' type='button'>Login</button>
            </div>
                <Switch>
                    <Route path='/team'>
                        <Team />
                    </Route>
                    <Route path='/pricingplans'>
                        <PricingPlans />
                    </Route>
                    <Route path="/freetrial">
                        <FreeTrial />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
        </Router>
        </>
    )}
}

export default Navbar;