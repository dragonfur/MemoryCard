import React from 'react'

const Score = ({ currentScore, bestScore }) => {
    return (
        <div style={ScoreboardStyle}>
            <div style={DisplayScoresStyle}>
                <div className="currentScore" style={CurrentScoreStyle}>
                    Score: {currentScore}
                </div>
                <div className='bestScore' style={BestScoreStyle}>
                    Best: {bestScore}
                </div>
            </div>
        </div>
    )
}

const ScoreboardStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem'
}

const DisplayScoresStyle = {
    display: 'flex',
    width: '25vw',
    justifyContent: 'space-evenly',
}

const CurrentScoreStyle = {
    padding: '1rem',
    paddingBottom: '0',
    fontSize: '3vh'
}

const BestScoreStyle = {
    padding: '1rem',
    paddingBottom: '0',
    fontSize: '3vh'
}

export default Score