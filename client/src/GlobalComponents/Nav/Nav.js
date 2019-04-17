import React from "react";
import "../Nav/Nav.css";
import { NavLink } from 'react-router-dom'


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="nav-container"> 
    <div className="nav-links">

    <NavLink exact to="/"  activeClassName="selected"
  >Home</NavLink>
    <NavLink exact to="/chat"  activeClassName="selected"
  >Chat  |</NavLink>
    <NavLink exact to="/docs"  activeClassName="selected"
  >Docs  |</NavLink>
    <NavLink exact to="/calender"  activeClassName="selected"
  > Calendar  |</NavLink>


    </div>
    </div>
    )
  }
}

export default Nav;
