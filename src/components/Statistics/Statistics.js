import PropTypes from 'prop-types';
import React from 'react';
import s from './Statistics.module.css';
const Statistics = ({ types, state, total, positivePercentage }) => (
  <div>
    <ul className={s.listWrap}>
      {types.map(type => (
        <li key={type}>
          {type}: {state[type]}
        </li>
      ))}
      {/* <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li> */}
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
