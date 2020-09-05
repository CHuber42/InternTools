import React from 'react';
import Education from '../../img/schoolIcon1.svg';
import { Link } from 'react-router-dom';
import './introparagraphs.css';

const background = {
    backgroundColor: '#e5e5e5',
    marginTop: '0rem',
}

function Edu() {
    return(
        <>
        <div style={background}>
        <section className="main-div"> 
        <div className="introInfo"> 
            <div className="d-none d-md-block introTitle"> 
                <h2 className="introTitleH2">FIND YOUR <br/> 
                  FUNDING PATHWAY</h2> 
            </div>             
            <img className="introPic" src={Education} alt=""/> 
            <div className="introIcon"> 
                <h3>EDUCATION FUNDING</h3> 
                <br/> 
                <p>FOR PUBLIC AND PRIVATE SCHOOLS, COLLEGES AND UNIVERSITIES, STUDENTS</p> 
            </div>             
        </div>         
        <div className="introText"> 
            <h2 className="introTextH2">There is a large and growing need to fund education in all its forms.</h2> 
            <h3>Academics: Our story resonates with you. We were knee deep in the process of finding funding using industry standard software for our own projects, and realized the need for better solutions. Other Grant software required one to work much harder and spend much more time than was necessary, and we wanted a solution. Hence, <i>Grant Us Funding</i> was born.
            <br/>  
            <br/> 
        There are multiple oppotunities for funding that often times go unrequested. In the current academic environment, funders are actively seeing their next opportunity: From Research to accelerating Fellowships, and much, much more. Advance your research now!</h3> 
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
        <p>We’ve added <span style={{color:'#5881BE'}}>[variable]</span> new Funding <br/>opportunities in the last week.</p> 
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

export default Edu;
