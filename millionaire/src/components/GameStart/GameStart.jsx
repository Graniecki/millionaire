/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import hand from '../images/hand.png';
import './GameStart.css';

export const GameStart = () => {
  return (
    <div className="game-start">
      <div className="hand">
        <img src={hand} alt="hand" />
      </div>
      <div className="frame">
        <h1 className="title">
          Who wants to be a millionaire?
        </h1>
        <div className="button">
          <span>Start</span>
        </div>
      </div>
    </div>
  );
};
