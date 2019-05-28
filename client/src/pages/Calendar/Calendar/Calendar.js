import React, { Component } from 'react';
import '../Calendar/Calendar.css';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar-container">
        <header className="calendar-header">Calendar</header>
        <div className="day-segment"> Monday</div>
        <div className="day-segment"> Tuesday</div>
        <div className="day-segment"> Wednesday</div>
        <div className="day-segment"> Thursday</div>
        <div className="day-segment"> Friday</div>
        <div className="day-segment"> Saturday</div>
        <div className="day-segment"> Sunday</div>
      </div>
    )
  }
}

export default Calendar
