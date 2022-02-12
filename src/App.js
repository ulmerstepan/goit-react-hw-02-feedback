import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    const option = event.currentTarget.textContent;

    this.setState((prevState) => ({ [option]: (prevState[option] += 1) }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <div>
        <section>
          <h2>Please leave feedback</h2>
          <ul>
            {Object.keys(this.state).map((option) => {
              return (
                <li key={option}>
                  <button type="button" onClick={this.onLeaveFeedback}>
                    {option}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2>Statistics</h2>
          {this.countTotalFeedback() !== 0 ? (
            <ul>
              {Object.entries(this.state).map(([key, value]) => {
                return (
                  <li key={key}>
                    <p>
                      {key}: <span>{value}</span>
                    </p>
                  </li>
                );
              })}

              <li>
                <p>
                  Total: <span>{this.countTotalFeedback()}</span>
                </p>
              </li>

              <li>
                <p>
                  Positive feedback:{" "}
                  <span>{this.countPositiveFeedbackPercentage()}%</span>
                </p>
              </li>
            </ul>
          ) : (
            <h3>There is no feedback</h3>
          )}
        </section>
      </div>
    );
  }
}

export default App;
