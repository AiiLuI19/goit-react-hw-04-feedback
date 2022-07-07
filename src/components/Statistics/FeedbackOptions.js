import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const FeedbackOptions = ({ btnTypes, onIncrement }) => (
  <ul className={s.list}>
    {btnTypes.map(btnType => {
      return (
        <li key={btnType} className={s.item}>
          <button
            type="button"
            // data-stat={btnType}
            className={s.button}
            onClick={() => onIncrement(btnType)}
          >
            {btnType}
          </button>
        </li>
      );
    })}
  </ul>
);
FeedbackOptions.propType = {
  btnTypes: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
export default FeedbackOptions;
