import React from 'react';
import './score.css';

const Score = () => {
    return(
        <div className="scoreboard">
            <div className="name-of-the-game">
                <p>ROCK</p>
                <p>PAPER</p>
                <p>SCISSORS</p>
            </div>
            <div className="scores">
                <h5>SCORE</h5>
                <h3>12</h3>
            </div>
        </div>);
};

export default Score;

