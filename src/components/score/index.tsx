import './style.scss';

const Score = ({ gameModeLogo, score }: any) => {
    
    return(
        <div className="scoreboard">
            <img src={`http://localhost:3000/assets/${gameModeLogo}.svg`} 
                 className="name-of-the-game" 
                 alt="Logo of the game mode"/>
            <div className="scores">
                <h5>SCORE</h5>
                <h3>{score}</h3>
            </div>
        </div>);
};

export default Score;

