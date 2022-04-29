import { Fragment } from "react";
import Hand from "../hand";

import "./style.scss"

function Decision(props: any){
    const { player, 
            playAgain, 
            result,
            enemy } = props;

    return(
        <Fragment>
        <div className="decision">
            <Hand hand={player}/>
            <Hand hand={enemy}/>
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