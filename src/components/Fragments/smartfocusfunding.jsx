import React from 'react';
import { Link } from 'react-router-dom';

const background = {
  backgroundColor: '#e5e5e5'
}

const smartFocusedFunding1 = {
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '24px',
    textAlign: 'center',
  }
  
const smartFocusedFunding2 = {
    fontSize: '24px',
    fontStyle: 'italic',
    textAlign: 'center'
}

const list1 = {
    fontSize: '24px',
    lineHeight: '60px',
    listStylePosition: 'inside',
    textAlign: 'left',
    marginLeft: '6rem',  
}

const buttonOrange = {
  backgroundColor: '#cf974f',
  border: 'none',
  color: '#FFFFFF',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '24px',
  boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25)',
  width: '15rem',
  height: '2rem',
  marginTop: '1rem',
  marginBottom: '1rem',
  borderRadius: '5rem',
  paddingBottom: '2.5rem'
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
  height: '2rem',
  marginTop: '1rem',
  marginBottom: '1rem',
  borderRadius: '5rem',
  paddingBottom: '2.5rem'
}

function SmartFocusFunding() {
  return (
  <>
    <div style={background}>
      {/* Smart Focused Funding */}
      <div className="container">
              
      {/* TOP */}
        <div style={{textAlign: 'center'}}>
          <p style={smartFocusedFunding1}><br/>Smart Focused Funding</p>
          <br/>
          <p style={smartFocusedFunding2}> Get Funded!</p>
          <br/>
          <div className="row">
          
          {/* LEFT */}
            <div className="col-md-6 col-sm-12">
              <h3>Our Commitment to You:</h3>
                <ul style={list1}>
                  <strong> <li>Easy-To-Use Software</li> <li>Find Qualified Leads</li> <li>Save You Time</li> <li>Keep You Informed</li> </strong>
                </ul>
            </div>

            {/* RIGHT */}
            <div className="col-md-6 col-sm-12">
                <p style={{fontSize: '24px', lineHeight: '36px' }}>Join Us.</p>
                <Link to='./pricingplans'>
                  <p style={buttonGreen}>Plans and Pricing</p>
                </Link>
                <p style={{fontSize: '24px', lineHeight: '36px' }}>Or Start Your</p>
                <Link to='./freetrial'>
                  <p style={buttonOrange}>7-Day Free Trial</p>
                </Link>
                <p style={{fontSize: '24px', lineHeight: '36px' }}>No Credit Card Required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default SmartFocusFunding;