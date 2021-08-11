import React, { useState } from 'react';

import Contact from '../Contact';

import './footer.css';
import { SOCIALS, CONTACTS } from '../../assets/data';

const Hero = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <footer>
      <div className='footer-content-container'>
        <ul>
          <li key='socials'><h3>SOCIALS</h3></li>
          {SOCIALS.map((e) => e.href
            ? <li key={e.name}><a href={e.href} target='_blank' rel='noreferrer'>
              {e.name}
            </a></li>
            : <li key={e.name}>{e.name}</li>)}
        </ul>
        <ul>
          <li><h3>CONTACT ME</h3></li>
          <li>{CONTACTS[0].name}</li>
          <li><button onClick={() => setIsOpen(true)}>Contact Form</button></li>
        </ul>
      </div>
      <div className='copywrite'>© 2021 Deniz Kerim</div>
      <Contact isOpen={modalIsOpen} closeModal={() => setIsOpen(false)} />
    </footer>
  );
}

export default Hero;
