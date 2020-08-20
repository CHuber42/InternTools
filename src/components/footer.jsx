import React from 'react';

const footer = {
  display: 'flex',
  position: 'absolute',
  width: '100%',
  height: '71px',
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

function Footer() {
  return (
    <>
      <div style={footer}>
        <div >
              <a href="#" class="fab fa-facebook fa-2x" style={fabLinkStyle}/>
              <a href="#" class="fab fa-twitter fa-2x" style={fabLinkStyle}/>
              <a href="#" class="fab fa-instagram fa-2x" style={fabLinkStyle}/>
              <a href="#" class="fab fa-linkedin fa-2x" style={fabLinkStyle}/>
              <a href="#" class="fab fa-youtube fa-2x" style={fabLinkStyle}/>
          </div>
          <div id="copyright">
              <p>
                Copyright &copy; 2020 Grant Us Funding all rights reserved 
                <br/>
                Terms of Service Privacy Policy
              </p>
          </div>
        </div>
    </>
  )
}

export default Footer;