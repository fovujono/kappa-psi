import React, { Component } from "react";
import moment from "moment";
import "../Today/Today.css";

class Today extends Component {
  render() {
    return (
      <div className="today-container">
        {/* use moment to get date and time */}
        <div className="header">
          Today is:
          <h1>
            {moment()
              .format("dddd, MMMM Do, YYYY ")
              .toString()}
          </h1>
          <h2>
            Time:{" "}
            {moment()
              .format("LT")
              .toString()}
          </h2>
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
