import React from 'react';

import './hero-links.css';

// FIXME: when you hover the row moves slightly down for some reason
// FIXME: remove null checks when typegen stops trolling

const HeroLinks = ({ links }: TypesN.Links) =>
  <div className='hero-links'>
    {links.map((link) => {
      const icon = link.icon?.svg?.content
        && <div dangerouslySetInnerHTML={{ __html: link.icon.svg.content }} />
      
      return (
        <div key={link.id} className='hero-link-wrapper'>
          {icon}
          <div className='hover-link'>
            <p>{link.name}</p>
            <a
              href={link.href || undefined}
              target={link.isEmail ? '_self' : '_blank'}
              rel='noreferrer'
            >
              {icon}
            </a>
          </div>
        </div>
      );
    })}
  </div>

export default HeroLinks;
