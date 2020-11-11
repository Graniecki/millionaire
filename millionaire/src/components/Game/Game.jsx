/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Game.css';

import moneys from '../../data/moneys.json';
import questionAnswer from '../../data/questionAnswer.json';
import { VariantButton } from '../VariantButton';

export const Game = ({ setEndGame, setWinMoney }) => {
  const [answerAttempts, setAnswerAttempts] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionBlock, setQuestionBlock] = useState(
    questionAnswer.find((question) => question.id === questionNumber),
  );

  const selectVariant = () => {
    if (questionNumber === 12) {
      setWinMoney('1,000,000');
      setEndGame(true);
    } else {
      setQuestionNumber(questionNumber + 1);
      setQuestionBlock(
        questionAnswer.find((question) => question.id === questionNumber + 1),
      );
    }
  };

  return (
    <div className="game">
      <main className="questions">
        <article className="question">
          <h1>{questionBlock.question}</h1>
        </article>
        <article className="variants">
          {questionBlock.variants.map((variant) => (
            <VariantButton
              key={variant}
              variant={variant}
              selectVariant={selectVariant}
              trueAnswer={questionBlock.trueAnswer}
              numberOfAnswers={questionBlock.numberOfAnswers}
              answerAttempts={answerAttempts}
              setAnswerAttempts={setAnswerAttempts}
              setEndGame={setEndGame}
            />
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
