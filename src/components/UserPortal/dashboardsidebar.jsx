import React, { Component  } from 'react';
import {Link} from 'react-router-dom';


const text = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    color: '#FFFFFF',
    textShadow: '.1rem .3rem .3rem rgba(0, 0, 0, 0.25)',
}

const linkStyling = {
    marginLeft: '.5rem',
    fontSize: '18px',
    marginTop: '1rem',
    marginBottom: '1rem',
    color: '#FFFFFF'
}

const hrModifiedStyle = {
    marginTop: '0px',
    marginBottom: '0px'
}


 class DashboardSidebar extends Component{
    constructor(){
         super()
         this.state = {height: 0}
    }

    componentDidMount(){
        this.setState({height: document.body.offsetHeight})
    }

    componentDidUpdate(){
        if (document.body.offsetHeight !== this.state.height){
            this.setState({height: document.body.offsetHeight})
        }
    }

    render(){

        const background = {
            backgroundColor: '#959595',
            width: '10rem',
            border: '1px solid #9E9E9E',
            boxShadow: '.1rem .3rem .3rem rgba(0, 0, 0, 0.25)',
            position: 'absolute',
            height: this.state.height,
        }

    return(
        <>
        <div style={background}>

            {/* CONTENTS */}
            <div style={text}>
                <Link to="/dashboard">
                    <p style={linkStyling}>Dashboard</p>
                </Link>

                <hr style={hrModifiedStyle}/>

                <Link to='/projectspage'>
                    <p style={linkStyling}>Projects</p>
                </Link>

                <hr style={hrModifiedStyle}/>
                
                <Link to="/grantsearch">
                    <p style={linkStyling}>Search Grants</p>
                </Link>
                
                <hr style={hrModifiedStyle}/>
                
                <Link to="/teammanagement">
                    <p style={linkStyling}>Team Manager</p>
                </Link>
                
                <hr style={hrModifiedStyle}/>
                
                <Link to="/userprofile">
                    <p style={linkStyling}>Profile</p>
                </Link>
                
                <hr style={hrModifiedStyle}/>
                
                <Link to="/calendar">
                    <p style={linkStyling}>Calendar</p>
                </Link>
                
                <hr style={hrModifiedStyle}/>
                
                <Link to="/referralprogram">
                    <p style={linkStyling}>Referral Program</p>
                </Link>
                
                <hr style={hrModifiedStyle}/>
                
                <Link to="/help">
                <p style={linkStyling}>Help</p>
                </Link>
                
                <hr style={hrModifiedStyle}/>

            </div>
            {/* END CONTENTS */}
            
        </div>
        </>
    )
}}

export default DashboardSidebar;