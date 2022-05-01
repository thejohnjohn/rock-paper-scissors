import { Fragment, useState} from "react";

import Score from "../../components/score";
import Hand from "../../components/hand";
import Rules from "../../components/rules";
import Decision from "../../components/decision";

import './style.scss';

import { BONUS_HANDTYPE, BONUS_RULES } from "../../constants/constants";
import cpuDecision from "../../utils/cpu";

function Bonus() {

    const [score, setScore] = useState(0);
    const [playerHand, setPlayerHand] = useState('');
    const [enemyHand, setEnemyHand] = useState('');
    const [whoWin, setWhoWin] = useState([' ', 0]);
    const [decide, setDecision] = useState(true);

    return(
        <Fragment >
            <Score gameModeLogo={'logo-bonus'} score={score}/>
            {decide ? (
                <div className="gameboard-bonus">
                {
                    BONUS_HANDTYPE.map((item: string, key: number) =>{
                        return(
                            <Hand key={key} hand={item} 
                                action={ (e: any)=> { 
                                    setPlayerHand(item);
                                    setEnemyHand(cpuDecision(BONUS_HANDTYPE)); 
                                    setWhoWin(BONUS_RULES[playerHand][enemyHand]);
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
                                setDecision(!decide)
                            }}/>
                )
            }
            <Rules modeRules={'image-rules-bonus'}/>
            </Fragment>
        )
}

export default Bonus;