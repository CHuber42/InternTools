import React from 'react';
import Banner from './banner';
import GlassesImage from '../img/glasses.svg';
import RightPic from "../img/computer-backplane.svg";
import schoolIcon1 from '../img/schoolIcon1.svg';
import smallbusiness1 from '../img/smallbusiness1.svg';
import govicon from '../img/govicon.svg';
import SmartFocusFunding from './smartfocusfunding';

const inquire = {
  top: '50vh',
  background: '#FFFFFF',
  border: '1px solid #DDDDDD',
  boxShadow: '.1rem .25em .25em rgba(0, 0, 0, 0.25)',
  borderRadius: '5rem',
  marginLeft: '60vw',
  position: 'absolute'
}

const inquireBox = {
  position: 'absolute',
  zIndex: '1000',
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
  marginLeft: '5rem',
}

const inquireForm = {
  padding: '40px 40px',
}

const firstName = {
  height: '4vh',
  width: '12vw',
  paddingLeft: '1rem',
  borderRadius: '5rem',
  border: '1px solid',
}

const lastName = {
  height: '4vh',
  width: '12vw',
  paddingLeft: '1rem',
  marginLeft: '1vw',
  borderRadius: '5rem',
  border: '1px solid',
}

 const inquireFields = {
  height: '4vh',
  width: '25vw',
  paddingLeft: '1rem',
  marginTop: '2rem',
  borderRadius: '5rem',
  border: '1px solid',
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
  border: '1px solid #000000',
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
  textAlign: 'center'
  //   color: #FFFFFF;
  //   text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
}

const edu = {
  textAlign: 'left',
  paddingBottom: '15px',
}

const leftTable = {
  marginTop: '-100px',
}

const icon = {
  marginTop: '-15px'
}

const sectText = {
  textAlign: 'left'
}

const sectHead = {
  left: '-15px'
}

const buttonBlue = {
  backgroundColor: '#7598CC',
  border: '1px solid #000000',
  color: '#FFFFFF',
  padding: '1px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '24px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

const funderSpecific = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '36px', 
  color: '#000000',
  paddingTop: '10%'
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

const leftSide = {
  padding: '20px 50px 0px 0px'
}

const rightPic = {
  padding: '20px 50px 0px 0px',
  opacity: '0.8',
  position: 'absolute',
  marginLeft: '25%'
}

const leftPic = {
  padding: '20px 50px 0px 0px',
  opacity: '0.8',
  position: 'absolute',
  marginLeft: '25%'
}

const howWeFind = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  lineHeight: '28px',
  fontSize: '30px',
}

const blueBox = {
  height: '21rem',
  width: '100%',
  backgroundColor: '#5881BE'
}



const corona = {
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '30px',
  lineHeight: '35px',
  color: '#FFFFFF'
}

const covid19 = {
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '96px',
  lineHeight: '112px',
  color: '#FFFBFB',
}

const responsePlan = {
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '42px',
  color: '#FFFFFF', 
}



