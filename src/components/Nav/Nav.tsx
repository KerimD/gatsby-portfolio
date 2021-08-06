import React from 'react';

import './nav.css';

const Nav = () =>
  <nav className='nav'>
    <a href='#' className='nav-logo'>Deniz Kerim</a>
    <ul className='nav-link-list'>
      <li><a href='#projects'>Projects</a></li>
      {/* <li><a href='#about'>About</a></li> */}
      {/* <li><a href='#contact'>Contact</a></li> */}
    </ul>
  </nav>

export default Nav
