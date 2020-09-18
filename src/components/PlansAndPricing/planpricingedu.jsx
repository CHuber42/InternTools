import React from 'react';
import CheckMarkIMG from '../../img/tick-mark-pic.svg';
import EduIcon from '../../img/schoolIcon1.svg';
import './planpricing.css';
import {Link} from 'react-router-dom';

const buttonGreen = {
    backgroundColor: '#27ad1d',
    border: 'none',
    color: '#FFFFFF',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '24px',
    boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25)',
    width: '12vw',
    height: '2rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    marginLeft: '4.5rem',
    marginRight: '4.5rem',
    borderRadius: '5rem',
    paddingBottom: '2.5rem',
}

const planTypes = {
    fontWeight: 'bold', 
    fontSize: '1.5em', 
    color: 'white', 
    textAlign: 'center'
}

function EduPlanPricing(){
    return(
        <>
        <hr/>
        <div style={{backgroundColor: '#e5e5e5'}}>
            <div className="container">    
                <div className="pricingFragmentTopSpacer"> 
                    <img src={EduIcon} alt="Educational Icon"/>
                    <br/>
                    <br/> 
                    <h3>EDUCATION: Pricing & Plans
                        <br/>
                        For Profit and Non-Profit Organizations</h3>
                    <br/>
                    <h3><strong>Making Funding Affordable.</strong></h3>
                    <Link to="/freetrial">
                        <span className="planPriceBtnOrange">7-Day Free Trial</span> 
                    </Link>
                    <br/>
                    <br/>
                    <p>Try us free for 7 days. No credit card required.</p>  
                </div>     
                <div className="price-table-wrapper"> 
                    <div className="pricing-table1-box"> 
                        <div className="price-table-block"> 
                            <table style={{marginBottom: '0px'}} className="table table-striped"> 
                                <thead> 
                                    <tr> 
                                        <th scope="col"></th> 
                                        <th scope="col" className="headStyle"><span style={planTypes}>Essential Start</span></th> 
                                        <th scope="col" className="headStyle"><span style={planTypes}>Enterprise</span></th>                        
                                    </tr>                     
                                </thead>                 
                                <tbody> 
                                    <tr> 
                                        <th scope="row"></th> 
                                        <td className="columnOutline"><span className="priceStyle">[TBD]/Month</span> <br/>Billed Annually<br/> or<br/> [TBD] <br/>billed monthly</td> 
                                        <td className="columnOutline"><span className="priceStyle">Custom Pricing</span></td> 
                                    </tr>                     
                                    <tr> 
                                        <th scope="row" className="rowTitles">Users & Projects</th> 
                                        <td className="columnOutline">1-5</td> 
                                        <td className="columnOutline">10+</td> 
                                    </tr>                     
                                    <tr> 
                                        <th scope="row" className="rowTitles">Intuitive Selective <br/>Grant Matching</th> 
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                    </tr>                     
                                    <tr> 
                                        <th scope="row" className="rowTitles">Grant Tracking</th> 
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                    </tr>                     
                                    <tr> 
                                        <th scope="row" className="rowTitles">Automatic Deadline<br/> Reminders</th> 
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                    </tr>                     
                                    <tr> 
                                        <th scope="row" className="rowTitles">Document Library</th> 
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                    </tr>                     
                                    <tr> 
                                        <th scope="row" className="rowTitles">CSV & PDF Reports</th> 
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                    </tr>                     
                                    <tr> 
                                        <th scope="row" className="rowTitles">CRM program<br/> integration (many)*</th> 
                                        <td className="columnOutline"></td> 
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                    </tr>                     
                                    <tr> 
                                        <th scope="row" className="rowTitles"> Prepopulation of keywords<br/> from prior research/papers</th> 
                                        <td className="columnOutline"></td> 
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                    </tr>                     
                                    <tr> 
                                        <th scope="row" className="rowTitles">Mail Program Integration*</th> 
                                        <td className="columnOutline"></td> 
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                    </tr>                     
                                    <tr> 
                                        <th scope="row" className="rowTitles">Custom Reports</th> 
                                        <td className="columnOutline"></td> 
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                    </tr>                     
                                    <tr> 
                                        <th scope="row" className="rowTitles">Personalized<br/>Deadline Calendar</th> 
                                        <td className="columnOutline"></td> 
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                    </tr>                     
                                    <tr> 
                                        <th scope="row" className="rowTitles">Task List<br/>& Reminders</th> 
                                        <td className="columnOutline"></td> 
                                        <td className="columnOutline">
                                            <img src={CheckMarkIMG} alt="Checkmark"/>
                                        </td>                         
                                    </tr>                     
                                    <tr> 
                                        <th scope="row"></th> 
                                        <td className="columnOutline"> 
                                            <a style={buttonGreen} href="/">Buy</a>
                                        </td>                         
                                        <td className="columnOutline"> 
                                            <a style={buttonGreen} href="/">Quote</a> 
                                        </td>                         
                                    </tr>                     
                                </tbody>                 
                            </table>             
                        </div>         
                    </div>     
                </div>
            </div>
        </div>
        <hr style={{marginTop: '3rem'}}/>
        </>
    )
}

export default EduPlanPricing;