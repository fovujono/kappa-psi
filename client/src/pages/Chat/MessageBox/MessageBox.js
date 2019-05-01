import React from "react";
import "./MessageBox.css";
import TextareaAutosize from 'react-autosize-textarea';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-container">

        <div className="message-display">
            <ul className="messages">
                <li className="user-message">YOUR MESSAGE</li>
                <li className="friend-message">FRIENDS MESSAGE</li>
                <li className="user-message">YOUR MESSAGE</li>
                <li className="friend-message">FRIENDS MESSAGE</li>
                <li className="user-message">YOUR MESSAGE</li>
                <li className="friend-message">FRIENDS MESSAGE</li>
                
            </ul>
        </div>
        
        <form>
          <TextareaAutosize placeholder="Type here..." className="text"></TextareaAutosize>
        </form>
      </div>
    );
  }
}

export default MessageBox;
