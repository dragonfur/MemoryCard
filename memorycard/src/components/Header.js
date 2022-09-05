import React from 'react'

const Header = () => {  
    return (
        <header style={headerStyle}>
            <h1>
                Memory Game
            </h1>
        </header>
    )
}

const headerStyle = {
    height: '10vh',
    backgroundColor: '#ECCCB2',
    display: 'flex',
    alignItems: 'center',
}

export default Header