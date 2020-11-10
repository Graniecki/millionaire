import React, { useState } from 'react';
import './App.css';

import moneys from './data/moneys.json';
import questionAnswer from './data/questionAnswer.json';

import { GameStart } from './components/GameStart';
import { Game } from './components/Game';
import { GameOver } from './components/GameOver';

function App() {
  const [start, setStart] = useState(false);
  const [endGame, setEndGame] = useState(false);

  return (
    <div className="App">
      {!start && (
        <GameStart
          setStart={setStart}
        />
      )}
      {start && !endGame && (
        <Game
          moneys={moneys}
          questionAnswer={questionAnswer}
          setEndGame={setEndGame}
        />
      )}
      {endGame && (
        <GameOver />
      )}
    </div>
  );
}

export default App;
