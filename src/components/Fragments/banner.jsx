import React from 'react';
import image from '../../img/NewBanner.png';

function Banner() {

  // const heroStyle = {
  //   marginTop: '24vw',
  //   width: '40vw',
  //   height: '9.5vw',
  //   backgroundColor: 'rgba(11,45,86,0.4)',
  //   fontFamily: 'Rhodium Libre',
  //   fontSize: '3rem',
  //   lineHeight: '5.125rem',
  //   color: '#FFFFFF',
  //   textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
  //   paddingLeft: "2vw",
  // }

  // const dreamStyle = {
  //   left: '8rem',
  //   fontFamily: 'Roboto',
  //   fontStyle: 'italic',
  //   fontWeight: '200',
  //   fontSize: '4.5rem',
  //   lineHeight: '5.125rem',
  //   letterSpacing: '0.05em',
  //   color: '#FFFFFF',
  //   textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  // }

  const background = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    height: '40vw',
  }

  return (
    <>
    <div style={background}>
      {/* This exists as a bounding element for other elements to position based off of
      <br/
      <img src={image} style={headerStyle} alt=''/>   
      <div style={heroStyle}>
            <p>We believe in</p>
          <div style={dreamStyle}>
            <p>YOUR DREAMS</p>
        </div>
      </div> */}
    </div>
    </>
  )
};

export default Banner;