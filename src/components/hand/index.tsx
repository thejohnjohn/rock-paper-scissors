import './style.scss';

const Hand = (props: any) =>{
    const { hand, action, style } = props;
    return (
        <img src={`http://localhost:3000/assets/hand-buttons/${hand}-btn.svg`}
            style={style}
            alt={`${hand} hand`}
            onClick={ action }/>
    );
};

export default Hand;
