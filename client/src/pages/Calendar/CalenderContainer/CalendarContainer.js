import React from 'react';
import Nav from "../../../GlobalComponents/Nav/Nav";
import Today from "../Today/Today.js";
import "../CalenderContainer/CalendarContainer.css";
import Calendar from '../Calendar/Calendar.js';

class CalenderContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="wrapper">
            <Today/>
            <Calendar/>

            </div>
        )
    }

}

export default CalenderContainer;