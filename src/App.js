import { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from './components/Statistics/FeedbackOptions';
import Notification from './components/Statistics/Notification';
import Section from 'components/Statistics/Section';
import s from './components/Statistics/Statistics.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = e => {
    switch (e) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  function receivingPositiveFeedbackPercentage() {
    return Math.round((good / total) * 100);
  }

  return (
    <div className={s.wrap}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          btnTypes={['good', 'neutral', 'bad']}
          onIncrement={increment}
        />
      </Section>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={receivingPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   increment = type => {
//     this.setState(prevState => ({
//       [type]: prevState[type] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     return Object.values(this.state).reduce((total, currentValue) => {
//       return (total += currentValue);
//     }, 0);
//   }

//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   }

//   render() {
//     const types = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className={s.wrap}>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions btnTypes={types} onIncrement={this.increment} />
//         </Section>
//         {total === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <>
//             <Section title={'Statistics'}>
//               <Statistics
//                 state={this.state}
//                 types={types}
//                 total={total}
//                 positivePercentage={percentage}
//               />
//             </Section>
//           </>
//         )}
//       </div>
//     );
//   }
// }
// export default App;
