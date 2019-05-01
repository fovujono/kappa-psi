import React, { Component } from "react";
import moment from 'moment';
import "../Today/Today.css";

class Today extends Component {
  constructor() {
    super();
    this.state = {
      date: moment()
        .format("dddd, MMMM Do, YYYY ")
        .toString(),
      time: moment()
        .format("LT")
        .toString()
    };
  }

  componentDidMount = () => {
    this.tick = setInterval(
      () =>
        this.setState({
          time: moment()
            .format("LT")
            .toString()
        }),
      1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  render() {
    return (
      <div className="today-container">
        <div className="header">
          Today is:
          <h1>{this.state.date}</h1>
          <h2>Time: </h2>
          {this.state.time}
        </div>
        <div className="today-content">
          <div className="event">Your events will be here</div>
        </div>

        <button className="add-button">Add event</button>
      </div>
    );
  }
}

export default Today;
