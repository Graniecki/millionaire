import React, { useState } from 'react';
import './App.css';

import { GameStart } from './components/GameStart';
import { Game } from './components/Game';
import { GameOver } from './components/GameOver';

function App() {
  const [start, setStart] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [finalScore, setFinalScore] = useState('');

  return (
    <div className="App">
      {!start && (
        <GameStart
          setStart={setStart}
        />
      )}
      {start && !endGame && (
        <Game
          setEndGame={setEndGame}
          setFinalScore={setFinalScore}
        />
      )}
      {endGame && (
        <GameOver
          finalScore={finalScore}
          setStart={setStart}
          setEndGame={setEndGame}
        />
      )}
    </div>
  );
}

export default App;
