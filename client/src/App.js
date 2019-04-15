import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CalenderContainer from './pages/Calendar/CalenderContainer/CalendarContainer';
import ChatContainer from './pages/Chat/ChatContainer/ChatContainer';
import DocumentContainer from './pages/Documents/DocumentContainer/DocumentContainer';
import LandingPageContainer from './pages/LandingPage/LandingPageContainer/LandingPageContainer';

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={LandingPageContainer}/>
            <Route exact path="/chat" component={ChatContainer}/>
            <Route exact path="/docs" component={DocumentContainer}/>
            <Route exact path="/calender" component={CalenderContainer}/>
        </Router>
    )
}

export default App;