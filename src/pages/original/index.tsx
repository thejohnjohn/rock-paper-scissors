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

    if(decide){
        return(
            <Fragment >
                <Score gameModeLogo={'logo'} score={score}/>
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
                <Rules />
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Score gameModeLogo={'logo'} score={score}/>
            <Decision player={playerHand}
                      enemy={enemyHand}
                      result={whoWin[0]}
                      playAgain={(e: any) =>{
                          setDecision(!decide)
                      }}/>
            <Rules />
        </Fragment>
    )
}

export default Original;