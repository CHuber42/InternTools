import React, {Component} from 'react';

// import GrantUsLogo from "../img/RemasteredGufLogo3.png";

import GrantUsLogo from "../img/guf_logo.png";
// import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
// import Home from './Index';
// import Contact from './contact'
// import FreeTrial from './freetrial'
// import PricingPlans from './pricingplans';
// import Team from './team';

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
    cursor: 'pointer',
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
    marginLeft: '-17%',
    border: 'none',
}

const freeTrialStyle = {
    color: 'yellow',
    cursor: 'pointer'
}

const activeLink = {
    backgroundColor: '#7598cc',
    borderRadius: '2rem',
    border: '1px solid white',
    boxShadow: '.3rem .3rem .3rem rgba(0, 0, 0, 0.25)',
}

const boundingBox = {
    width: '10rem',
    textAlign: 'center',
}

var teamLink;
var freeTrialLink;
var contactLink;
var pricingPlansLink;


class Navbar extends Component {
    constructor(){
      super()
      this.state = {
          active: "",
      };
      this.fragment = "";
    }

    componentWillUpdate(){
        pricingPlansLink = {};
        contactLink = {};
        freeTrialLink = {};
        teamLink = {};
        
        switch(window.location.href){
            case 'http://localhost:3000/pricingplans':
                pricingPlansLink = activeLink;
                break;
            case 'http://localhost:3000/contact':
                contactLink = activeLink;
                break;
            case 'http://localhost:3000/team':
                teamLink = activeLink;
                break;
            case 'http://localhost:3000/freetrial':
                freeTrialLink = activeLink;
                break;
            default :
                console.log("default switch condition in navbar");
                break;
        }
    }
    
    render(){  
        // switch (this.state.active){
        //     case "home":
        //         this.fragment=<Home/>;
        //         break
        //     case "team":
        //         this.fragment=<Team/>;
        //         break
        //     case "pricingplans":
        //         this.fragment=<PricingPlans/>;
        //         break
        //     case "contact":
        //         this.fragment=<Contact/>;
        //         break
        //     case "freetrial":
        //         this.fragment=<FreeTrial/>;
        //         break
        //     default:
        //         this.fragment=<Home/>;
        //         break
        // }
    return(
        <>
        {/* <Router> */}
            <div style={headerStyle} className="navbar">
                <div className="navbar-brand">
                    <Link to="/">
                        <img src={GrantUsLogo} alt="Logo" style={logoStyle} /> 
                        {/* onClick={() => this.setState({active: "home"})} */}
                    </Link>
                </div>
                <div style={boundingBox}>
                    <div className="nav-item" style={teamLink}>
                    {/* <span style={navLinksStyle} onClick={() => this.setState({active: "team"})}>Our Team</span> */}
                    <Link style={navLinksStyle} to="/team">Our Team</Link>
                    </div>
                </div>
                <div style={boundingBox}>
                    <div className="nav-item" style={pricingPlansLink}>
                        {/* <span style={navLinksStyle} onClick={() => this.setState({active: "pricingplans"})}>Pricing & Plans</span> */}
                        <Link style={navLinksStyle} to="/pricingplans">Pricing & Plans</Link>
                    </div>
                </div>
                <div style={boundingBox}>
                    <div className="nav-item" style={contactLink}>
                        {/* <span style={navLinksStyle} onClick={() => this.setState({active: "contact"})}>Contact</span> */}
                        <Link style={navLinksStyle} to="/contact">Contact</Link>
                    </div>
                </div>
                <div style={boundingBox}>
                    <div className="nav-item" style={freeTrialLink}>
                        {/* <span style={freeTrialStyle} onClick={() => this.setState({active: "freetrial"})}>7-Day Free Trial</span> */}
                        <Link style={freeTrialStyle} to="/freetrial">7-Day Free Trial</Link>
                    </div>
                </div>
                <div className="nav-item">
                    <input style={searchStyle} type="text" placeholder="Search For..."/>
                    <button className='fas fa-search fa-sm' style={magGlassStyle} type='submit'/>
                </div>
                <Link to="./preregister">
                    <button style={btnLogin} className='btn-login' type='button'>Login</button>
                </Link>
            </div>
            {/* {this.fragment} */}
        </>
    )}
}

export default Navbar;