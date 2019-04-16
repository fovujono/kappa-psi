import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CalenderContainer from './pages/Calendar/CalenderContainer/CalendarContainer';
import ChatContainer from './pages/Chat/ChatContainer/ChatContainer';
import DocumentContainer from './pages/Documents/DocumentContainer/DocumentContainer';
import LandingPageContainer from './pages/LandingPage/LandingPageContainer/LandingPageContainer';
import Nav from './GlobalComponents/Nav/Nav'
import Footer from './GlobalComponents/Footer/Footer'

const App = () => {
    return (
        <div>
        <Router>
            <Nav />
            <Route exact path="/" component={LandingPageContainer}/>
            <Route exact path="/chat" component={ChatContainer}/>
            <Route exact path="/docs" component={DocumentContainer}/>
            <Route exact path="/calender" component={CalenderContainer}/>
            <Footer />
        </Router>
        </div>
    )
}

export default App;