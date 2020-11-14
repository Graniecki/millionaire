/* eslint-disable import/prefer-default-export */

import React from 'react';
import PropTypes from 'prop-types';
import hand from '../../images/hand.png';
import './GameOver.css';

export const GameOver = ({ finalScore, setStart, setEndGame }) => {
  const tryAgain = () => {
    setStart(true);
    setEndGame(false);
  };

  return (
    <div className="game-over">
      <div className="hand">
        <img src={hand} alt="hand" />
      </div>
      <div className="frame">
        <p className="total">
          Total score:
        </p>
        <h1 className="title">
          {`$${finalScore} earned`}
        </h1>
        <button
          type="button"
          className="button"
          onClick={tryAgain}
        >
          <span>Try again</span>
        </button>
      </div>
    </div>

  );
};

GameOver.propTypes = {
  finalScore: PropTypes.string.isRequired,
  setStart: PropTypes.func.isRequired,
  setEndGame: PropTypes.func.isRequired,
};
