import React from 'react';

import './footer.scss';

const SOCIALS: TypesN.Social[] = [
  {
    name: 'linkedin.com/in/deniz-kerim',
    href: 'https://www.linkedin.com/in/deniz-kerim/',
  },
  {
    name: 'github.com/KerimD',
    href: 'https://github.com/KerimD',
  },
];

const CONTACTS: TypesN.Contact[] = [
  {
    name: '(636) 253-9503',
  },
  {
    name: 'denizkerim@yahoo.com',
    href: 'mailto:denizkerim@yahoo.com',
  },
  {
    name: 'Fried Rice#9566 <- on discord!',
  },
];

const Hero = () => {
  return (
    <footer>
      <div className='footer-content-container'>
        <ul>
          <li><h3>SOCIALS</h3></li>
          {SOCIALS.map((e) => e.href
            ? <li><a href={e.href}>{e.name}</a></li>
            : <li>{e.name}</li>)}
        </ul>
        <ul>
          <li><h3>CONTACT ME</h3></li>
          {CONTACTS.map((e) => e.href
            ? <li><a href={e.href}>{e.name}</a></li>
            : <li>{e.name}</li>)}
        </ul>
      </div>
      <div className='copywrite'>© 2021 Deniz Kerim</div>
    </footer>
  );
};

export default Hero;
