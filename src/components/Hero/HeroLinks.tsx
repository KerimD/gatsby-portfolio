import React from 'react';

import './hero-links.css';
import { HERO_LINKS } from '../../assets/data';

const HeroLinks = () =>
  <div className='hero-links'>
    {HERO_LINKS.map((link) =>
      <div key={link.name} className='hero-link-wrapper'>
        <a
          href={link.href}
          target={!link.href.startsWith('mailto:') ? '_blank' : '_self'}
          rel='noreferrer'
        >
          <link.icon height='24' />
        </a>
        <div className='hover-link'>
          <p>{link.name}</p>
          <a
            href={link.href}
            target={!link.href.startsWith('mailto:') ? '_blank' : '_self'}
            rel='noreferrer'
          >
            <link.icon height='24' />
          </a>
        </div>
      </div>
    )}
  </div>

export default HeroLinks;
