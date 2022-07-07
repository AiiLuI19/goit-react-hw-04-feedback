import PropTypes from 'prop-types';
import React from 'react';
import s from './Statistics.module.css';
const Statistics = ({ good, bad, neutral, total, positivePercentage }) => (
  <div>
    <ul className={s.listWrap}>
      <li key="good">
        Good: <span>{good}</span>
      </li>
      <li key="neutral">
        Neutral: <span>{neutral}</span>
      </li>
      <li key="bad">
        Bad: <span>{bad}</span>
      </li>

      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
