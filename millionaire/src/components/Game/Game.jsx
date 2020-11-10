/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Game.css';

import { VariantButton } from '../VariantButton';

export const Game = ({ moneys, questionAnswer }) => {
  // const [cash, setCash] = useState('0');
  const [answerAttempts, setAnswerAttempts] = useState(1);
  const [questionNumber, setQuestionNumber] = useState('1');
  const [questionBlock, setQuestionBlock] = useState(
    questionAnswer.find((question) => question.id === questionNumber),
  );

  const selectVariant = (event, value) => {
    if (value === questionBlock.trueAnswer) {
      setQuestionNumber(`${+questionNumber + 1}`);
      setQuestionBlock(
        questionAnswer.find((question) => question.id === `${+questionNumber + 1}`),
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
            />
          ))}
        </article>
      </main>
      <aside className="money-scale">
        <div className="scale">
          {moneys.map((money) => (
            <div
              key={money}
              className="money"
            >
              <span>{`$${money}`}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

Game.propTypes = {
  moneys: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  questionAnswer: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
