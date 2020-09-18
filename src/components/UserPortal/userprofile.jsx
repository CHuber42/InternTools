import React from 'react';

const background = {
    height: '100vh',
    backgroundColor: '#e5e5e5',
    margin: 'auto',
    textAlign: 'center',
    padding: '1rem',
}

function UserProfile(){
    return(
        <>
            <div style={background}>
                <p style={{fontSize: '28px', fontFamily: 'Roboto', fontWeight: 'bold'}}>User Profile Coming Soon</p>
            </div>
        </>
    )
}

export default UserProfile;