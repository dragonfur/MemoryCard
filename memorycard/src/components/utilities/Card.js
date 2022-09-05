import React from 'react'

const Card = ({ image, name, onClick }) => {  
    return (
        <div style={CardStyle} onClick={onClick} name={name}>
            <img src={image} style={ImgStyle} alt={name} name={name}/>
            <div style={NameStyle} name={name}>
                {name}
            </div>
        </div>
    )
}

const CardStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '.5rem',
    width: '15vw',
    height: '330px',
    backgroundColor: '#DEB6AB',
    margin: '1rem',
    borderRadius: '3.5%',
}

const ImgStyle = {
    height: '27.5vh',
    width: "10vw",
    paddingBottom: '1.5vh',
}

const NameStyle = {
    fontSize: '2.75vh'
}

export default Card