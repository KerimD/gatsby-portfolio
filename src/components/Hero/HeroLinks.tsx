import React from 'react';

import './hero-links.css';
import { HERO_LINKS } from '../../assets/data';

const HeroLinks = () =>
  <div className='hero-links'>
    {HERO_LINKS.map((link) =>
      <div key={link.name} className='hero-link-wrapper'>
        <link.icon fill='white' height='24' />
        <div className='hover-link'>
          <p>{link.name}</p>
          {link.href
            ? <a href={link.href} target="_blank">
              <link.icon height='24' />
            </a>
            : <div>
              <link.icon height='24' />
            </div>}
        </div>
      </div>
    )}
  </div>

export default HeroLinks;
