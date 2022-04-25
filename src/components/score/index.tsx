import './style.scss';

const Score = () => {
    return(
        <div className="scoreboard">
            <img src="http://localhost:3000/assets/logo.svg" 
                 className="name-of-the-game" 
                 alt="Logo of the game mode"/>
            <div className="scores">
                <h5>SCORE</h5>
                <h3>12</h3>
            </div>
        </div>);
};

export default Score;

