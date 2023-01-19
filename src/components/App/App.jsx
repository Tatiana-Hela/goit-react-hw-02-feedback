import { Component } from 'react';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback(name) {
    this.setState(prevState => {
      console.log(prevState);
      return {
        [name]: prevState[name] + 1,
      };
    });
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h2 className={css.title}>Please leave feedback</h2>
        <div className={css.feedbackBlok}>
          <button
            onClick={() => this.leaveFeedback('good')}
            className={css.feedbackItem}
          >
            Good
          </button>
          <button
            onClick={() => this.leaveFeedback('neutral')}
            className={css.feedbackItem}
          >
            Neutral
          </button>
          <button
            onClick={() => this.leaveFeedback('bad')}
            className={css.feedbackItem}
          >
            Bad
          </button>
        </div>
        <div>
          <h2 className={css.title}>Statistics</h2>
          <ul className={css.statisticsList}>
            <li className={css.statisticsItem}>Good: {good}</li>
            <li className={css.statisticsItem}>Neutral: {neutral}</li>
            <li className={css.statisticsItem}>Bad: {bad}</li>
            <li className={css.statisticsItem}>Total: {total}</li>
            <li className={css.statisticsItem}>
              Positive feedback: {positivePercentage}%
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
