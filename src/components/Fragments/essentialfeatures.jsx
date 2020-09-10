import React from 'react';
import EllipseImg from '../../img/ellipse1.svg';
import { Link } from 'react-router-dom';

const background = {
    backgroundColor: '#E5e5e5'
}

const wrapper = {
    display: 'flex',
    justifyContent: 'center'
}

const numbersInList = {
    position: 'relative',  
    top: '-2.0em', 
    zIndex: '2', 
    color: 'white',
    textAlign: 'center',
    width: '3.8rem',
    paddingTop: '.3rem'
}

const planListBox = {
    display: 'grid',
    alignContent: 'center',
    marginTop: '5rem'
}

const buttonBlue = {
    backgroundColor: '#1879d9',
    border: 'none',
    color: '#FFFFFF',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '24px',
    boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25)',
    width: '15rem',
    marginTop: '2rem',
    borderRadius: '5rem'
}
 
const buttonGreen = {
    backgroundColor: '#128049',
    border: 'none',
    color: '#FFFFFF',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '24px',
    boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25)',
    width: '15rem',
    marginTop: '2rem',
    borderRadius: '5rem',
    marginBottom: '2rem'
}

const freeTrialBox = {
    lineHeight: 'normal',
    display: 'grid',
    justifyContent: 'center',
    textAlign: 'center',
    gridTemplateColumns: '1fr 10fr',
    fontSize: '1.5em',
    border: '1px solid #9D9D9D',
    borderRadius: '3em',
    padding: '2em',
    margin: '2em',
    width: '60%',
    marginLeft: '20vw'
}

const premiumBoxLeft1 = {
    width: '30rem',
    height: '15rem',
    backgroundColor: '#466695',
    borderRadius: '2rem',
    padding: '30px',
    fontWeight: '200',
    fontSize: '24px',
    color: '#ffffff',
    float: 'right',
    textAlign: 'left'
}

const premiumBoxLeft2 = {
    width: '30rem',
    height: '15rem',
    backgroundColor: '#5881BE',
    borderRadius: '2rem',
    padding: '30px',
    fontWeight: '200',
    fontSize: '24px',
    color: '#ffffff',
    float: 'right',
    textAlign: 'left'
}

const premiumBoxLeft3 = {
    width: '30rem',
    height: '15rem',
    backgroundColor: '#7598CC',
    borderRadius: '2rem',
    padding: '30px',
    fontWeight: '200',
    fontSize: '24px',
    color: '#ffffff',
    float: 'right',
    textAlign: 'left'
}

const premiumBoxRight1 = {
    width: '30rem',
    height: '15rem',
    backgroundColor: '#466695',
    borderRadius: '2rem',
    padding: '2rem',
    fontWeight: '200',
    fontSize: '24px',
    color: '#ffffff',
    textAlign: 'left'
}

const premiumBoxRight2 = {
    width: '30rem',
    height: '15rem',
    backgroundColor: '#5881BE',
    borderRadius: '2rem',
    padding: '2rem',
    fontWeight: '200',
    fontSize: '24px',
    color: '#ffffff',
    textAlign: 'left'
}

const premiumBoxRight3 = {
    width: '30rem',
    height: '15rem',
    backgroundColor: '#7598CC',
    borderRadius: '2rem',
    padding: '2rem',
    fontWeight: '200',
    fontSize: '24px',
    color: '#ffffff',
    textAlign: 'left'
}

const listItemText = {
    fontSize: '1em', 
    marginTop: '1em',
    textAlign: 'left'
}

const listItemTitle = {
    fontSize: '1.5em', 
    fontFamily: 'Rhodium Libre'
}
    
