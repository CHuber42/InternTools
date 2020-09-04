import React from 'react';

const blueBox = {
  height: '21rem',
  width: '100%',
  backgroundColor: '#5881BE'
}

const corona = {
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '30px',
  lineHeight: '35px',
  color: '#FFFFFF'
}

const covid19 = {
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '96px',
  lineHeight: '112px',
  color: '#FFFBFB',
}

const responsePlan = {
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '42px',
  color: '#FFFFFF', 
}

function CovidPlan() {
    return (
        <>
        <div className="container">
            <hr/>
            <div className="row">

            {/* LEFT SIDE */}
            <div className="col-md-6 col-sm-12">    
                <div style={blueBox}>
                <div style={corona}>
                    <br/>
                    <br/>
                    <p>Coronavirus Disease 2019</p>
                </div>
                <div style={covid19}>
                    <p>COVID-19</p>
                </div>
                <div style={responsePlan}>
                    <p>RESPONSE PLAN</p>
                </div>   
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-md-6 col-sm-12">
                <div>
                    <h4>SOLUTIONS TO KEEP YOUR BUSINESS IN MOTION DURING AND AFTER COVID-19</h4>
                    <p>
                        As the world works to contain the spread of COVID-19, our team at
                        Grant Us Funding™ is adapting to this rapidly eveolving situation, implementing satety measures, and
                        taking care of out employees, our partners and our clients. <br/> <br/>
                        We’re helping firms make a seamless transtition to remote business with our software gathering secure
                        digital solutions, backed by our experienced teams and world class protocols to find you funding. <br/> <br/>
                        Discover new ways to get your organization or business funded and moving forward. 
                    </p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default CovidPlan;