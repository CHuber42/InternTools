import React from 'react';
import { Link } from 'react-router-dom';
import schoolIcon1 from '../img/schoolIcon1.svg';
import smallbusiness1 from '../img/smallbusiness1.svg';
import govicon from '../img/govicon.svg';
import SmartFocusFunding from './Fragments/smartfocusfunding';
import HowWeFindFunding from './Fragments/howwefindfunding';
import CovidPlan from './Fragments/covidplan';

const inquire = {
  top: '-10vw',
  background: '#FFFFFF',
  border: '.06rem solid #DDDDDD',
  boxShadow: '.1rem .25em .25em rgba(0, 0, 0, 0.25)',
  borderRadius: '5rem',
  marginLeft: '60vw',
  position: 'relative',
}

const inquireBox = {
  position: 'relative',
  backgroundColor:'#FFFFFF',
  color: '#FFFFFF',
  fontWeight: 'bold',
}

const inquireAbout = {
  fontFamily: 'Roboto',
  fontStyle: 'italic',
  fontWeight: '200',
  fontSize: '40px',
  textAlign: 'left',
  marginLeft: '4vw',
}

const inquireForm = {
  padding: '2vw 2vw',
}

const firstName = {
  height: '4vh',
  width: '12vw',
  paddingLeft: '1rem',
  borderRadius: '5rem',
  border: '.06rem solid',
}

const lastName = {
  height: '4vh',
  width: '12vw',
  paddingLeft: '1rem',
  marginLeft: '1vw',
  borderRadius: '5rem',
  border: '.06rem solid',
}

 const inquireFields = {
  height: '4vh',
  width: '25vw',
  paddingLeft: '1rem',
  marginTop: '2rem',
  borderRadius: '5rem',
  border: '.06rem solid',
}

const btnInquiry = {
  fontStyle: 'italic',
  fontSize: '22px',
  paddingLeft: '10px',
  width: '25vw',
  height: '100%',
  marginTop: '2rem',
  backgroundColor: '#7598CC',
  borderRadius: '5rem',
  border: '.06rem solid #000000',
  cursor: 'pointer',
  color: '#FFFFFF',
}

const findFund = {
  zIndex: '2',
  position: 'relative',
  marginTop: '0px',
  marginBottom: '13vh',
  paddingTop: '0px',
  letterSpacing: '0.1 em',
  left: '.5rem',
  fontSize: '3rem',
  lineHeight: '3.5rem',
  textAlign: 'center',
  padding: '2rem'
}

const edu = {
  textAlign: 'left',
  paddingBottom: '1rem',
}

const leftTable = {
  marginTop: '-6.25rem',
}

const icon = {
  marginTop: '-1rem'
}

const sectText = {
  textAlign: 'left'
}

const sectHead = {
  left: '-1rem'
}

const buttonBlue = {
  backgroundColor: '#7598CC',
  border: '.06rem solid #000000',
  color: '#FFFFFF',
  padding: '.06rem 2rem',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '24px',
  boxShadow: '0rem .25rem .25rem rgba(0, 0, 0, 0.25)',
}

const funderSpecific = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '36px', 
  color: '#000000',
  paddingTop: '25%'
}

const notUnlikeClothing = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '30px',
  color: '#000000',
}

const gettingTo = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '28px',
  color: '#000000',
}

function Home() {
  
  return (
    <>
      <div style={{backgroundColor: '#e5e5e5'}}>
        {/* Inquire Box */}
        <div style={inquire} className="col-md-4 col-sm-12">
          <div stlye={inquireBox} className="d-none d-lg-block">
            <p style={inquireAbout}>
              <em>Inquire About</em><br/>GETTING FUNDED
            </p>
            <form action="">
              <div style={inquireForm} className="form-group">
                <input type="text" name="firstName" style={firstName} placeholder="First Name"/>
                <input type="text" name="lastName" style={lastName} placeholder="Last Name"/>
                <input type="email" name="email" style={inquireFields} placeholder="Email Address"/>
                <input type="text" name="business-info" style={inquireFields} placeholder="Organization Or Business Name"/>
                <button type="submit" style={btnInquiry}>Submit Inquiry</button>
              </div>
            </form>
          </div>
        </div>

        <div style={{marginTop: '-20vw'}}>
        {/* Funding Pathway */}
        <div style={{marginRight: '0rem'}} className="row">
          <div className="col-md-6 col-sm-12">
            <div style={findFund}>
              <p>FIND YOUR
              <br/>
                 FUNDING PATHWAY
              </p>
            </div>
          <div style={leftTable}> 
            <div className="row" style={edu}>
              <div className="col-sm-3">
                <img style={icon} src={schoolIcon1} alt="school icon"/>
              </div>
              <div className="col" style={sectText}>
                <div className="row">
                  <div className="col-sm-8" style={sectHead}>
                    <h4>EDUCATION FUNDING </h4>
                  </div>
                  <div className="col-sm-4">
                    <Link to="/edu">
                      <p style={buttonBlue}>→</p>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <br/>
                  <p> FOR PUBLIC AND PRIVATE SCHOOLS, COLLEGES AND UNIVERSITIES</p>
                </div>
              </div>
            </div>
            <div className="row" style={edu}>
              <div className="col-sm-3">
                <img style={icon} src={smallbusiness1} alt="small business icon"/>
              </div>
              <div className="col" style={sectText}>
                <div className="row">
                  <div className="col-sm-8" style={sectHead}>
                    <h4> <p>SMALL AND MEDIUM BUSINESS FUNDING</p> </h4>
                  </div>
                  <div className="col-sm-4">
                    <Link to='/smb'>
                      <p style={buttonBlue}>→</p>
                    </Link>
                  </div>
                </div>
                <div className="row">
                    <br/>
                    <p> FOR PROFIT & NONPOFIT ORGANIZATION AND BUSINESSES</p>
                </div>
              </div>
            </div>
            <div className="row" style={edu}>
              <div className="col-sm-3">
                <img style={icon} src={govicon} alt="small gov icon"/>
              </div>
                <div className="col" style={sectText}>
                  <div className="row">
                    <div className="col-sm-8" style={sectHead}>
                      <h4>GOVERNMENT CONTRACT FUNDING </h4>
                    </div>
                    <div className="col-sm-4">
                      <Link to='./gov'>
                        <p style={buttonBlue}>→</p>
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <br/>
                    <p>SMALL TO LARGE SCALE PROJECTS, ALL FORMS OF <br/> NEEDS FROM SINGLE TO ONGOING CONTRACTS</p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* Funders */}
        <div className="col-md-6">
          <div style={funderSpecific}>
            <br/>
            <p>Funders are very specific, and so are we.</p>
          </div>
          <div style={notUnlikeClothing}>
            <p>Not unlike clothing, the correct fit makes the difference.</p>
          </div>
          <div style={gettingTo}>
            <p>Getting to <em>really</em> know you is one of the keys to finding you proper funding matches. <em>Grant Us Funding</em> makes this our first priority.</p>
          </div>
        </div>
      </div>
      <hr/>
      {/* How We Find Funding Box */}
      <HowWeFindFunding/>
      {/* SMART FOCUSED FUNDING SECTION */}
      <SmartFocusFunding/>
      {/* Covid Bottom Section */}
      <CovidPlan/>
    </div>
    </div>
    </>
  )
};

export default Home;