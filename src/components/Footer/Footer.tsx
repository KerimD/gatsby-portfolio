import React from 'react';

import './footer.scss';
import { SOCIALS, CONTACTS } from '../../assets/data';

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
