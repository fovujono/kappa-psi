import React from "react";
import "../ChatContainer/ChatContainer.css";


class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chat-wrapper">

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
