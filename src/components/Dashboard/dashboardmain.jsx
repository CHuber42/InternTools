import React from 'react';
import DashNavbar from './dashnav';
import DashboardSidebar from './dashboardsidebar';

const dash = {
  backgroundColor: '#e5e5e5',
  position: 'relative',
}

const background = {
  backgroundColor: '#e5e5e5',
  position: 'absolute',
  marginLeft: '10rem'
}

const DashTitle = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '48px',
  color:'#000000',
  marginLeft: '3.5rem',
  paddingTop: '2rem'
}

const projectBoxOne = {
  height: '100%',
  borderRadius: '5rem',
  backgroundColor: '#FFFFFF',
  margin:'1rem' 
}

const projectBoxTwo = {
  height: '80%',
  borderRadius: '5rem',
  backgroundColor: '#FFFFFF',
  margin:'1rem' 
}

const rowFormatting = {
  height: '25rem', 
  marginTop: '3rem', 
  marginLeft: '2rem',
  width: '87.6vw',
  marginRight: '0px'
}

const projectTitleHeader = {
  fontSize: '2rem',
  marginLeft: '2rem',
  fontFamily: 'Roboto',
  fontWeight: 'bold'
}

function DashMain(){
  return(
    <>
    <DashboardSidebar/>
    <div style={background}>
        <h1 style={DashTitle}>Dashboard</h1>
        <div style={dash}>

          {/* DASHBOARD TOP ROW */}

          <div className="row" style={rowFormatting}>
            
            <div style={projectBoxOne} className="col-md-5">
              <span style={projectTitleHeader}>8 Projects</span>
            </div>

            <div className='col-md-3'>
              <span style={projectTitleHeader}>PROJECT 1</span>
              <div style={projectBoxTwo}>
              </div>
            </div>

            <div className='col-md-3'>
              <span style={projectTitleHeader}>PROJECT 2</span>
              <div style={projectBoxTwo}>
              
              </div>
            </div>

          </div>

          {/*END DASHBOARD TOP ROW */}

          {/* DASHBOARD 2ND ROW */}
          
          <div className="row" style={rowFormatting}>
            <div style={projectBoxOne} className="col-md-5">
              <span style={projectTitleHeader}>Your Grant Matches</span>
            </div>
            <div className='col-md-6'>
              <span style={projectTitleHeader}>Admins and Co-Admins</span>
              <div style={projectBoxTwo}>

              </div>
            </div>  
          </div>
          {/* END DASHBOARD 2ND ROW */}


          {/* WATCHED GRANTS AND OPPORTUNITIES */}
          <div className="row" style={rowFormatting}>
            <div style={projectBoxOne} className="col-md-11">
              <span style={projectTitleHeader}>Watched Grants and Opportunities</span>
            </div>
          </div>
          {/* END WATCHED GRANTS AND OPPORTUNITIES */}

          {/* APPLIED FOR GRANTS AND OPPORTUNITIES */}
          <div className="row" style={rowFormatting}>
            <div style={projectBoxOne} className="col-md-11">
              <span style={projectTitleHeader}>Applied-For Grants and Opportunities</span>
            </div>
          </div>
          {/* END APPLIED FOR GRANTS AND OPPORTUNITIES */}

          {/* CALENDAR */}
          {/* END CALENDAR */}


        </div>
      </div>     
    </>
  )
}

export default DashMain;