/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

import React from 'react';
import PropTypes from 'prop-types';
import './GameOver.css';

export const GameOver = ({ winMoney }) => {
  return (
    <div className="game-over">
      <h1>
        {winMoney}
      </h1>
    </div>
  );
};

GameOver.propTypes = {
  winMoney: PropTypes.string.isRequired,
};
