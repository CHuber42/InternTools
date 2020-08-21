import React from 'react';
import Banner from './banner';

const comingSoon = {
  backgroundColor: '#E5E5E5',
  textAlign: 'center',
  fontFamily: 'Roboto'
}

function PricingPlans() {

  return (
    <>
      <Banner />
      <div style={comingSoon}>
        <h2 style={{marginBottom: '0px', padding: '1rem'}}>Coming Soon!</h2>
      </div>
    </>
  )
};

export default PricingPlans;