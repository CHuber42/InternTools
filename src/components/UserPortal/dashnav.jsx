import React, {Component} from 'react';
// import GrantUsLogo from "../../img/RemasteredGufLogo3.png";
import GrantUsLogo from "../../img/guf_logo.png";
import { Link } from 'react-router-dom';

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

const boundingBox = {
    width: '10rem',
    textAlign: 'center',
}

class DashNavbar extends Component{
    constructor(props){
        super()
    }

    componentDidUpdate = () => {
        const target = document.getElementsByTagName("body")[0]
        target.scrollIntoView();
    }

    render(){
    return(
        <>
            <div style={headerStyle} className="navbar">
                <div className="navbar-brand">
                    <Link to="/">
                        <img src={GrantUsLogo} alt="Logo" style={logoStyle} /> 
                    </Link>
                </div>
                <div style={boundingBox}>
                    <div className="nav-item">
                        <Link style={navLinksStyle} to="/team">Our Team</Link>
                    </div>
                </div>
                <div style={boundingBox}>
                    <div className="nav-item">
                        <Link style={navLinksStyle} to="/pricingplans">Pricing & Plans</Link>
                    </div>
                </div>
                <div style={boundingBox}>
                    <div className="nav-item">
                        <Link style={navLinksStyle} to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="nav-item">
                    <input style={searchStyle} type="text" placeholder="Search For..."/>
                    <button className='fas fa-search fa-sm' style={magGlassStyle} type='submit'/>
                </div>
                <Link to="/">
                    <button style={btnLogin} className='btn-login' type='button'>Sign Out</button>
                </Link>
            </div>
      </>
    )}
}

export default DashNavbar;