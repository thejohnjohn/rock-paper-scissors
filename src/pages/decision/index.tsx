import Hand from "../../components/hand";

function Decision(){
    return(
        <div className="decision">
            <div className="picked-hand">
                <Hand hand={"paper"}/>
            </div>
            <span className="result"></span>
            <button className="play-again"></button>
            <div className="picked-hand">
                <Hand hand={"rock"}/>
            </div>
        </div>
    );
}

export default Decision;