import React from "react";

import './nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav-link-list">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="cool-corner-thing">
        <div className="top" />
        <div className="right" />
      </div>
    </div>
  );
}

export default Nav
