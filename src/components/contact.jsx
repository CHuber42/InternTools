import React from 'react';
import Banner from './banner';
import EducationIcon from '../img/schoolIcon1.svg';
import SmallBusinessIcon from '../img/smallbusiness1.svg';
import GovIcon from '../img/govicon.svg';

function Contact() {
    return (
        <>
            <Banner />

            <div className="container"> 
                <div className="statement d-none d-md-block"> 
                    <h1>FIND YOUR FUNDING TODAY</h1> 
                </div>     
                <div className="find-fund-white d-none d-sm-block d-md-none"> 
                    <h1>FIND YOUR FUNDING TODAY</h1> 
                </div>     
                <div className="find-fund-white d-block d-sm-none" style={{fontSize: '28px'}}> 
                    <h1>FIND YOUR FUNDING TODAY</h1> 
                </div>     
                <div className="spacer-div d-none d-md-block"></div>     
                <div className="row row-center"> 
                    <div className="col-md-4"> 
                        <img src={EducationIcon} alt="school icon"/> 
                    </div>         
                    <div className="col-md-4"> 
                        <button type="button" className="btn-fun" data-toggle="modal" data-target="#contactModal" data-whatever="@Academic">Request
                                info@Academic
                        </button>             
                    </div>         
                    <div className="col-md-4"> 
                        <a href="eduplans.html"><button className="btn-plans">See Plans & Pricing</button></a> 
                    </div>         
                </div>     
                <div className="row row-center"> 
                    <div className="col-md-4"> 
                        <img src={SmallBusinessIcon} alt="smb icon"/> 
                    </div>         
                    <div className="col-md-4"> 
                        <button type="button" className="btn-fun" data-toggle="modal" data-target="#contactModal" data-whatever="@Small">Request
                            info@Small

                            <br/>& Medium Business
                        </button>             
                    </div>         
                    <div className="col-md-4 plans"> 
                        <a href="smbplans.html"><button className="btn-plans">See Plans & Pricing</button></a> 
                    </div>         
                </div>     
                <div className="row row-center"> 
                    <div className="col-md-4"> 
                        <img src={GovIcon} alt="gov icon"/> 
                    </div>         
                    <div className="col-md-4"> 
                        <button type="button" className="btn-fun" data-toggle="modal" data-target="#contactModal" data-whatever="@Gov">Request
                            info@ 

                            <br/>Government Contracting
                        </button>             
                    </div>         
                    <div className="col-md-4 plans"> 
                        <a href="govplans.html"><button className="btn-plans">See Plans & Pricing</button></a> 
                    </div>         
                </div>     
                <div className="spacer-div"></div>     
                <div className="horizontal-rule"></div>     
            </div>

        </>
    )
};

export default Contact;