import React from 'react';
import schoolIcon1 from '../img/schoolIcon1.svg';
import smallbusiness1 from '../img/smallbusiness1.svg';
import govicon from '../img/govicon.svg';
import IndividualFreeTrial from './FreeTrials/individualtrial';
import SmallMedFreeTrial from './FreeTrials/smallmedtrial';
import LargeFreeTrial from './FreeTrials/largetrial';
import EssentialFeatures from './Fragments/essentialfeatures';

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



var nextFragment = "";

function FreeTrial() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  return (
    <>
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
        <div className="row" style={{maxWidth: '99vw'}}>
          <div className="col-md-1"/>
          <div className="col-md-2" onClick={() => {nextFragment=<IndividualFreeTrial/>; forceUpdate();}}>
            <img style={{cursor: 'pointer', marginTop: '1rem'}} src={schoolIcon1} alt="school icon"/>
            <p style={optionType}>Educational Funding</p>
            <p>Public & Private Schools, Colleges & Universities</p>
          </div>
          <div  className="col-md-2"/>
          <div className="col-md-2" onClick={() => {nextFragment=<SmallMedFreeTrial/>; forceUpdate();}}>
            <img style={{cursor: 'pointer'}} src={smallbusiness1} alt="small business icon"/>
            <p style={optionType}>Small & Medium Business Funding</p>
            <p>Profit / Non-Profit Organizations & Buisnesses</p>
          </div>
          <div className="col-md-2"/>
          <div className="col-md-2" onClick={() => {nextFragment=<LargeFreeTrial/>; forceUpdate();}}>
            <img style={{cursor: 'pointer'}} src={govicon} alt="small gov icon"/>
            <p style={optionType}>Government Contract Funding</p>
            <p>Small to Large Scale Projects: All forms of Needs From Single to Ongoing Contracts</p>  
          </div>
          <div className="col-md-1"/>
        </div>
        {nextFragment}
        <EssentialFeatures/>
      </div>
    </>
  )
};

export default FreeTrial;

