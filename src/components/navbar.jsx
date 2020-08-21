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
    height: '100%',
    cursor: 'pointer'
}

const navLinksStyle = {
    color: '#ffffff',
    cursor: 'pointer'
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

const freeTrialStyle = {
    color: 'yellow',
    cursor: 'pointer'
}

class Navbar extends Component {
    constructor(){
      super()
      this.state = {
          active: "",
      };
      this.fragment = "";
    }
    
    render(){
        switch (this.state.active){
            case "home":
                this.fragment=<Home/>;
                break
            case "team":
                this.fragment=<Team/>;
                break
            case "pricingplans":
                this.fragment=<PricingPlans/>;
                break
            case "contact":
                this.fragment=<Contact/>;
                break
            case "freetrial":
                this.fragment=<FreeTrial/>;
                break
            default:
                this.fragment=<Home/>;
                break
        }
    return(
        <>
        {/* <Router> */}
            <div style={headerStyle} className="navbar">
                <div className="navbar-brand">
                  <img src={image} alt="Logo" style={logoStyle} onClick={() => this.setState({active: "home"})}/>
                </div>
                <div className="nav-item">
                    <span style={navLinksStyle} onClick={() => this.setState({active: "team"})}>Our Team</span>
                </div>
                <div className="nav-item">
                    <span style={navLinksStyle} onClick={() => this.setState({active: "pricingplans"})}>Pricing & Plans</span>
                </div>
                <div className="nav-item">
                    <span style={navLinksStyle} onClick={() => this.setState({active: "contact"})}>Contact</span>
                </div>
                <div className="nav-item">
                    <span style={freeTrialStyle} onClick={() => this.setState({active: "freetrial"})}>7-Day Free Trial</span>
                </div>
                <div className="nav-item">
                    <input style={searchStyle} type="text" placeholder="Search For..."/>
                    <button className='fas fa-search fa-sm' style={magGlassStyle} type='submit'/>
                </div>
                <button style={btnLogin} className='btn-login' type='button'>Login</button>
            </div>
            {this.fragment}
        </>
    )}
}

export default Navbar;