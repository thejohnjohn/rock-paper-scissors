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
    const [whoWin, setWhoWin] = useState('');
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
                                action={ (e: Event)=> {
                                    let cpu = cpuDecision(ORIGINAL_HANDTYPE);
                                    setScore( 
                                        ( score + ORIGINAL_RULES[item][cpu][1] ) >= 0
                                        ? score + ORIGINAL_RULES[item][cpu][1]
                                        : 0
                                    );
                                    setWhoWin(ORIGINAL_RULES[item][cpu][0]);
                                    setPlayerHand(item);
                                    setEnemyHand(cpu);
                                    setDecision(!decide);
                                }}/>
                        )
                    })
                }
                </div>
            ):
                (<Decision player={playerHand}
                            enemy={enemyHand}
                            result={whoWin}
                            playAgain={(e: Event) =>{
                                setDecision(!decide)
                            }}/>
                )
            }
            <Rules modeRules={'image-rules'}/>
            </Fragment>
        )
}

export default Original;