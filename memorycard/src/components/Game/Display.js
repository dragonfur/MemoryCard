import React, { useState } from 'react'
import Score from '../utilities/Score'
import Game from './Game'
import { allInfo } from '../utilities/CardInfo'
import uuid from 'react-uuid'

const Display = () => {
    
    const [cardList, setCardList] = useState([...allInfo])
    const [clicked, setClicked] = useState([])
    const [currentscore, setCurrentScore] = useState(0)
    const [bestscore, setBestScore] = useState(0)

    const ShuffleArray = (e) => {
        const cardClicked = e.target.getAttribute('name')
        handleClicked(cardClicked)
        setCardList(cardList.sort(() => Math.random() - 0.5))
        setCardList(cardList.map(el => ({...el, id : uuid() })))
    }

    const handleClicked = (cardClicked) => {
        if (clicked.includes(cardClicked)) {
            resetGame()
        } else {
            setClicked(clicked.concat(cardClicked))
            const newScore = currentscore + 1
            if (newScore >= bestscore) setBestScore(newScore)
            setCurrentScore(newScore)
        }
    }

    const resetGame = () => {
        setCurrentScore(0)
        setClicked([])
    }

    return (
        <>
        <Score currentScore={currentscore} bestScore={bestscore}/>
        <Game cards={cardList} onclick={ShuffleArray}/>
        </>
    )
}

export default Display