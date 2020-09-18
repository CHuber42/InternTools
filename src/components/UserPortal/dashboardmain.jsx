// import React, { useState, useRef, Component } from 'react'
// import GrantEntry from './grantentry'
// import Admins from './admins.jsx';
// const he = require('he');
import React, { Component } from 'react'
import Project from './project.jsx';
import CanvasJSReact from '../../canvasjs.react';


const CanvasJSChart = CanvasJSReact.CanvasJSChart;
// CanvasJSReact.addColorSet ('greenShades', ['#e5e5e5']);

const chartData = {
  animationEnabled: true,
  title: {
    text: "Your Grant Matches"
  },
  subtitles: [{
    text: "Matches",
    verticalAlign: "center",
    fontSize: 24,
    dockInsidePlotArea: true
  }],
  data: [{
    type: "doughnut",
    showInLegend: true,
    indexLabel: "{name}: {y}",
    yValueFormatString: "'$'#,###",
    dataPoints: [
      // BLUE
      { name: "Gov - Won", y: 1 },

      { name: "Gov - Lost", y: 1 },
      // YELLOW
      { name: "Gov - Pending", y: 1 },
      // RED
      { name: "Private Orgs - Won", y: 1 },

      { name: "Private Orgs - Pending", y: 1 },
      // Teal
      { name: "Private Orgs - Lost", y: 1 },
      // Purple
    ]
  }],
  colorSet: "colorSet1",
};
// Update Y Values to calculate percentages from user input data

const background = {
  backgroundColor: '#e5e5e5',
  position: 'relative',
  marginLeft: '10rem',
  // marginTop: '-100vh'
  // overflow: 'scroll'
};

const DashTitle = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '48px',
  color:'#000000',
  marginLeft: '3.5rem',
  paddingTop: '2rem'
};

const projectBoxOne = {
  height: 'fit-content',
  borderRadius: '2rem',
  backgroundColor: '#FFFFFF',
  margin:'1rem' 
};

const projectBoxTwo = {
  height: 'fit-content',
  borderRadius: '2rem',
  backgroundColor: '#FFFFFF',
  margin:'1rem' 
};

const rowFormatting = {
  height: 'fit-content', 
  marginTop: '3rem', 
  marginLeft: '2rem',
  width: '87.6vw',
  marginRight: '0px'
};

const projectTitleHeader = {
  fontSize: '2rem',
  marginLeft: '2rem',
  fontFamily: 'Roboto',
  fontWeight: 'bold',
};

const columnOutline = {
  border: '2px solid #e5e5e5',
  textAlign: 'center',
  fontFeatureSettings: 'tnum on; onum on',
  fontWeight: 'bold'
};


const testUser = {
  name: 
    "Test User",
  
  grantMatches: 
    [{}, {}, {}],
  
  matchedGrants: 
    [],

  adminsAndCoadmins: 
    [{picture: '', name: "Frank Bochowski", title: "Admin"}, {picture: '', name: 'Tom Bombadil', title:'Co-Admin'}, {picture: "", name: "Bob Horatio", title: "Co-Admin"}],
  
  projects: 
    [{title: "Project One", manager: "Test Manager One", events: [], key: "1"}, {title: "Project Two", manager: "Test Manager Two", events: [], key: "2"}, {title: "Project Three", manager: "Test Manager Three", events: [], key:"3"}],

  watchedGrants: 
    [{name: "Test Grant One", submissiondate: "July 4th 1784", amount: "$1000", notes: "This is the first test grant"}, {name: "Test Grant Two", submissiondate: "July 4th 1784", amount: "$1000", notes: "This is the second test grant"}],
  
  appliedGrants: 
    [{name: "Test Grant One", submissiondate: "July 4th 1784", amount: "$1000", notes: "This is the first applied for grant", status: "won"}, {name: "Test Grant Two", submissiondate: "July 4th 1784", amount: "$1000", notes: "This is the second applied for grant", status: 'pending'}, {name: "Test Grant three", submissiondate: "July 4th 1784", amount: "$1000", notes: "This is the third applied for grant", status: 'lost'}],
}

const pending = {
  backgroundColor: '#FFA500',
  border: 'none',
  color: '#FFFFFF',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '24px',
  boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25)',
  width: '15rem',
  borderRadius: '5rem',
};

const lost = {
  backgroundColor: '#ad180a',
  border: 'none',
  color: '#FFFFFF',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '24px',
  boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25)',
  width: '15rem',
  borderRadius: '5rem',
}

const won = {
  backgroundColor: '#128049',
  border: 'none',
  color: '#FFFFFF',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '24px',
  boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25)',
  width: '15rem',
  borderRadius: '5rem',
}



function determineColor(status){
  switch(status){
    case 'won':
      return won;
    case 'lost':
      return lost;
    case 'pending':
      return pending;
    default:
      return {};
  }
}

// JSON.dumps(stuff)
        
