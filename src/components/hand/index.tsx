const Hand = (props: any) =>{
    const { hand } = props;
    return (
        <img src={`http://localhost:3000/assets/hand-buttons/${hand.toLowerCase()}-btn.svg`} 
             className="handtype"
             alt={`${hand.toLowerCase() || "type"} hand`}/>
    );
};

export default Hand;