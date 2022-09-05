import React from 'react'
import Card from '../utilities/Card'

const Game = ({ cards, onclick }) => {
    const cardsGrid = cards.map((card) => (
        <Card name={card.name} image={card.src} key={card.id} onClick={onclick}/>
    ))
    return <div style={ContainerStyle}>{cardsGrid}</div>
}

const ContainerStyle = {
    justifyContent: 'center',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 290px))',
}

export default Game