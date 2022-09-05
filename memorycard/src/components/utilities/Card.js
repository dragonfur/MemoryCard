import React from 'react'
import '../stylesheets/Card.css'

const Card = ({ image, name, onClick }) => {  
    return (
        <div style={CardStyle} onClick={onClick} name={name} className='card'>
            <img src={image} style={ImgStyle} alt={name} name={name}/>
            <div style={NameStyle} name={name}>
                {name}
            </div>
        </div>
    )
}

const CardStyle = {
    boxSizing: 'border-box',
    display: 'grid',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '.5rem',
    height: '330px',
    margin: '1rem',
    borderRadius: '3.5%',
    padding: '2rem',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderWidth: '3px',
    borderStyle: 'solid',
    borderImage: 'linear-gradient(315deg, #FDBABA, lightblue, #fff) 1',
}

const ImgStyle = {
    height: '250px',
    width: "185px",
    borderRadius: '3.5%',
}

const NameStyle = {
    fontSize: '1.5em'
}

export default Card