import { Fragment } from "react";
import Hand from "../hand";

import "./style.scss"

function Decision(props: any){
    const { player, 
            playAgain, 
            result,
            enemy } = props;

    const whityBorderz = {
        borderRadius: '100%',
        boxShadow: `0px 0px 0px 30px rgba(255, 255, 255,0.12),
        0px 0px 0px 60px rgba(255, 255, 255,0.09),
        0px 0px 0px 90px rgba(255, 255, 255,0.05)`
    }

    let pWin = undefined;
    let eWin = undefined;

    if(result === 'YOU LOSE')
        eWin = whityBorderz;
    
    if(result === 'YOU WIN')
        pWin = whityBorderz;

    return(
        <Fragment>
            <div className="decision">
                <Hand style={pWin} hand={player}/>
                <Hand style={eWin} hand={enemy}/>
            </div>
            <div className="result-ctn">
                <span className="result">{result}</span>
                <button className="play-again"
                        onClick={playAgain} >
                        PLAY AGAIN
                </button>
            </div>
        </Fragment>
    );
}

export default Decision;