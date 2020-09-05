import React from 'react';
import { Link } from 'react-router-dom';

const background = {
    backgroundColor: '#e5e5e5'
}

function PreRegister(){
    return (
        <>
        <div style={background}>
            <div className="container" style={{paddingTop: '3rem'}}>
                <h2><strong>Let’s start finding you Funding opportunities today!</strong></h2>
                <br/>
                <h3><strong>A few quick words</strong> before we start your onboarding at <em>Grant Us Funding.</em></h3>
                <br/>
                <br/>
                <p style={{fontSize: '30px'}}>By getting all of the necessary details of both who you and your organization are,
                        what you need, and significant
                        details regarding your project, we can serve you direct and specific results.
                        It may take some time to address all of these questions, but the time spent will yield many more
                        opportunities, and
                        ultimately save you and your firm hours of effort. </p>
                <br/>
                <br/>
                <ul style={{fontSize: '28px', listStylePosition: 'inside'}}>
                    <li>Don’t worry if you need to stop after completing a section, as all the data will be saved
                </li>
                <br/>
                <li>If you want to share more about your organization or project, don’t hesitate to add that information on
                    page ##.
            </li>
                <br/>
                <li>We’re excited to help you find the funding you need with our smooth and efficient process!
            </li>
                <br/>
            </ul>
        </div>
        <div className="container" style={{fontSize: '18px', textAlign: 'center', paddingBottom: '3rem'}}>
            <Link to="/register">
                <span className='bluePreRegBtn'>Let's Go!</span>
            </Link>
        </div>
        </div>
        </>
    )
}

export default PreRegister;