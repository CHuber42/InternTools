import React from 'react';
import image from '../../img/NewBanner.png';

function Banner() {

  const background = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    height: '40vw',
  }

  return (
    <>
      <div style={background}></div>
    </>
  )
};

export default Banner;