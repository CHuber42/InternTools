import React from 'react';
import SMBIcon from '../../img/smallbusiness1.svg';
import './introparagraphs.css';
import { Link } from 'react-router-dom';

const background = {
    backgroundColor: '#e5e5e5',
}

function Smb() {
    return(
        <>
        <div style={background}>
        <section className="main-div"> 
        <div className="introInfo"> 
            <div className="d-none d-md-block introTitle"> 
                <h2 className="introTitleH2">FIND YOUR <br/> 
                  FUNDING PATHWAY</h2> 
            </div>             
            <img className="introPic" src={SMBIcon} alt=""/> 
            <div className="introIcon"> 
            <h3>SMALL AND MEDIUM<br/>
            BUSINESS FUNDING</h3> 
                <br/> 
                <p>FOR PROFIT & NONPOFIT ORGANIZATION AND BUSINESSES</p> 
            </div>             
        </div>         
        <div className="introText"> 
            <h2 className="introTextH2">Running any business is more than a full time job, and adequate financing is key.</h2> 
            <h3>There are multiple opportunities for funding that often times go unrequested. In the current business environment, funders are actively seeking their next big opportunity. Let’s make it you!<br/><br/>
          Regardless of if you need a few dollars, or are interested in a series A or above, we have one of the most extensive databases of funding sources available.<br/><br/> 
          Our data includes the full range of Angel, Commercial, Foundation, Trust and Venture Capital Investors, both National and International.<br/><br/> 
          You’ll receive critical information that will detail past and present opportunities, insights from their published materials, contact information, and more.<br/><br/> 
          From small startups to scaling medium-sized 10 million dollar businesses, we have you covered.</h3> 
        </div>         
        <div style={{marginLeft: '2.5rem'}}> 
            <p style={{fontSize: '40px'}}><strong>Our product makes your search seamless:</strong></p> 
            <ul> 
                <li className="listItem">
                    <strong>Comprehensive:</strong> Sources from both Private and Public sectors
                </li>                 
                <li className="listItem"> 
                    <strong>Specific: </strong>Focuses on your needs
                </li>                 
                <li className="listItem"> 
                    <strong>Current: </strong>Daily Customized Match Alerts
                </li>                 
            </ul>             
        </div>         
    </section>     
    <div className="container" style={{fontSize: '50px', textAlign: 'center', marginTop: '2.5rem'}}> 
        <p>We’ve added <span style={{color:'#5881BE'}}> [variable] </span> new Funding <br/>opportunities in the last week.</p> 
    </div>     
    <div className="container" style={{fontSize: '18px', textAlign: 'center'}}> 
        <p>(Yes, really.)</p>
            <Link to="/register">
                <span className="bluePreRegBtn">Get Registered</span>
            </Link>
        <br/>
        <br/>
    </div>
    </div>
        </>
    )
}

export default Smb;