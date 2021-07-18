import React from 'react';

import './hero-links.scss';
import { HERO_LINKS } from '../../assets/data';

const HeroLinks = () => {
  return (
    <div className="hero-links">
      {HERO_LINKS.map((link) =>
        <div key={link.name} className="hero-link-wrapper">
          <link.icon fill="white" alt="" height="24" />
          <div className="hover-link">
            <p>{link.name}</p>
            {link.href
              ? <a href={link.href}>
                  <link.icon alt="" height="24" />
                </a>
              : <div>
                  <link.icon alt="" height="24" />
                </div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroLinks;
