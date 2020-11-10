/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

import React, { useState } from 'react';
import './VariantButton.css';

import classNames from 'classnames';
import PropTypes from 'prop-types';

export const VariantButton = ({
  variant,
  selectVariant,
  trueAnswer,
  numberOfAnswers,
  answerAttempts,
  setAnswerAttempts,
}) => {
  const [correct, setCorrect] = useState(false);
  const [selected, setSelected] = useState(false);
  const [wrong, setWrong] = useState(false);

  const select = (event) => {
    if (answerAttempts > numberOfAnswers) {
      return;
    }

    const { value } = event.target.dataset;

    setAnswerAttempts((current) => current + 1);
    setSelected(true);

    if (answerAttempts === numberOfAnswers) {
      if (value === trueAnswer) {
        setTimeout(() => {
          setCorrect(true);
          setSelected(false);
        }, 2500);
      }

      setTimeout(() => {
        setCorrect(false);
        setSelected(false);
        setWrong(false);
        selectVariant(event, value);
      }, 5000);
    }
  };

  return (
    <>
      <button
        type="button"
        data-value={variant}
        onClick={select}
        className={classNames({
          variant: true,
          correct,
          selected,
          wrong,
        })}
      >
        <span data-value={variant}>
          {variant}
        </span>
      </button>
    </>
  );
};

VariantButton.propTypes = {
  variant: PropTypes.string.isRequired,
  selectVariant: PropTypes.func.isRequired,
  trueAnswer: PropTypes.string.isRequired,
  numberOfAnswers: PropTypes.number.isRequired,
  answerAttempts: PropTypes.number.isRequired,
  setAnswerAttempts: PropTypes.func.isRequired,
};
