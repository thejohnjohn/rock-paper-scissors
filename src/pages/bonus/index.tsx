import { Fragment, useState} from "react";

import Score from "../../components/score";
import Hand from "../../components/hand";
import Rules from "../../components/rules";
import Decision from "../../components/decision";

import './style.scss';

import { BONUS_HANDTYPE } from "../../constants/constants";

function Bonus(){

    const [decide, setDecision] = useState(true);
    const [choosedHand, setHand] = useState('');

    if(decide){
        return(
            <Fragment >
                <Score gameModeLogo={'logo-bonus'}/>
                <div className="gameboard-bonus">
                    {
                        BONUS_HANDTYPE.map((item: string, key: number) =>{
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
            <Score gameModeLogo={'logo-bonus'}/>
            <Decision player={choosedHand}
                      enemy={'paper'}
                      result={`YOU WIN`}
                      playAgain={(e: any) =>{
                          setDecision(!decide)
                      }}/>
            <Rules />          
        </Fragment>    
    )
}

export default Bonus;