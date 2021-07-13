import React from "react";

import './nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav-link-list">
        <li><a href="/">About</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <div className="cool-corner-thing">
        <div className="top" />
        <div className="right" />
      </div>
    </div>
  );
}

export default Nav
