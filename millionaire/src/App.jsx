import React, { useState } from 'react';
import './App.css';

import moneys from './data/moneys.json';
import questionAnswer from './data/questionAnswer.json';

import { GameStart } from './components/GameStart';
import { Game } from './components/Game';

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      {!start && (
        <GameStart
          setStart={setStart}
        />
      )}
      {start && (
        <Game
          moneys={moneys}
          questionAnswer={questionAnswer}
        />
      )}
    </div>
  );
}

export default App;
