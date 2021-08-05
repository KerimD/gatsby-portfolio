import React from 'react';

import './nav.css';

const sections = Array.from(document.getElementsByTagName('section'));

const Nav = () =>
  <nav className='nav'>
    <a href='#' className='nav-logo'>Deniz Kerim</a>
    <ul className='nav-link-list'>
      {sections.map((element) =>
        <li><a href={`#${element.id}`}>{element.id}</a></li>
      )}
    </ul>
  </nav>

export default Nav
