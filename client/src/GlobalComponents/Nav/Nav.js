import React from "react";
import "../Nav/Nav.css";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="nav-container">
        <ul className="nav-links">
          <NavLink exact to="/" className="nav-item" activeClassName="selected">
            Home
          </NavLink>
          <NavLink
            exact
            to="/chat"
            className="nav-item"
            activeClassName="selected"
          >
            Chat
          </NavLink>
          <NavLink
            exact
            to="/docs"
            className="nav-item"
            activeClassName="selected"
          >
            Documents
          </NavLink>
          <NavLink
            exact
            to="/calender"
            className="nav-item"
            activeClassName="selected"
          >
           Calendar
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default Nav;
