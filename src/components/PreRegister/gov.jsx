import React from 'react';
import GovIcon from '../../img/govicon.svg';
import whatDidBuyPic from '../../img/whatDidBuyPic.svg';
import whichAgencyPic from '../../img/whichAgencyPic.svg';
import { Link } from 'react-router-dom';
import './introparagraphs.css';

const whichAgenciesRight = {
    padding: '2em',
    fontSize: '32px',
    lineHeight: '1em',
}

const background = {
    backgroundColor: '#e5e5e5'
}

function Gov() {
    return(
        <>
        <div style={background}>
        <section className="main-div"> 
        <div className="introInfo"> 
            <div className="d-none d-md-block introTitle"> 
                <h2 className="introTitleH2">FIND YOUR <br/> 
                  FUNDING PATHWAY</h2> 
            </div>             
            <img className="introPic" src={GovIcon} alt=""/> 
            <div className="introIcon"> 
            <h3>GOVERNMENT<br/>
            CONTRACT FUNDING</h3> 
                <br/> 
                <p>SMALL TO LARGE SCALE PROJECTS, ALL TYPES OF NEEDS FROM SINGLE TO ONGOING CONTRACTS</p> 
            </div>             
        </div>         
        <div className="introText"> 
            <h2 className="introTextH2">There is a large and growing need to fill government contracts, and not only by
          the “big guys".</h2> 
{/*  */}
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <img style={{width: '100%', objectFit: 'contain'}} src={whichAgencyPic} alt=""/>
                    <p style={{fontSize: '12px'}}>Infographic from <a style={{color: '#5881BE'}} href="https://blog.gao.gov/2019/05/28/federal-government-contracting-for-fiscal-year-2018-infographic/" target="_blank" rel="noopener noreferrer">US Government Accountability Office</a></p>
                </div>
                <div style={whichAgenciesRight} className="col-lg-6 col-md-12">
                    <p>In 2018, our government spent <strong>$554.1 billion dollars</strong> on contracts.<br/><br/>
              This includes the civilian and defense agencies. ~25% were awarded to small businesses.<br/><br/>
              It takes a ton of resources to run Federal, State and City infrastructures and essential
              services.<br/><br/> <strong>Your services and products are all needed and fundable.</strong></p>
                    <br/>
                    <br/>
                </div>
            </div>
            <img style={{width: '100%', objectFit: 'contain'}} src={whatDidBuyPic} alt=""/>
            <p style={{fontSize: '12px'}}>Infographic from <a style={{color: '#5881BE'}} href="https://blog.gao.gov/2019/05/28/federal-government-contracting-for-fiscal-year-2018-infographic/" target="_blank" rel="noopener noreferrer">US Government Accountability Office</a></p>
{/*  */}


            <h3>There are multiple opportunities for funding that oftentimes go unrequested in the current business
          environment. It’s
          time for you to take part in these well-funded projects.</h3> 
        </div>         
        <div style={{marginLeft: '2.5rem'}}> 
            <p><strong>Our product makes your search seamless:</strong></p> 
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
        <p>We’ve added <span style={{color:'#5881BE'}}>X,XXX </span> new Funding <br/>opportunities in the last week.</p> 
    </div>     
    <div className="container" style={{fontSize: '18px', textAlign: 'center', padding: '3rem'}}> 
        <p>(Yes, really.)</p>
        <br/>
        <Link to="/register">
           <span className="bluePreRegBtn">Get Registered</span>
        </Link>
        <br/>
    </div>
    </div>
        </>
    )
}

export default Gov;