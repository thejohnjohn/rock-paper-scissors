import {
    Link,
} from "react-router-dom";

import './styles.scss'

function Pages() {
  return (
    <div className="select-mode-panel">
        <h1>SELECT MODE</h1>
        <div className='game-mode-buttons'>
            <Link to="original" className='button' type='button'>ORIGINAL</Link>
            <Link to="bonus" className='button' type='button'>BONUS</Link>
        </div>
    </div>
  );
}

export default Pages;