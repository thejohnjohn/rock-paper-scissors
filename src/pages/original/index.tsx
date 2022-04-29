import { Fragment, useState } from "react";

import Score from "../../components/score";
import Hand from "../../components/hand";
import Rules from "../../components/rules";
import Decision from "../../components/decision";

import './style.scss';

import { ORIGINAL_HANDTYPE, ORIGINAL_RULES } from "../../constants/constants";
import cpuDecision from "../../utils/cpu";

function Original() {

    const [decide, setDecision] = useState(true);
    const [choosedHand, setHand] = useState('');

    let enemy: string = cpuDecision(ORIGINAL_HANDTYPE);

    if(decide){
        return(
            <Fragment >
                <Score gameModeLogo={'logo'}/>
                <div className="gameboard">
                    {
                        ORIGINAL_HANDTYPE.map((item: string, key: number) =>{
                            return(
                                <Hand key={key} hand={item} 
                                    action={(e: any)=> { 
                                        setHand(item); 
                                        setDecision(!decide)}}/>
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
            <Score gameModeLogo={'logo'}/>
            <Decision player={choosedHand}
                      enemy={enemy}
                      result={ORIGINAL_RULES[choosedHand][enemy]}
                      playAgain={(e: any) =>{
                          setDecision(!decide)
                      }}/>
            <Rules />          
        </Fragment>    
    )
}

export default Original;