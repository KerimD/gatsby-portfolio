import React from 'react';

import './hero-links.css';

const HeroLinks = ({ links }: TypesN.Links) =>
  <div className='hero-links'>
    {links.map((link) => {  // remove checks when I add default values
      const aTag = <a
        href={link.href || undefined}
        target={!link.href?.startsWith('mailto:') ? '_blank' : '_self'}
        rel='noreferrer'
      >
        {link.icon?.svg?.content && <div dangerouslySetInnerHTML={{ __html: link.icon.svg.content }} />}
      </a>
      
      return (
        <div key={link.name}/*change to link.id*/ className='hero-link-wrapper'>
          {aTag}
          <div className='hover-link'>
            <p>{link.name}</p>
            {aTag}
          </div>
        </div>
      );
    }
    )}
  </div>

export default HeroLinks;
