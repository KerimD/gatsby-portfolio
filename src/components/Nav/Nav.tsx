import React from "react";

import './nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-link-list">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav
