
import React from 'react';
import GlassesImage from '../../img/glasses.svg';
import RightPic from "../../img/computer-backplane.svg";
import {Link} from 'react-router-dom';

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
//   marginRight: '0rem'
}

function HowWeFindFunding() {
    return (
        <>
        <div style={howWeFind}>
            <div style={{marginRight: '0rem'}} className="row">
                <div className="col-md-6 col-sm-12">
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
                <div className="col-md-6 col-sm-12">
                <div style={rightPic} className="d-none d-md-block">
                    <img style={{float: 'right', marginRight: '15%'}} src={RightPic} alt=""/>
                </div>
                </div>
            </div>
            </div>
            
            {/* Continued - How We Find Funding Box */}
            <div style={howWeFind}>

                <div style={{marginRight: '0rem'}} className="row">
                <div className="col-sm-6">
                    <div style={leftPic} className="d-none d-md-block">
                    <img style={{float: 'right', marginRight: '15%'}} src={GlassesImage} alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12" style={{textAlign: 'center'}}>
                    <p style={{marginTop: '15vh', marginRight: '2vw'}}> <span style={{fontWeight: 'bold'}}>WHY GRANTUS?</span>
                        <br/><br/>
                        Our Intuitive Technology helps you find your Optimal Opportunity.
                        <br/><br/>
                        Our unique method of web scraping coupled with Natural Language Processing (NLP) technology and
                        machine learning gives us the opportunity to fine tune your results, saving you time and effort. 
                        <br/><br/>
                        Learn More: <Link to="/nlp">What is Natural Language Processing (NLP)?</Link> 
                    </p>
                </div>
                </div>

            </div>
            <hr style={{marginTop: '10vh'}}/>
        </>
    )
}

 export default HowWeFindFunding;