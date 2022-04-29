import { Link } from 'react-router-dom';

import './style.scss'

const Rules = (props: any) =>{
    const { backButton } = props;

    return(
        <footer className='rules'>
            <Link to={'/'}>
            <img src={`http://localhost:3000/assets/back-arrow.svg`} 
                 className='back-to-game-options'
                 onClick={backButton}
                 alt='White button who back to the select game mode page.'/>
            </Link>
            <button className='show-the-rules'
                    onClick={()=>{console.log('Da rules')}}>RULES</button>
        </footer>
    );
}

export default Rules;