function EssentialFeatures() {
  return(
    <>
    <div style={background}>
      <div className="two-button-box">
        <div>
        <Link to='./register'><p style={buttonBlue}>Get Started</p></Link> 
        <Link to='./pricingplans'><p style={buttonGreen}>Plans and Pricing</p></Link>
        </div>
      </div>
      <h2 style={{fontSize: '3em', textAlign: 'center', fontWeight: 'bold'}}><span style={{color: '#466695'}}>Essential
          Features </span>with all paid plans:</h2>
    <div style={freeTrialBox}>
        <div style={planListBox}>
            <img src={EllipseImg} alt=""/>
            <p style={numbersInList}>1</p>
        </div>      
        <div>
            <p style={listItemTitle}>Intuitive Selective Grant Matching</p>
            
            <p style={listItemText}>We ask you detailed information: Far more than just keywords. With our intake
            format you’re only matched with opportunities that have a high probability of success. The process of
            finding your funding is ongoing daily, with updates reported immediately.</p>
            
        </div>
        <div style={planListBox}>
            <img src={EllipseImg} alt=""/>
            <p style={numbersInList}>2</p>
        </div>
        <div>
            <p style={listItemTitle}>Inclusive Funding Profiles</p>
            
            <p style={listItemText}>Funders profiles are comprehensive, from their web presence to their searchable
            990
            forms. You receive all of the dates
            and grant specifics needed to successfully apply.</p>
            
        </div>
        <div style={planListBox}>
            <img src={EllipseImg} alt=""/>
            <p style={numbersInList}>3</p>
        </div>
        <div>
            <p style={listItemTitle}>Grant Tracking</p>
            
            <p style={listItemText}>Your searches are organized by year, application stage and project; seamlessly
            displayed.</p>
             
        </div>
        <div style={planListBox}>
            <img src={EllipseImg} alt=""/>
            <p style={numbersInList}>4</p>
        </div>
        <div>
            <p style={listItemTitle}>Automatic Deadline Reminders</p>
            
            <p style={listItemText}>Time is always ticking. We send you automatic deadline reminders.</p>
            
        </div>
        <div style={planListBox}>
            <img src={EllipseImg} alt=""/>
            <p style={numbersInList}>5</p>
        </div>
        <div>
            <p style={listItemTitle}>Document Library </p>
            
            <p style={listItemText}>Easy access to all your grant documents.</p>
            
            
        </div>
        <div style={planListBox}>
            <img src={EllipseImg} alt=""/>
            <p style={numbersInList}>6</p>
        </div>
        <div>
            <p style={listItemTitle}>CSV & PDF reports</p>
            
            <p style={listItemText}>Your searches and data are downloadable in both CSV and PDF formats.</p>
            
        </div>
        <div style={planListBox}>
            <img src={EllipseImg} alt=""/>
            <p style={numbersInList}>7</p>
        </div>
        <div>
            <p style={listItemTitle}>Team Management</p>
            
            <p style={listItemText}>Secure portal with numerous options for control and flexibility of your team. </p>
            
        </div>
        <div style={planListBox}>
            <img src={EllipseImg} alt=""/>
            <p style={numbersInList}>8</p>
        </div>
        <div>
            <p style={listItemTitle}>Grant Probability Score</p>
            <p style={listItemText}>Know upfront which grants should be your highest priority. </p>
        </div>
    </div>
    <hr/>
    <h2 style={{fontSize: '3em', textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem'}}><span style={{color: '#cf974f'}}>Premium Features: </span> Nice To
        Have & Worth the Price</h2>
    <div className="premium-features-box">
        <div style={wrapper}>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h4><strong>Software/CRM Integration</strong></h4>
                    <div style={premiumBoxLeft1}>
                        <ul style={{paddingLeft: '30px'}}>
                            <li>
                                <p>Excel</p>
                            </li>
                            <li>
                                <p>Razor’s Edge</p>
                            </li>
                            <li>
                                <p>SalesForce</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h4><strong>Email Integration</strong></h4>
                    <div style={premiumBoxRight1}>
                        <ul style={{paddingLeft: '30px'}}>
                            <li>
                                <p>Mailchimp</p>
                            </li>
                            <li>
                                <p>Constant Contact</p>
                            </li>
                            <li>
                                <p>Classy</p>
                            </li>
                            <li>
                                <p>Hubspot</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <div style={wrapper}>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h4><strong>Reporting</strong></h4>
                    <div style={premiumBoxLeft2}>
                        <ul style={{paddingLeft: '30px'}}>
                            <li>
                                <p>Multiple formats</p>
                            </li>
                            <li>
                                <p>Customization available</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h4><strong>Grant Management Systems</strong></h4>
                    <div style={premiumBoxRight2}>
                        <ul style={{paddingLeft: '30px'}}>
                            <li>
                                <p>Grant Lifestyle Manager</p>
                            </li>
                            <li>
                                <p>WiseHive</p>
                            </li>
                            <li>
                                <p>Financial Edge NXT</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <div style={wrapper}>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h4><strong>Automated Keyword Searching</strong></h4>
                    <div style={premiumBoxLeft3}>
                        <ul style={{paddingLeft: '30px'}}>
                            <li>
                                <p>Automatic finding of keywords from your or other authors publications</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h4><strong>Product Integration</strong></h4>
                    <div style={premiumBoxRight3}>
                        <ul style={{paddingLeft: '30px'}}>
                            <li>
                                <p>Importation from other products</p>
                            </li>
                            <li>
                                <p>More Coming Soon!</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <span style={{textAlign: 'center'}}>* We are currently working with a number of CRM and E-Mail firms for integration <br/> More information is avaliable upon request</span>
    </div>
    </>
  )
}

export default EssentialFeatures;