import React from 'react';

import './footer.css';
import { SOCIALS, CONTACTS } from '../../assets/data';

const Hero = () =>
  <footer>
    <div className='footer-content-container'>
      <ul>
        <li key='socials'><h3>SOCIALS</h3></li>
        {SOCIALS.map((e) => e.href
          ? <li key={e.name}><a href={e.href}>{e.name}</a></li>
          : <li key={e.name}>{e.name}</li>)}
      </ul>
      <ul>
        <li key='contactme'><h3>CONTACT ME</h3></li>
        {CONTACTS.map((e) => e.href
          ? <li key={e.name}><a href={e.href}>{e.name}</a></li>
          : <li key={e.name}>{e.name}</li>)}
      </ul>
    </div>
    <div className='copywrite'>© 2021 Deniz Kerim</div>
  </footer>

export default Hero;
