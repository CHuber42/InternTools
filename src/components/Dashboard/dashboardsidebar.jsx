import React from 'react';
import {Link} from 'react-router-dom';

const background = {
    background: '#6F6F6F',
    width: '10rem',
    border: '1px solid #9E9E9E',
    boxShadow: '.1rem .3rem .3rem rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    height: '200%'
}

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

function DashboardSidebar(){
    return(
        <>
        <div style={background}>

            {/* CONTENTS */}
            <div style={text}>
                <Link to="/">
                    <p style={linkStyling}>Dashboard</p>
                </Link>

                <hr style={hrModifiedStyle}/>

                <Link to='/'>
                    <p style={linkStyling}>Projects</p>
                </Link>

                <hr style={hrModifiedStyle}/>
                
                <Link to="/">
                    <p style={linkStyling}>Grants</p>
                </Link>
                
                <hr style={hrModifiedStyle}/>
                
                <Link to="/">
                    <p style={linkStyling}>Team</p>
                </Link>
                
                <hr style={hrModifiedStyle}/>
                
                <Link to="/">
                    <p style={linkStyling}>Bookmarks</p>
                </Link>
                
                <hr style={hrModifiedStyle}/>
                
                <Link to="/">
                    <p style={linkStyling}>Profile</p>
                </Link>
                
                <hr style={hrModifiedStyle}/>
                
                <Link to="/">
                    <p style={linkStyling}>Calendar</p>
                </Link>
                
                <hr style={hrModifiedStyle}/>
                
                <Link to="/">
                    <p style={linkStyling}>Referral Program</p>
                </Link>
                
                <hr style={hrModifiedStyle}/>
                
                <Link to="/">
                <p style={linkStyling}>Help</p>
                </Link>
                
                <hr style={hrModifiedStyle}/>
            </div>
            {/* END CONTENTS */}

        </div>
        </>
    )
}

export default DashboardSidebar;