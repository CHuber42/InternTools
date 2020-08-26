import React from 'react';
import image from '../img/header-image.svg';

function Banner() {

  const headerStyle = {
    width: '100%',
  }

  const heroStyle = {
    position: 'absolute',
    zIndex: '2',
    top: '65vh',
    width: '50rem',
    height: '11rem',
    backgroundColor: 'rgba(11,45,86,0.4)',
    fontFamily: 'Rhodium Libre',
    fontSize: '3rem',
    lineHeight: '5.125rem',
    color: '#FFFFFF',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
    paddingLeft: "2vw",
  }

  const dreamStyle = {
    position: 'absolute',
    zIndex: '2',
    top: '5.375rem',
    left: '8rem',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontWeight: '200',
    fontSize: '4.5rem',
    lineHeight: '5.125rem',
    letterSpacing: '0.05em',
    color: '#FFFFFF',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  }

  return (
    <>
      <img src={image} style={headerStyle} alt=''/>   
      <div style={heroStyle}>
            <p>We believe in</p>
          <div style={dreamStyle}>
            <p>YOUR DREAMS</p>
        </div>
      </div>
    </>
  )
};

export default Banner;