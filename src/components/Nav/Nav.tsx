import React from 'react';

import './nav.css';
import Logo from '../../assets/images/svg/logo.svg';

const Nav = () =>
  <nav className='nav'>
    <a href='https://kerimd.me/' className='nav-logo'><Logo /></a>
    <ul className='nav-link-list'>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#projects'>Projects</a></li>
    </ul>
  </nav>

export default Nav
