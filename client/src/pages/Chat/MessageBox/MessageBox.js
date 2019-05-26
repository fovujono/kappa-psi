import React from "react";
import "./MessageBox.css";
import TextareaAutosize from "react-autosize-textarea";

class MessageBox extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.el.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  }

  scrollToBottom() {
    this.el.scrollIntoView({
      behavior: "auto",
      block: "end",
      inline: "nearest"
    });
  }

  render() {
    return (
      <div className="form-container">
        <div className="message-display">
          <ul className="messages">
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">
              LONGER MESSAGE
              MESSAGEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              MESSAGEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee:picklerick:
              :picklerick: :picklerick: :picklerick: :picklerick: :picklerick:
              :picklerick: :picklerick: :picklerick: :picklerick: :picklerick:
              :picklerick: :picklerick: :picklerick: :picklerick: :picklerick:
              :picklerick: :picklerick: :picklerick: :picklerick: :picklerick:
              :picklerick: :picklerick: :picklerick: :picklerick: :picklerick:
              :picklerick: :picklerick: :picklerick: :picklerick: :picklerick:
              :picklerick: :picklerick: :picklerick: :picklerick: :picklerick:
              :picklerick: :picklerick: :picklerick: :picklerick: :picklerick:
              :picklerick: :picklerick: :picklerick: :picklerick: :picklerick:
              :picklerick: :picklerick: :picklerick: :picklerick: :picklerick:
              :picklerick: :picklerick: :picklerick: :picklerick: :picklerick:
              :picklerick: :picklerick: :picklerick: :picklerick: :picklerick:
              :picklerick:
            </li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>{" "}
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>{" "}
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>{" "}
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>{" "}
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>{" "}
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>{" "}
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>{" "}
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>{" "}
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>{" "}
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>{" "}
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>{" "}
            <li className="user-message">YOUR MESSAGE</li>
            <li className="friend-message">FRIENDS MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>{" "}
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>{" "}
            <li className="user-message">YOUR MESSAGE</li>
            <li className="user-message">YOUR MESSAGE</li>
          </ul>
          <div
            ref={el => {
              this.el = el;
            }}
          />
        </div>

        <form>
          <TextareaAutosize placeholder="Type here..." className="text" />
        </form>
      </div>
    );
  }
}

export default MessageBox;