class DashMain extends Component{
  constructor(props){
    super()
  }


  
  render(){  

      // const testUser = JSON.parse(he.decode(this.props.userData));
       
      // const grantMatches = testUser.matchedGrants;
      // const matchedGrants = testUser.matchedGrants;
      // const adminsAndCoadmins = testUser.adminsAndCoadmins;
      const accountName = testUser.name;
      const projects = testUser.projects;
      const watchedGrants = testUser.watchedGrants;
      const appliedGrants = testUser.appliedGrants;
  return(
    <>
    
    <div id="dashmain" style={background}>
        <h1 style={DashTitle}>{accountName}</h1>


          {/* DASHBOARD TOP ROW */}

          <div className="row" style={rowFormatting}>
            
            <div style={projectBoxOne} className="col-md-5">
              <span style={projectTitleHeader}>8 Projects</span>
              {/* MAP PROJECT SUMMARY DATA */}
              <div >
                {projects.map((project) =>
                  <Project 
                    key={project.key}
                    title={project.title}
                    manager={project.manager}
                  />
                )}
              </div>
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
              {/* <span style={projectTitleHeader}>Your Grant Matches</span> */}
              <span style={{padding: '1rem'}}><CanvasJSChart options = {chartData}/></span>
            </div>
            <div className='col-md-6'>
              <span style={projectTitleHeader}>Admins and Co-Admins</span>
              <div style={projectBoxTwo}>
                <p style={{fontSize: '28px', fontFamily: 'Roboto', fontWeight: 'bold'}}>Coming Soon</p>
                {/* {adminsAndCoadmins.map((adminsAndCoadmins) =>
                    <Admins 
                      picture={adminsAndCoadmins.picture}
                      name={adminsAndCoadmins.name}
                      title={adminsAndCoadmins.title}
                    />
                  )} */}
              </div>
            </div>  
          </div>
          {/* END DASHBOARD 2ND ROW */}


           {/* NEWEST GRANT OPPORTUNITIES */}
           <div className="row" style={rowFormatting}>
            <div style={projectBoxOne} className="col-md-11">
              <span style={projectTitleHeader}>Newest Grants Since Your Last Login</span>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Grant Id</th>
                    <th>Title</th>
                    <th>Agency</th>
                    <th>Post Date</th>
                    <th>Close Date</th>
                    <th>Min Award</th>
                    <th>Max Award</th>
                    <th>Track Grant</th>
                  </tr>
                </thead>
                {/* <tbody>
                  {pagedGrants.map((grant) =>
                            <GrantEntry
                                key={grant.key}
                                id={grant.id}
                                title={grant.title}
                                agency={grant.agency}
                                postDate={grant.postDate}
                                closeDate={grant.closeDate}
                                awardMin={grant.awardMin}
                                awardMax={grant.awardMax}
                            />
                        )}
  
                </tbody> */}
                
                <p style={{fontWeight: 'bold', fontSize: '24px', fontFamily: 'Roboto', textAlign: 'center'}}>Coming Soon</p>
              </table>
            </div>
          </div>
          {/* END NEWEST GRANTS */}

          {/* WATCHED GRANTS AND OPPORTUNITIES */}
          <div className="row" style={rowFormatting}>
            <div style={projectBoxOne} className="col-md-11">
              <span style={projectTitleHeader}>Watched Grants and Opportunities</span>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Submission Date</th>
                    <th>Amount</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {watchedGrants.map((grant) =>
                    <>
                    <tr>
                      <td style={columnOutline}>{grant.name}</td>
                      <td style={columnOutline}>{grant.submissiondate}</td>
                      <td style={columnOutline}>{grant.amount}</td>
                      <td style={columnOutline}>{grant.notes}</td>
                    </tr>
                    </>
                  )}
  
                </tbody>            
              </table>
            </div>
          </div>
          {/* END WATCHED GRANTS AND OPPORTUNITIES */}

          {/* APPLIED FOR GRANTS AND OPPORTUNITIES */}
          <div className="row" style={rowFormatting}>
            <div style={projectBoxOne} className="col-md-11">
              <span style={projectTitleHeader}>Applied-For Grants and Opportunities</span>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Submission Date</th>
                    <th>Amount</th>
                    <th>Notes</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appliedGrants.map((grant) =>
                    <>
                    <tr>
                      <td style={columnOutline}>{grant.name}</td>
                      <td style={columnOutline}>{grant.submissiondate}</td>
                      <td style={columnOutline}>{grant.amount}</td>
                      <td style={columnOutline}>{grant.notes}</td>
                      <td style={columnOutline}><span style={determineColor(grant.status)}>{grant.status}</span></td>
                    </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {/* END APPLIED FOR GRANTS AND OPPORTUNITIES */}

          {/* CALENDAR */}
          {/* END CALENDAR */}

 
      </div>     
    </>
  )
}}

export default DashMain;