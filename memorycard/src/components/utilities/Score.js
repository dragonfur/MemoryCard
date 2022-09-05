import React from 'react'

const Score = ({ currentScore, bestScore }) => {
    return (
        <div style={ScoreboardStyle}>
            <div style={DisplayScoresStyle}>
                <div className="currentScore" style={ScoreStyle}>
                    Score: {currentScore}
                </div>
                <div className='bestScore' style={ScoreStyle}>
                    Best: {bestScore}
                </div>
            </div>
        </div>
    )
}

const ScoreboardStyle = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '1rem',
}

const DisplayScoresStyle = {
    display: 'flex',
    width: '25vw',
    justifyContent: 'space-evenly',
    gap: '2rem',
}

const ScoreStyle = {
    fontSize: '1.5em',
    textAlign: 'center'
}

export default Score