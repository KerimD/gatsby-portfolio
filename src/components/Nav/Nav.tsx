import React, { useEffect } from 'react';

import './nav.css';
import Logo from '../../assets/images/svg/logo.svg';
import Moon from '../../assets/images/svg/moon.svg';

const Nav = () => {
  const setTheme = (theme: string) => {
    document.documentElement.classList.add('theme-transition');
    window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 400)
    document.documentElement.setAttribute('theme', theme);
    window.localStorage.setItem('theme', theme);
  }

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    (document.querySelector('input[name=darkThemeToggle]') as HTMLInputElement)
      .checked = theme === 'dark';
    theme && setTheme(theme);
  }, []);

  return (
    <nav className='nav'>
      <a href='https://kerimd.me/' className='nav-logo'><Logo /></a>
      <ul className='nav-link-list'>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
      </ul>
      <label className='dark-theme-toggle'>
        <Moon />
        <input
          type='checkbox'
          name='darkThemeToggle'
          onChange={(event) => setTheme(event.target.checked ? 'dark' : '')}
        />
      </label>
    </nav>
  );
}

export default Nav
