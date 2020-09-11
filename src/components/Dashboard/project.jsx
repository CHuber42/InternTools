import React from 'react';

const projectTitle = {
    marginLeft: '2rem',
    fontFamily: 'Roboto',
}

const subtitle = {
    marginLeft: '2rem',
    fontFamily: 'Roboto'
}

function Project(props){
    return(
        <>
            <h2 style={projectTitle}>{props.title}</h2>
            <span style={subtitle}>{props.manager}</span>
        </>
    )
}

export default Project;