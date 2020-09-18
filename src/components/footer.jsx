import React from 'react';
import {Link} from 'react-router-dom';

const footer = {
  display: 'flex',
  position: 'absolute',
  width: '100%',
  background: '#959595',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  height: '200px',
  padding: '1rem'
};

const fabLinkStyle = {
  color: '#FFFFFF',
  marginLeft: '1vw',
  marginRight: '1vw'
}

const links = {
  color: '#FFFFFF',
}

const footerLinks = {
  float: 'left',
  color: '#fff',
} 

function Footer() {
  return (
    <>
      <div style={footer}>
        <div style={{marginTop: '1rem', paddingTop: '2rem'}}>
          <a href="https://www.facebook.com/Grant-Us-Funding-104687287971432" className="fab fa-facebook fa-2x" style={fabLinkStyle}> </a>
          <a href="https://twitter.com/GrantUsFunding" className="fab fa-twitter fa-2x" style={fabLinkStyle}> </a>
          {/* <a href="/tbd" className="fab fa-instagram fa-2x" style={fabLinkStyle}> </a> */}
          <a href="https://www.linkedin.com/in/grantusfunding/" className="fab fa-linkedin fa-2x" style={fabLinkStyle}> </a>
          <a href="https://www.youtube.com/channel/UCWO63zfjdC941HVwvTK_kFw?guided_help_flow=3" className="fab fa-youtube fa-2x" style={fabLinkStyle}> </a>
        </div>
          <div className='container'>
            <div className='row'>
              <ul style={{listStyle: 'none'}}>
              <li>
                <Link to='/faq'><span style={footerLinks}>FAQ - Frequently Asked Questions</span></Link>
              </li>
              <li>
                <Link to="/nlp"><span style={footerLinks}>NLP - Natural Language Processing</span></Link>
              </li>
              <li>
                <Link to="/ml"><span style={footerLinks}>ML - Machine Learning</span></Link>
              </li>
              </ul>
            </div>
          </div>
          <div>
            <p style={{background: '#959595', marginBottom: '0rem', marginTop: '-2rem'}}>
              &copy; 2019-{new Date().getFullYear()}, Grant Us Funding 
              <br/>
              All Rights Reserved | <Link to='/terms'><span style={links}>Terms of Service</span></Link> | <Link to="/privacypolicy"><span style={links}>Privacy Policy</span></Link> 
            </p>
          </div>
        </div>
    </>
  )
}

export default Footer;