import React from 'react'
import Card from '../utilities/Card'

const Game = ({ cards, onclick }) => {
    const cardsGrid = cards.map((card) => (
        <Card name={card.name} image={card.src} key={card.id} onClick={onclick}/>
    ))
    return <div style={ContainerStyle}>{cardsGrid}</div>
}

const ContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
}

const DivStyle = {
    display: 'flex',
    justifyContent: 'center',
}

export default Game