import React from 'react';
import CheckMarkImage from '../../img/tick-mark-pic.svg';
import EducationalIcon from '../../img/schoolIcon1.svg';

function IndividualFreeTrial(){
    return (
        <>   
        <div className="container justify-content-center">
            <div className="spacer-div"></div>
                <div className="free-trial-academic-top-box">
                    <div>
                        <img src={EducationalIcon} alt=""/>
                    </div>
                        <p style={{color: '#FF9900', fontSize: '2em'}}>7-Day Free Trial</p>
                        <p style={{fontSize: '2em', fontWeight: 'bold'}}>Educational Trial</p>
                        <p style={{fontSize: '2em'}}>Plan Details</p>
                    </div>
                    <div className="spacer-div"></div>
                    {/* <!-- <div className="free-trial-academic-box2"> --> */}
                        <div className="center-this">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="price-table-block">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col" style={{backgroundColor: '#5881BE'}} className="column-outline justify-content-center"> <span style={{fontWeight: 'bold', fontSize: '1.5em', color: 'white', textAlign: 'center'}}> Free
                                                    Trial</span></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row"></th>
                                                    <td style={{fontSize: '1.5em', width: '19rem'}} className="column-outline justify-content-center"><span style={{fontWeight: 'bold', textAlign: 'center'}}>FREE </span><br/>for 7 days</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{textAlign: 'right'}}>Users & Projects</th>
                                                    <td className="column-outline" style={{fontSize: '1.5em', fontWeight: 'bold', width: '19rem'}}>1-2</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{textAlign: 'right'}}>Intuitive Selective Grant Matching</th>
                                                    <td className="column-outline">
                                                        <img src={CheckMarkImage} alt=""/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{textAlign: 'right'}}>Grant Tracking</th>
                                                    <td className="column-outline">
                                                        <img src={CheckMarkImage} alt=""/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{textAlign: 'right'}}>Automatic Deadline Reminders</th>
                                                    <td className="column-outline">
                                                        <img src={CheckMarkImage} alt=""/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{textAlign: 'right'}}>Directed Personalized Algorithm</th>
                                                    <td className="column-outline">
                                                        <img src={CheckMarkImage} alt=""/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{textAlign: 'right'}}>Document Library</th>
                                                    <td className="column-outline"></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{textAlign: 'right'}}>CSV & PDF Reports</th>
                                                    <td className="column-outline"></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{textAlign: 'right'}}>CRM program integration (many)*</th>
                                                    <td className="column-outline"></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{textAlign: 'right'}}>Prepopulation of your keywords from prior research/papers </th>
                                                    <td className="column-outline"></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{textAlign: 'right'}}>Mail Program Integration*</th>
                                                    <td className="column-outline"></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{textAlign: 'right'}}>Additional Customization to your existing Software</th>
                                                    <td className="column-outline"></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" style={{textAlign: 'right'}}>Calendars</th>
                                                    <td className="column-outline"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="center-this">
                                        <div className="f-size-28" >
                                            <p style={{fontSize: '1.5em', fontWeight: 'bold', lineHeight: '1.5em'}}>What you’ll get, and what to look
                                        forward to:</p>
                                            <p style={{fontSize: '24px'}}>With your <span style={{fontWeight: 'bold'}}>7-Day Free Trial,</span> you get a chance to jump right
                                        in
                                        and
                                        start exploring with our powerful set
                                        of tools. <br/><br/>
                                        • Find Funding <br/><br/>
                                        • Get Basic Details <br/><br/>
                                        • Create a Profile to be used in our Directed Personalized Algorithm <br/><br/>
                                        • At the end of your no-cost, no-obligation
                                        trial, you can choose to Upgrade, allowing you to continue where you left off and start using the
                                        full
                                        power of our
                                        essential features. <br/><br/> </p>
                                            <p style={{fontStyle: 'italic'}}>
                                        (*Limited to first 5 results per query, 5 retroactive edits of search parameters allowed per
                                        Project.
                                        Both are Unlimited
                                        after upgrade to a paid plan.)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default IndividualFreeTrial;