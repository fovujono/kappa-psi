import React from "react";
import "../Nav/Nav.css"

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="nav-container"> 
    <div className="nav-links">

        <a href="/">|  Home  |</a>
        <a href='/chat'>  Chat  |</a>
        <a href='/docs'>  Docs  |</a>
        <a href='/calendar'>  Calendar  |</a>

    </div>
    </div>
    )
  }
}

export default Nav;
