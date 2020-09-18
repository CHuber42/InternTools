import React from 'react';
import Accordion from './accordion';
import CancellationsAndRefunds from './faqcancellationsandrefunds';
import WhatIsNLP from './faqwhatisnlp';
import GrantProbabilityScore from './faqgrantprobabilityscore';
import TeamMembers from './faqteammembers';
import TeamAdmins from './faqteamadmins';
import RestoreOrDeleteYourData from './faqrestoreordeletedata';
import SettingsAndSignup from './faqsettingsandsignup';
import SecurityAndPrivacy from './faqsecurityandprivacy';
import PlansAndUpgrades from './faqplansandupgrades';
import PaymentAndBilling from './faqpaymentsandbilling';
import CreateAndDeleteAccount from './faqcreateanddeleteaccounts';
import ShareYourData from './faqshareyourdata';
import ExportYourData from './faqexportyourdata';

const background = {
    backgroundColor: '#e5e5e5'
}

const faqStyle = {
  display: 'flex',
  paddingLeft: '5rem',
}

 const sectionHeader = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '45px',
  lineHeight: '75px',
  color: '#000000',
  margin: '30px 0 10px 10px',
}

const faqLeft = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '48px',
  lineHeight: '56px',
  letterSpacing: '0.1em',
  color: '#000000',
}

const faqRight = {
  paddingTop: '1rem',
  paddingLeft: '4rem',
  width: '60%',
}

const searchStyle = {
    borderRadius: '.3rem',
    height: '100%',
    width: '100%'
}

const magGlassStyle = {
    height: '100%',
    borderRadius: '.3rem',
    marginLeft: '-15%',
    border: 'none',
}

function Faq() {
    return(
        <>
            <div style={background}> 
            <div className='container'>
            <section style={faqStyle}> 
                <div className="col-sm-6"> 
                    <div style={faqLeft}> 
                        <h2 style={{textAlign: 'center', padding: '1rem'}}>FREQUENTLY ASKED <br/> QUESTIONS</h2> 
                    </div>                 
                </div>             
                <div className="col-sm-6"> 
                    <div style={faqRight}> 
                        <form method="get" action=""> 
                            <div className="tb"> 
                                <div className="nav-item">
                                    <input style={searchStyle} type="text" placeholder="Search Faq..."/>
                                    <button className='fas fa-search fa-sm' style={magGlassStyle} type='submit'/>
                                </div>                                     
                            </div>                                                      
                        </form>                         
                    </div>                 
                </div>             
            </section>
            <div>     
            
            <h1 style={sectionHeader}>Accounts & Billing</h1>
                <Accordion title="Cancellations & Refunds" content={CancellationsAndRefunds}/>
                <Accordion title="Create & Delete Accounts" content={CreateAndDeleteAccount}/>
                <Accordion title="Payments & Billing" content={PaymentAndBilling}/>
                <Accordion title="Plans & Upgrades" content={PlansAndUpgrades}/>
                <Accordion title="Security & Privacy" content={SecurityAndPrivacy}/>            
                <Accordion title="Settings & Sign Up" content={SettingsAndSignup}/>

                <h1 style={sectionHeader}>Your Data</h1>
                <Accordion title="Restore or Delete Your Data" content={RestoreOrDeleteYourData}/>
                <Accordion title="Share Your Data" content={ExportYourData}/>          
                <Accordion title="Export Your Data" content={ShareYourData}/>

                <h1 style={sectionHeader}>Teams & Admins</h1>
                <Accordion title="Team Admins" content={TeamAdmins}/>
                <Accordion title='Team Members' content={TeamMembers}/>

                <h1 style={sectionHeader}>Our Technology</h1>       
                <Accordion title="What is NLP?" content={WhatIsNLP}/>
                <Accordion title="Grant Probability Score" content={GrantProbabilityScore}/>
            </div> 
        </div>      
    </div>   
    </>
    )
}

export default Faq;