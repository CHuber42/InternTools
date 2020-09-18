import React from 'react';
import CheckMarkIMG from '../../img/tick-mark-pic.svg';
import SmbIcon from '../../img/smallbusiness1.svg';
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
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
    borderRadius: '5rem',
    paddingBottom: '2.5rem',
}

const planTypes = {
    fontWeight: 'bold', 
    fontSize: '1.5em', 
    color: 'white', 
    textAlign: 'center'
}

function SmbPlanPricing(){
    return(
        <>
        <hr/>
        <div style={{backgroundColor: '#e5e5e5'}}>
            <div className="container">    
                <div className="pricingFragmentTopSpacer"> 
                    <img src={SmbIcon} alt="Small and Medium Business Icon"/>
                    <br/>
                    <br/> 
                    <h3>SMALL AND MEDIUM BUSINESS: Pricing and Plans</h3>
                    <br/>
                    <h3><strong>Making Funding Affordable.</strong></h3>
                    <Link to="/freetrial">
                        <span className="planPriceBtnOrange">7-Day Free Trial</span> 
                    </Link> 
                    <br/>
                    <br/>
                    <p>Try us free for 7 days. No credit card required.</p>  
                </div>     

                <div style={{marginLeft: '-3.125rem'}} className="pricing-table1-box">
                    <div className="price-table-block">
                        <table style={{marginBottom: '0rem'}} className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col" className="headStyle"><span style={planTypes}>Bootstrap</span></th>
                                    <th scope="col" className="headStyle"><span style={planTypes}>Startup</span></th>
                                    <th scope="col" className="headStyle"><span style={planTypes}>Growth</span></th>
                                    <th scope="col" className="headStyle"><span style={planTypes}>Unicorn</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="rowTitles"></th>
                                    <td className="columnOutline"><span className="priceStyle">[TBD]/Month</span> <br/>Billed Annually<br/> or<br/> [TBD] <br/>billed monthly</td>
                                    <td className="columnOutline"><span className="priceStyle">[TBD]/Month</span> <br/>Billed Annually<br/> or<br/> [TBD] <br/>billed monthly</td>
                                    <td className="columnOutline"><span className="priceStyle">[TBD]/Month</span> <br/>Billed Annually<br/> or<br/> [TBD] <br/>billed monthly</td>
                                    <td className="columnOutline"><span className="priceStyle">Your needs are unique <br/> so let's chat</span></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="rowTitles">Members & Projects</th>
                                    <td className="columnOutline">5</td>
                                    <td className="columnOutline">10+</td>
                                    <td className="columnOutline">10-20</td>
                                    <td className="columnOutline">unlimited</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="rowTitles">Intuitive Selective Grant Matching</th>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline"></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="rowTitles">Grant Tracking</th>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline"></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="rowTitles">Automatic Deadline Reminders</th>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline"></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="rowTitles">Document Library</th>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline"></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="rowTitles">CSV & PDF Reports</th>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline"></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="rowTitles">CRM program integration (many)*</th>
                                    <td className="columnOutline"></td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline"></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="rowTitles">CSV & PDF Reports</th>
                                    <td className="columnOutline"></td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline"></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="rowTitles">Prepopulation of your keywords from prior research/papers</th>
                                    <td className="columnOutline"></td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline"></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="rowTitles">Mail Program Integration*</th>
                                    <td className="columnOutline"></td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline"></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="rowTitles">Custom Reports</th>
                                    <td className="columnOutline"></td>
                                    <td className="columnOutline"></td>
                                    <td className="columnOutline">
                                        <img src={CheckMarkIMG} alt="Checkmark "/>
                                    </td>
                                    <td className="columnOutline"></td>
                                </tr>
                                <tr>
                                    <th scope="row" className="rowTitles"></th>
                                    <td className="columnOutline">
                                        <a style={buttonGreen} href="/">Buy</a>
                                    </td>
                                    <td className="columnOutline">
                                        <a style={buttonGreen} href="/">Buy</a>
                                    </td>
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
        <hr style={{marginTop: '3rem'}}/>
        </>
    )
}

export default SmbPlanPricing;