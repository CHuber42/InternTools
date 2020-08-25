import React from 'react';

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
        <div>
              <a href="https://www.facebook.com/Grant-Us-Funding-104687287971432" class="fab fa-facebook fa-2x" style={fabLinkStyle}/>
              <a href="#" class="fab fa-twitter fa-2x" style={fabLinkStyle}/>
              <a href="#" class="fab fa-instagram fa-2x" style={fabLinkStyle}/>
              <a href="#" class="fab fa-linkedin fa-2x" style={fabLinkStyle}/>
              <a href="#" class="fab fa-youtube fa-2x" style={fabLinkStyle}/>
          </div>
          <hr/>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <h4></h4>
                <a href="#"></a>
              </div>
              <div className='col'>
                <h4></h4>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div style={copyRight}>
              <p>
                &copy; 2019-{new Date().getFullYear()}, Grant Us Funding 
                <br/>
                All Rights Reserved | <a style={links} href="#">Terms of Service</a> | <a style={links} href="#">Privacy Policy</a> 
              </p>
          </div>
        </div>
    </>
  )
}

export default Footer;