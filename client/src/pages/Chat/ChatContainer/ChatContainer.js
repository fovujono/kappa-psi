import React from "react";
import "../ChatContainer/ChatContainer.css";

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chat-wrapper">
        <div className="chat-navbar-container">
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </div>

        <div className="chat-sidebar-container">

        side bar
        
        </div>

        <div className="chat-box-container">chat box</div>

        <div className="chat-footer-container">footer</div>
      </div>
    );
  }
}

export default ChatContainer;
