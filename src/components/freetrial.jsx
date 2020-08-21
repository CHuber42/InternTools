import React from 'react';
import Banner from './banner';
import schoolIcon1 from '../img/schoolIcon1.svg';
import smallbusiness1 from '../img/smallbusiness1.svg';
import govicon from '../img/govicon.svg';
import IndividualFreeTrial from './individualtrial';
import SmallMedFreeTrial from './smallmedtrial';
import LargeFreeTrial from './largetrial';

const background = {
  backgroundColor: '#E5e5e5',
  textAlign: 'center',
  fontFamily: 'Roboto',
}

const prompt = {
  fontSize: '34px',
  marginBottom: '0px',
  marginTop: '-1%'
}

const hrStyle = {
  margin: '0',
  paddingTop: '2vh',
  paddingBottom: '2vh'
}

const optionType = {
  fontSize: '28px'
}

const spacer = {
}

var nextFragment = "";

function FreeTrial() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  console.log("render", nextFragment)
  return (
    <>
      <Banner />
      <div style={background}>
      
      {/* PROMPT */}
        <div>
          <hr style={hrStyle}/>
          <hr style={hrStyle}/>         
          <p style={prompt}>Seven Day Free Trial! 
          <br/>
          Tell us a little bit about who you are.</p>
          <hr style={hrStyle}/>
        </div> 

        {/* CLICKABLE INPUT */}
        <div className="row">
          <div style={spacer} className="col-md-1"/>
          <div className="col-md-2" onClick={() => {nextFragment=<IndividualFreeTrial/>; forceUpdate();}}>
            <img src={schoolIcon1} alt="school icon"/>
            <p style={optionType}>Individual</p>
          </div>
          <div style={spacer} className="col-md-2"/>
          <div className="col-md-2" onClick={() => {nextFragment=<SmallMedFreeTrial/>; forceUpdate();}}>
            <img src={smallbusiness1} alt="small business icon"/>
            <p style={optionType}>Small or Medium Business</p>
          </div>
          <div style={spacer} className="col-md-2"/>
          <div className="col-md-2" onClick={() => {nextFragment=<LargeFreeTrial/>; forceUpdate();}}>
            <img src={govicon} alt="small gov icon"/>
            <p style={optionType}>Large Business or Institution</p>  
          </div>
          <div style={spacer} className="col-md-1"/>
        </div>
        {nextFragment}
      </div>
    </>
  )
};

export default FreeTrial;

