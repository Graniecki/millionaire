import React from 'react';
import PropTypes from 'prop-types';
import hand from '../../images/hand.png';
import './GameStart.css';

const GameStart = ({ setStart }) => (
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

export default GameStart;

GameStart.propTypes = {
  setStart: PropTypes.func.isRequired,
};
