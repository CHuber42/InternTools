// import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
// import GrantUsLogo from "../img/RemasteredGufLogo3.png";
import GrantUsLogo from "../img/guf_logo.png";
import { Link } from 'react-router-dom';
import React, {Component} from 'react';

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
    border: '.06rem solid white',
    borderRadius: '.3rem'
}

const searchStyle = {
    borderRadius: '.3rem',
    height: '100%',
    width: '100%'
}

const magGlassStyle = {
    height: '100%',
    borderRadius: '.3rem',
    marginLeft: '-2.2rem',
    border: 'none',
}

const freeTrialStyle = {
    color: 'yellow',
    cursor: 'pointer'
}

const activeLink = {
    backgroundColor: '#7598cc',
    borderRadius: '2rem',
    border: '.06 solid white',
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

    componentDidUpdate = () => {
        const target = document.getElementsByTagName("body")[0]
        target.scrollIntoView();
    }
    
    render(){  

        pricingPlansLink = {};
        contactLink = {};
        freeTrialLink = {};
        teamLink = {};
        
        switch(window.location.href){
            case 'https://www.grantusfunding.com/pricingplans':
                pricingPlansLink = activeLink;
                break;
            case 'https://www.grantusfunding.com/contact':
                contactLink = activeLink;
                break;
            case 'https://www.grantusfunding.com/team':
                teamLink = activeLink;
                break;
            case 'https://www.grantusfunding.com/freetrial':
                freeTrialLink = activeLink;
                break;
            default :
                break;
        }

    return(
        <>
        <div style={headerStyle} className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={GrantUsLogo} alt="Logo" style={logoStyle} /> 

                </Link>
            </div>
            <div style={boundingBox}>
                <div className="nav-item" style={teamLink}>
                    <Link style={navLinksStyle} to="/team">Our Team</Link>
                </div>
            </div>
            <div style={boundingBox}>
                <div className="nav-item" style={pricingPlansLink}>
                    <Link style={navLinksStyle} to="/pricingplans">Pricing & Plans</Link>
                </div>
            </div>
            <div style={boundingBox}>
                <div className="nav-item" style={contactLink}>
                    <Link style={navLinksStyle} to="/contact">Contact</Link>
                </div>
            </div>
            <div style={boundingBox}>
                <div className="nav-item" style={freeTrialLink}>
                    <Link style={freeTrialStyle} to="/freetrial">7-Day Free Trial</Link>
                </div>
            </div>
            <div className="nav-item">
                <input style={searchStyle} type="text" placeholder="Search For..."/>
                <button className='fas fa-search fa-sm' style={magGlassStyle} type='submit'/>
            </div>
            <Link to="./login">
                <button style={btnLogin} className='btn-login' type='button'>Login</button>
            </Link>
        </div>
        </>
    )}
}

export default Navbar;