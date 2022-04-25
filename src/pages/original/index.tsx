import { Fragment } from "react";

import Score from "../../components/score";
import Hand from "../../components/hand";

import { ORIGINAL_HANDTYPE } from "../../constants/constants";

function Original(){
    return (
        <Fragment>
            <Score />
            <div className="gameboard">
                {
                    ORIGINAL_HANDTYPE.map((item: string, key: number) =>{
                        return(<Hand key={key} hand={item}/>)
                    })
                }              
            </div>
        </Fragment>
    );
}

export default Original;