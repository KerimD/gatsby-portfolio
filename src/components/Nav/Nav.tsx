import React, { useEffect } from 'react';

import './nav.css';
import Moon from '../../assets/images/svg/moon.svg';

export default () => {
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
      <label className='dark-theme-toggle'>
        <Moon />
        <input
          type='checkbox'
          name='darkThemeToggle'
          onChange={(event) => setTheme(event.target.checked ? 'dark' : '')}
        />
      </label>
      <ul className='nav-link-list'>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
      </ul>
    </nav>
  );
}
