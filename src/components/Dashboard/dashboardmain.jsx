import React from 'react';

const DashTitle = {
  position: 'absolute',
  width: '233px',
  height: '56px',
  left: '333px',
  top: '154px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '48px',
  lineHeight: '56px',
  color:'#000000',
}

const projectBox = {
  
}

function DashMain(){
  return(
    <>
      <h1 style={DashTitle}>Dashboard</h1>
        <div style={projectBox}>

      </div>
    </>
  )
}

export default DashMain;