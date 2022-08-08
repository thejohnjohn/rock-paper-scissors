import { Fragment, useState } from "react";

import Score from "../../components/score";
import Hand from "../../components/hand";
import Rules from "../../components/rules";
import Decision from "../../components/decision";

import './style.scss';

import { ORIGINAL_HANDTYPE, ORIGINAL_RULES } from "../../constants/constants";
import cpuDecision from "../../utils/cpu";


function Original() {

    const [score, setScore] = useState(0);
    const [playerHand, setPlayerHand] = useState('');
    const [enemyHand, setEnemyHand] = useState('');
    const [whoWin, setWhoWin] = useState([' ', 0]);
    const [decide, setDecision] = useState(true);

    return(
        <Fragment >
            <Score gameModeLogo={'logo'} score={score}/>
            {decide ? (
                <div className="gameboard">
                {
                    ORIGINAL_HANDTYPE.map((item: string, key: number) =>{
                        return(
                            <Hand key={key} hand={item} 
                                action={ (e: any)=> { 
                                    setPlayerHand(item);
                                    setEnemyHand(cpuDecision(ORIGINAL_HANDTYPE)); 
                                    setWhoWin(ORIGINAL_RULES[playerHand][enemyHand]);
                                    setScore(score+(whoWin[1] as number));
                                    setDecision(!decide);
                                }}/>
                        )
                    })
                }
                </div>
            ):
                (<Decision player={playerHand}
                            enemy={enemyHand}
                            result={whoWin[0]}
                            playAgain={(e: any) =>{
                                console.log(whoWin)
                                setDecision(!decide)
                            }}/>
                )
            }
            <Rules modeRules={'image-rules'}/>
            </Fragment>
        )
}

export default Original;