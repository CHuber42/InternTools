import React from 'react';
import {Link} from 'react-router-dom';

const footer = {
  display: 'flex',
  position: 'absolute',
  width: '100%',
  // height: '71px',
  background: '#959595',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  height: '200px',
};

const fabLinkStyle = {
  color: '#FFFFFF',
  marginLeft: '1vw',
  marginRight: '1vw'
}

const copyRight = {
  marginTop: '1rem'
}

const links = {
  color: 'black'
}

function Footer() {
  return (
    <>
      <div style={footer}>
        <div style={{paddingTop: '2rem'}}>
          <a href="https://www.facebook.com/Grant-Us-Funding-104687287971432" className="fab fa-facebook fa-2x" style={fabLinkStyle}> </a>
          <a href="/tbd" className="fab fa-twitter fa-2x" style={fabLinkStyle}> </a>
          <a href="/tbd" className="fab fa-instagram fa-2x" style={fabLinkStyle}> </a>
          <a href="/tbd" className="fab fa-linkedin fa-2x" style={fabLinkStyle}> </a>
          <a href="https://www.youtube.com/channel/UCWO63zfjdC941HVwvTK_kFw?guided_help_flow=3" className="fab fa-youtube fa-2x" style={fabLinkStyle}> </a>
        </div>
          <div className='container'>
            {/* <div className='row'>
              <ul>
              <li>
                <Link to='/faq'><span style={{padding: '1rem', float: 'left', color: 'black' }}>Faq</span></Link>
              </li>
              <li>
                <Link to="/nlp"><span style={{padding: '1rem', float: 'left', color: 'black' }}>NLP</span></Link>
              </li>
              </ul>
            </div> */}
          </div>
          <div style={copyRight}>
              <p>
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