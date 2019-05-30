import React from "react";
import "../ChatContainer/ChatContainer.css";
import ChatSideBar from "../ChatSideBar/ChatSideBarContainer/ChatSideBarContainer.js";
import MessageBox from "../MessageBox/MessageBox.js";
import io from "socket.io-client";
import { USER_CONNECTED, LOGOUT } from "../../../socket/socketEvents";

const socketURL = "http://192.168.10.24:4001//";

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null,
      user: null
    };
  }

  componentWillMount() {
    this.initializeSocket();
  }

  newUser = user => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED, user);
    this.setState({ user });
  };

  logUserOut = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  };

  initializeSocket = () => {
    const socket = io(socketURL);
    socket.on("connect", () => {
      console.log("Connected");
    });

    this.setState({ socket });
  };

  render() {
    return (
      <div className="chat-wrapper">
        <div className="chat-sidebar-container">
          <ChatSideBar />
        </div>

        <div className="chat-box-container">
          <MessageBox />
        </div>

        <div className="chat-footer-container">footer</div>
      </div>
    );
  }
}

export default ChatContainer;
