import React from 'react';
import EducationIcon from '../img/schoolIcon1.svg';
import SmallBusinessIcon from '../img/smallbusiness1.svg';
import GovIcon from '../img/govicon.svg';
import SmartFocusFunding from './Fragments/smartfocusfunding';
import { Link } from 'react-router-dom';

const backGround = {
    backgroundColor: '#E5E5E5',
    border: '1px solid #E5E5E5',
}

const title = {
    marginBottom: '2.5rem',
    marginTop: '2.5rem',
    textAlign: 'center',
}

const btnFun = {
    height: '8rem',
    width: '15rem',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '28px',
    color: '#000000',
    background: '#d5d5d5',
    boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    border: 'none',
    borderRadius: '1rem',
    marginBottom: '1rem',
    marginLeft: '-5rem'
}

const btnPlans = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '28px',
    color: '#ffffff',
    height: '8rem',
    width: '10rem',
    border: 'none',
    borderRadius: '1rem',
    background: '#5881b3',
    boxShadow: '0rem, .5rem, .5rem rgba(0,0,0,.25)'
}

const btnChat = {
    marginTop: '2rem',
    marginBottom: '2rem',
    marginLeft: '28%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '48px',
    color: '#FFFFFF',
    width: '30rem',
    height: '8rem',
    border: 'none',
    borderRadius: '5rem',
    background: '#5881BE',
    boxShadow: '.1rem .5rem .5rem rgba(.1, .1, .1, .25)',
}

const contactInfo = {
    background: '#D5D5D5',
    borderRadius: '39px',
    padding: '15px',
    textAlign: 'center',
    margin: 'auto',
    width: '55vw',
    boxShadow: '.1rem .5rem .5rem rgba(.1, .1, .1, .25)'
}

const email = {
    cursor: 'pointer'
}

function Contact() {
    return (
        <>
            <div style={backGround}>
            <div className="container"> 
                <div> 
                    <h1 style={title}>FIND YOUR FUNDING TODAY</h1> 
                </div>      
                <div className="row row-center"> 
                    <div className="col-md-4"> 
                        <img src={EducationIcon} alt="school icon"/> 
                    </div>         
                    <div className="col-md-4" > 
                        <a href="mailto:Info@GrantUsFunding.com">
                        <button type="button" style={btnFun} data-toggle="modal" data-target="#contactModal" data-whatever="@Academic">
                            Request info@Academic
                        </button> 
                        </a>             
                    </div>         
                    <div className="col-md-4">
                        <Link to="/pricingplans"><button style={btnPlans}>See Plans <br /> & <br/> Pricing</button></Link>
                    </div>         
                </div>     
                <div className="row row-center"> 
                    <div className="col-md-4"> 
                        <img src={SmallBusinessIcon} alt="smb icon"/> 
                    </div>         
                    <div className="col-md-4"> 
                        <a href="mailto:Info@GrantUsFunding.com">
                            <button type="button" style={btnFun} data-toggle="modal" data-target="#contactModal" data-whatever="@Small">
                                Request info@Small<br/>& Medium Business
                            </button>  
                        </a>            
                    </div>         
                    <div className="col-md-4 plans"> 
                        <Link to="/pricingplans"><button style={btnPlans}>See Plans <br /> & <br/> Pricing</button></Link> 
                    </div>         
                </div>     
                <div className="row row-center"> 
                    <div className="col-md-4"> 
                        <img src={GovIcon} alt="gov icon"/> 
                    </div>         
                    <div className="col-md-4"> 
                        <a href="mailto:Info@GrantUsFunding.com">
                            <button type="button" style={btnFun} data-toggle="modal" data-target="#contactModal" data-whatever="@Gov">
                                Request info@<br/>Government Contracting
                            </button>            
                        </a> 
                    </div>         
                    <div className="col-md-4 plans">
                        <Link to="/pricingplans"><button style={btnPlans}>See Plans <br /> & <br/> Pricing</button></Link> 
                    </div>         
                </div>          
                {/* ChatWithUs */}
                <button type="submit" style={btnChat}>Chat With Us</button>
            </div>
      
            <hr />
            {/* SMART FOCUSED FUNDING */}
            <SmartFocusFunding />
            
            {/* CONTACT DETAILS */}
            <div style={contactInfo}> 
                <span className="contact-company">  <p><strong> Grant Us Funding</strong></p>  </span> 
                <p>Corvallis, Oregon 97330</p> 
                <p><strong>Phone:</strong><a href="tel:971-800-1048"> 971-800-1048</a></p>
                <p style={email}><strong>Email:</strong><a href="mailto:Info@GrantUsFunding.com"> Info@GrantUsFunding.com</a></p> 
            </div>             
            <hr/>
        </div>
        </>
    )
};

export default Contact;