function Home() {
  
  return (
    <>
      <Banner />
     
        {/* Inquire Box */}
        <div style={inquire} class="col-md-4 col-sm-12">
          <div stlye={inquireBox} class="d-none d-lg-block">
            <p style={inquireAbout}>
              <em>Inquire About</em><br></br>GETTING FUNDED
            </p>
            <form action="">
              <div style={inquireForm} class="form-group">
                <input type="text" name="firstName" style={firstName} placeholder="First Name"/>
                <input type="text" name="lastName" style={lastName} placeholder="Last Name"/>
                <input type="email" name="email" style={inquireFields} placeholder="Email Address"/>
                <input type="text" name="business-info" style={inquireFields} placeholder="Organization Or Business Name"/>
                <button type="submit" style={btnInquiry}>Submit Inquiry</button>
              </div>
            </form>
          </div>
        </div>
        
        <div style={{backgroundColor: '#e5e5e5'}}>
        {/* Funding Pathway */}
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div style={findFund}>
              <p>FIND YOUR
              <br/>
                 FUNDING PATHWAY
              </p>
            </div>
          <div style={leftTable}> 
            <div class="row" style={edu}>
              <div class="col-sm-3">
                <img style={icon} src={schoolIcon1} alt="school icon"/>
              </div>
              <div class="col" style={sectText}>
                <div class="row">
                  <div class="col-sm-8" style={sectHead}>
                    <h4>EDUCATION FUNDING </h4>
                  </div>
                  <div class="col-sm-4">
                      <a style={buttonBlue} href="education.html">→</a>
                  </div>
                </div>
                <div class="row">
                  <br/>
                  <p> FOR PUBLIC AND PRIVATE SCHOOLS, COLLEGES AND UNIVERSITIES</p>
                </div>
              </div>
            </div>
            <div class="row" style={edu}>
              <div class="col-sm-3">
                <img style={icon} src={smallbusiness1} alt="small business icon"/>
              </div>
              <div class="col" style={sectText}>
                <div class="row">
                  <div class="col-sm-8" style={sectHead}>
                    <h4> <p>SMALL AND MEDIUM BUSINESS FUNDING</p> </h4>
                  </div>
                  <div class="col-sm-4">
                      <a style={buttonBlue} href="education.html">→</a>
                  </div>
                </div>
                <div class="row">
                    <br/>
                    <p> FOR PROFIT & NONPOFIT ORGANIZATION AND BUSINESSES</p>
                </div>
              </div>
            </div>
            <div class="row" style={edu}>
              <div class="col-sm-3">
                <img style={icon} src={govicon} alt="small gov icon"/>
              </div>
                <div class="col" style={sectText}>
                  <div class="row">
                    <div class="col-sm-8" style={sectHead}>
                      <h4>GOVERNMENT CONTRACT FUNDING </h4>
                    </div>
                    <div class="col-sm-4">
                      <a style={buttonBlue} href="education.html">→</a>
                    </div>
                  </div>
                  <div class="row">
                    <br/>
                    <p>SMALL TO LARGE SCALE PROJECTS, ALL FORMS OF <br/> NEEDS FROM SINGLE TO ONGOING CONTRACTS</p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* Funders */}
        <div class="col-md-6">
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

      {/* How We Find Funding Box */}
      <hr/>
      <div style={howWeFind}>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div style={leftSide}>
              <p style={{textAlign: 'center', marginLeft: '15%'}}> 
              <span style={{fontWeight: 'bold'}}>HOW WE FIND FUNDING</span>
                <br/><br/>
                We start by getting to know both you and your specific project, in detail. 
                <br/><br/>
                We take the hard work out of finding your grants by asking the right questions upfront, isolating the
                best fits and delivering all the information you need to file, seamlessly.
                <br/><br/>
                Many funding sources don’t choose to have a public web presence, and our extensive and constantly
                updating databases allow us to contact, catalogue and match you with many more opportunities than are
                available anywhere else. 
                <br/><br/>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div style={rightPic} class="d-none d-md-block">
              <img style={{float: 'right', marginRight: '15%'}} src={RightPic} alt=""/>
            </div>
          </div>
        </div>
      </div>
      
      {/* Continued - How We Find Funding Box */}
      <div style={howWeFind}>

          <div class="row">
            <div class="col-sm-6">
              <div style={leftPic} class="d-none d-md-block">
                <img style={{float: 'right', marginRight: '15%'}} src={GlassesImage} alt=""/>
              </div>
            </div>
            <div class="col-md-6 col-sm-12" style={{textAlign: 'center'}}>
                <p style={{marginTop: '15vh', marginRight: '2vw'}}> <span style={{fontWeight: 'bold'}}>WHY GRANTUS?</span>
                  <br/><br/>
                  Our Intuitive Technology helps you find your Optimal Opportunity.
                  <br/><br/>
                  Our unique method of web scraping coupled with Natural Language Processing (NLP) technology and
                  machine learning gives us the opportunity to fine tune your results, saving you time and effort. 
                  <br/><br/>
                  Learn More: <a href="nlp.html">What is Natural Language Processing (NLP)?</a> 
                </p>
            </div>
          </div>

      </div>
      <hr style={{marginTop: '10vh'}}/>

      <SmartFocusFunding/>

      {/* BOTTOM ROW  */}
      <div class="container">
        <hr/>
        <div class="row">

          {/* LEFT SIDE */}
          <div class="col-md-6 col-sm-12">    
            <div style={blueBox}>
              <div style={corona}>
                <br/>
                <br/>
                <p>Coronavirus Disease 2019</p>
              </div>
              <div style={covid19}>
                  <p>COVID-19</p>
              </div>
              <div style={responsePlan}>
                  <p>RESPONSE PLAN</p>
              </div>   
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div class="col-md-6 col-sm-12">
            <div>
              <h4>SOLUTIONS TO KEEP YOUR BUSINESS IN MOTION DURING AND AFTER COVID-19</h4>
              <p>
                As the world works to contain the spread of COVID-19, our team at
                Grant Us Funding™ is adapting to this rapidly eveolving situation, implementing satety measures, and
                taking care of out employees, our partners and our clients. <br/> <br/>
                We’re helping firms make a seamless transtition to remote business with our software gathering secure
                digital solutions, backed by our experienced teams and world class protocols to find you funding. <br/> <br/>
                Discover new ways to get your organization or business funded and moving forward. 
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
      
    </>
  )
};

export default Home;