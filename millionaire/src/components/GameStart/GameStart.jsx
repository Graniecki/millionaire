/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import hand from '../images/hand.png';
import './GameStart.css';

export const GameStart = ({ setStart }) => {
  return (
    <div className="game-start">
      <div className="hand">
        <img src={hand} alt="hand" />
      </div>
      <div className="frame">
        <h1 className="title">
          Who wants to be a millionaire?
        </h1>
        <button
          type="button"
          className="button"
          onClick={() => setStart(true)}
        >
          <span>Start</span>
        </button>
      </div>
    </div>
  );
};

GameStart.propTypes = {
  setStart: PropTypes.func.isRequired,
};
