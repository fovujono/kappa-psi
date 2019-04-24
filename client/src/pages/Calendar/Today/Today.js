import React, { Component } from "react";
import "../Today/Today.css";

class Today extends Component {
  render() {
    return (
      <div className="today-container">
      {/* use moment to get date and time */}
        <div className="header">Today's Date</div>
        <div className="today-content">
          Todays events:
          <div className="event">Your events will be here</div>
        </div>

        <button className="add-button">Add event</button>
      </div>
    );
  }
}

export default Today;
