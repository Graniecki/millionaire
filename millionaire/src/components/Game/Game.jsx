/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import menu from '../../images/Menu.png';
import close from '../../images/Close.png';
import './Game.css';

import moneys from '../../data/moneys.json';
import config from '../../data/config.json';

export const Game = ({ setEndGame, setFinalScore }) => {
  const [menuClose, setMenuClose] = useState(false);
  const [userAttempts, setUserAttempts] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionBlock, setQuestionBlock] = useState(
    config.find((question) => question.id === questionNumber),
  );
  const { trueAnswers } = questionBlock;
  const numberOfTrueAnswers = trueAnswers.length;

  const selectVariant = (event) => {
    const variantButton = event.currentTarget;
    const variantsBlock = variantButton.parentElement;

    if (variantButton.classList.contains('selected')) {
      return;
    }

    if (userAttempts <= numberOfTrueAnswers) {
      variantButton.classList.add('selected');
      setUserAttempts(userAttempts + 1);
    }

    if (userAttempts === numberOfTrueAnswers) {
      const selectedVariants = [...variantsBlock.querySelectorAll('.selected')];

      setTimeout(() => {
        selectedVariants.forEach((variant) => {
          trueAnswers.some((answer) => answer === variant.dataset.value)
            ? (variant.classList.remove('selected'), variant.classList.add('correct'))
            : (variant.classList.remove('selected'), variant.classList.add('wrong'));
        });

        if (selectedVariants.every((variant) => variant.classList.contains('correct'))) {
          setTimeout(() => {
            selectedVariants.forEach((variant) => variant.classList.remove('correct'));
            setUserAttempts(1);
            setQuestionNumber(questionNumber + 1);

            questionNumber === 12
              ? (setEndGame(true), setFinalScore('1,000,000'))
              : setQuestionBlock(
                config.find((question) => question.id === questionNumber + 1),
              );
          }, 2500);
        } else {
          setTimeout(() => {
            const finalScore = moneys.find((cash) => cash.id === (questionNumber - 1));

            setEndGame(true);
            setFinalScore(finalScore ? finalScore.money : '0');
          }, 2500);
        }
      }, 2500);
    }
  };

  return (
    <div className="game">
      <button
        type="button"
        className="menu"
        onClick={() => setMenuClose(true)}
      >
        <img src={menu} alt="menu" />
      </button>
      <main className={classNames({
        questions: true,
        unvisible: menuClose,
      })}
      >
        <article className="question">
          <h1>{questionBlock.question}</h1>
        </article>
        <article className="variants">
          {questionBlock.variants.map((variant, index) => (
            <button
              key={questionBlock.variantLetters[index]}
              type="button"
              data-value={variant}
              className="variant"
              onClick={selectVariant}
            >
              <span className="variant-lettert">
                {questionBlock.variantLetters[index]}
              </span>
              <span className="variant-value">
                {variant}
              </span>
            </button>
          ))}
        </article>
      </main>
      <aside className={classNames({
        'money-scale': true,
        unvisible: !menuClose,
      })}
      >
        <div className="scale">
          {moneys.map((object) => (
            <div
              key={object.money}
              className={classNames({
                money: true,
                'current-question': questionNumber === object.id,
                'earned-money': questionNumber > object.id,
              })}
            >
              <span>{`$${object.money}`}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="close-menu"
          onClick={() => setMenuClose(false)}
        >
          <img src={close} alt="close-menu" />
        </button>

      </aside>
    </div>
  );
};

Game.propTypes = {
  setEndGame: PropTypes.func.isRequired,
  setFinalScore: PropTypes.func.isRequired,
};
