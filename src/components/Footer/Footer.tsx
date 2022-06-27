import React, { useState } from 'react';

import Contact from '../Contact';

import './footer.css';

// FIXME: remove null checks when typegen stops trolling
// FIXME: replace contacts with just email

const Footer = ({ socials, email }: TypesN.FooterProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <footer id='footer'>
      <div className='footer-content-container'>
        <div>
          <h3>SOCIALS</h3>
          <ul>
            {socials.map((e) =>
              <li key={e.name}>
                <a href={e.href || undefined} target='_blank' rel='noreferrer'>
                  {e.name}
                </a>
              </li>)}
          </ul>
        </div>
        <div>
          <h3>CONTACT ME</h3>
          <ul>
            {email && <li key={email.id}>{email.name}</li>}
            <li><button onClick={() => setIsOpen(true)}>Contact Form</button></li>
          </ul>
        </div>
      </div>
      <div className='copywrite'>© 2022 Deniz Kerim</div>
      <Contact isOpen={modalIsOpen} closeModal={() => setIsOpen(false)} />
    </footer>
  );
}

export default Footer;
