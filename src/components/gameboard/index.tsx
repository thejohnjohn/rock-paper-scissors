import { useContext } from 'react';
import { GameContext } from '../../pages/original';
import { useNavigate } from 'react-router-dom';
import Hand from '../hand';

import './style.scss';

interface IGameboard {
  hands: string[];
}

const Gameboard = ({ hands }: IGameboard) => {
  const { score, setScore } = useContext(GameContext);

  const navigate = useNavigate();

  return (
    <div className='gameboard'>
      {
        hands.map((hand: string, key: number) => {
          return (
            <Hand key={key} hand={hand} action={() => { 
              setScore(score + 1); 
              console.log(score);
              navigate('/chosen-hands');
            }} />
          )
        })
      }
    </div>
  )
}

export default Gameboard;
