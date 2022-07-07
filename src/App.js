import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from './components/Statistics/FeedbackOptions';
import Notification from './components/Statistics/Notification';
import Section from 'components/Statistics/Section';
import s from './components/Statistics/Statistics.module.css';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  increment = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  // addGood = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };
  // addNeutral = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // };
  // addBad = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  // };

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, currentValue) => {
      return (total += currentValue);
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    // const { good, neutral, bad } = this.state;
    const types = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.wrap}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            // onGood={this.addGood}
            // onNeutral={this.addNeutral}
            // onBad={this.addBad}
            btnTypes={types}
            onIncrement={this.increment}
          />
        </Section>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <>
            <Section title={'Statistics'}>
              <Statistics
                // good={good}
                // neutral={neutral}
                // bad={bad}
                state={this.state}
                types={types}
                total={total}
                positivePercentage={percentage}
              />
            </Section>
          </>
        )}
      </div>
    );
  }
}
export default App;
