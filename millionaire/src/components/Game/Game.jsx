/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Game.css';

import moneys from '../../data/moneys.json';
import questionAnswer from '../../data/questionAnswer.json';

export const Game = ({ setEndGame, setWinMoney }) => {
  const [userAttempts, setUserAttempts] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionBlock, setQuestionBlock] = useState(
    questionAnswer.find((question) => question.id === questionNumber),
  );
  const { trueAnswers } = questionBlock;
  const numberOfTrueAnswers = trueAnswers.length;

  const selectVariant = (event) => {
    const { parentElement } = event.currentTarget;

    if (userAttempts <= numberOfTrueAnswers) {
      event.currentTarget.classList.add('selected');
      setUserAttempts(userAttempts + 1);
    }

    if (userAttempts === numberOfTrueAnswers) {
      const selectedVariants = [...parentElement.querySelectorAll('.selected')];

      // setTimeout(() => {
      //   selectedVariants.forEach((variant) => {
      //     trueAnswers.some((answer) => answer === variant.dataset.value)
      //       ? variant.classList.add('correct')
      //       : variant.classList.add('wrong');
      //   });

      //   setQuestionNumber(questionNumber + 1);
      // }, 2500);

      // setTimeout(() => {
      //   setQuestionNumber(questionNumber + 1);
      // }, 2000);
    }
  };

  return (
    <div className="game">
      <main className="questions">
        <article className="question">
          <h1>{questionBlock.question}</h1>
        </article>
        <article className="variants">
          {questionBlock.variants.map((variant, index) => (
            <button
              key={questionBlock.variantLetters[index]}
              type="button"
              data-value={variant}
              className={classNames({
                variant: true,
              })}
              onClick={selectVariant}
            >
              <span>
                {variant}
              </span>
            </button>
          ))}
        </article>
      </main>
      <aside className="money-scale">
        <div className="scale">
          {moneys.map((object) => (
            <div
              key={object.money}
              className="money"
            >
              <span>{`$${object.money}`}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

Game.propTypes = {
  setEndGame: PropTypes.func.isRequired,
  setWinMoney: PropTypes.func.isRequired,
};
