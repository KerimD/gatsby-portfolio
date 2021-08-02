import React from "react";

import './nav.css';

const Nav = () =>
  <nav className="nav">
    <a href='#' className='nav-logo'>Deniz Kerim</a>
    <ul className="nav-link-list">
      <li><a href="#projects">projects</a></li>
      <li><a href="#about">about</a></li>
      <li><a href="#contact">contact</a></li>
    </ul>
  </nav>

export default Nav
