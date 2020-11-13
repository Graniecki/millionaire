/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

import React from 'react';
import PropTypes from 'prop-types';
import './GameOver.css';

export const GameOver = ({ finalScore }) => {
  return (
    <div className="game-over">
      <h1>
        {finalScore}
      </h1>
    </div>
  );
};

GameOver.propTypes = {
  finalScore: PropTypes.string.isRequired,
};
