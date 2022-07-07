import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const FeedbackOptions = ({ btnTypes, onIncrement }) => (
  <>
    <ul className={s.list}>
      {btnTypes.map((btnType, index) => {
        return (
          <li key={index} className={s.item}>
            <button
              type="button"
              className={s.button}
              onClick={() => onIncrement(btnType)}
            >
              {btnType}
            </button>{' '}
          </li>
        );
      })}
    </ul>
  </>
);
FeedbackOptions.propType = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
export default FeedbackOptions;
