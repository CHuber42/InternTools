import React from 'react';

const adminTitle = {
    marginLeft: '2rem'
}

const subtitle = {
    marginLeft: '2rem'
}

function Admins(props){
    return(
        <>
            <img src=''></img>
            <h2 style={adminTitle}>{props.name}</h2>
            <p style={subtitle}>{props.title}</p>
        </>
    )
}

export default Admins;