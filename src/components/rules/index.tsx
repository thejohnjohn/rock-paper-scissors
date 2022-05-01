import { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from './rules-modal/index';

import './style.scss'

const Rules = (props: any) =>{
    const { backButton, modeRules } = props;

    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    return(
        <footer className='rules'>
            <Link to={'/'}>
            <img src={`http://localhost:3000/assets/back-arrow.svg`} 
                 className='back-to-game-options'
                 onClick={backButton}
                 alt='White button who back to the select game mode page.'/>
            </Link>
            { show && <Modal show={show} close={closeModal} modeRules={modeRules}/> }
            <button className='show-the-rules'
                    onClick={openModal}>RULES</button>
        </footer>
    );
}

export default Rules;