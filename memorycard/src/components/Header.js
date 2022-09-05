import React from 'react'

const Header = () => {  
    return (
        <header style={headerStyle}>
            <h1>
                Memory Game - Filipino Food Edition
            </h1>
        </header>
    )
}

const headerStyle = {
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#54BAB9'
}

export default Header