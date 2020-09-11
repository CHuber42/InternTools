import React from 'react';



const tableFields = {
    border: '.2rem solid ivory',
    fontFamily: 'Roboto',
}

function WatchGrant(){
    // post request to whatever route with 
    // props.id and user.id
}

function GrantEntry(props){

    const btn = {
        backgroundColor: props.color,
        border: 'none',
        color: '#FFFFFF',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '20px',
        boxShadow: '.1rem .5rem .5rem rgba(0, 0, 0, 0.25)',
        width: '8vw',
        height: '2rem',
        borderRadius: '5rem',
    }

    return(
    <>
      <tr>
          <td style={tableFields}>{props.id}</td>
          <td style={tableFields}>{props.title}</td>
          <td style={tableFields}>{props.agency}</td>
          <td style={tableFields}>{props.postDate}</td>
          <td style={tableFields}>{props.closeDate}</td>
          <td style={tableFields}>{props.awardMin}</td>
          <td style={tableFields}>{props.awardMax}</td>
          <td style={tableFields}><button onClick={WatchGrant} style={btn}>{props.content}</button></td>
      </tr>
    </>
    )
}

export default GrantEntry;