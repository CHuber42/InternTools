import React, {Component} from 'react';

const background = {
  textAlign: 'center',
  background: '#e5e5e5',
  padding: '1rem',
  minHeight: '100vh'
//   marginTop: '-100vh'
}

// const projectBoxOne = {
//     height: 'fit-content',
//     borderRadius: '2rem',
//     backgroundColor: '#FFFFFF',
//     margin:'1rem' 
// };

// const UserName = {
//     fontSize: '2rem',
//     marginLeft: '2rem',
//     fontFamily: 'Roboto',
//     fontWeight: 'bold',
// };
  
// const TestData = {
//     name: "User McUserson",
//     organization: "University of Oregon",
//     pathway: "Education",
//     plan: "Essential",
//     teams: [{name: "Team One", projects: [{name: "Project One"}, {name: "Project Two"}]}, {name: "Team One", projects: [{name: "Project One"}, {name: "Project Two"}]}],
//     email: "UserMcuserson@testdata.com"
// }

// const list = {
//     listStyleType: 'none'
// }

// const Username = TestData.name;
// const Organization = TestData.organization;
// const Pathway = TestData.pathway;
// const Plan = TestData.plan;
// const Teams = TestData.teams;
// const Email = TestData.email;

class TeamManagement extends Component {
    constructor(){
        super()
    }

    render(){
        return (
            <>
            <div style={background}>
            <p style={{fontSize: '28px', fontFamily: 'Roboto', fontWeight: 'bold'}}>Team Manager Coming Soon</p>

                {/* <p>Team Managment</p> */}

                {/* SUMMARY */}

                {/* <div style={projectBoxOne, background}>
                    <span style={UserName}>{Username}</span>
                    <p>{Organization}</p>
                    <p>{Pathway}</p>
                    <p>{Plan}</p>

                    <p style={UserName}>Teams and Projects</p> */}
                    
                    {/*MAP PROJECT SUMMARIES */}

                    {/* {Teams.map((team) =>
                        <div>
                            <span>{team.name}</span>
                            <ul style={list}>
                                {team.projects.map((project) =>
                                   <li>
                                       {project.name}
                                   </li> 
                                )}
                            </ul>
                        </div> 
                    )}
                </div> */}
        
            </div>
            </>
        )
    }
}

export default TeamManagement;