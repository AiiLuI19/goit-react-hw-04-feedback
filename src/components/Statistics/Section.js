import PropTypes from 'prop-types';
import React from 'react';
import s from './Statistics.module.css';
const Section = ({ title, children }) => (
  <div>
    <h2>{title} </h2>
    <div className={s.listWrap}>{children}</div>
  </div>
);
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
