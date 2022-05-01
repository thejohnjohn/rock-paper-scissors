import ReactDOM from 'react-dom';

import './style.scss'

const Modal = ({ modeRules, close}: any) => {
    return ReactDOM.createPortal(
        <div className="overlay">
            <div className="modal-content">
                <div className='modal-header'>
                    <span>RULES</span>
                    <img src={`http://localhost:3000/assets/icon-close.svg`}
                            className='close-modal'
                            alt={`Close modal.`}
                            onClick={ close }/>
                </div>
                <img src={`http://localhost:3000/assets/${modeRules}.svg`}
                        className='how-to-play'
                        alt={`Shows how to play the game.`}/>
            </div>
        </div>,
        document.getElementById('modal-rules') as HTMLElement);
}

export default Modal;