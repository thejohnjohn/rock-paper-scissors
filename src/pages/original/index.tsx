import { ReactNode, useState, createContext } from 'react';

import Score from '../../components/score';
import Rules from '../../components/rules';

import './style.scss';

type Game = {
  score?: number;
  selectedHand?: string;
}

interface IGame {
  childrenNode?: ReactNode;
}

const GameContext = createContext<any>({});

function Original(game: IGame) {
  const [score, setScore] = useState(0)
  const [selectedHand, setSelectedHand] = useState('');

  return (
    <GameContext.Provider value={{score, setScore, selectedHand, setSelectedHand}}>
      <Score gameModeLogo={'logo'} score={score}/>
        { game.childrenNode }
      <Rules modeRules={'image-rules'}/>
    </GameContext.Provider>
  )
}

export { Original, GameContext };
