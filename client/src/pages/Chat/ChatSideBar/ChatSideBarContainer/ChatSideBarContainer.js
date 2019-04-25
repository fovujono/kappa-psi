import React from "react";
import "./ChatSideBarContainer.css";
import Chapters from "../Chapters/Chapters.js";
import DirectMessage from "../DirectMessage/DirectMessage.js";

export default class ChatSideBarContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="chapter-container">
          <Chapters />
        </div>
        <div className="dm-container">
          <DirectMessage />
        </div>
      </div>
    );
  }
}
