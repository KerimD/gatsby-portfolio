import React, { useState } from 'react';

import Contact from '../Contact';

import './footer.css';

// type FooterProps = {
//   contacts: Array<Queries.ContentfulContact>;
//   socials: Array<Queries.ContentfulSocial>;
// }

const Footer = ({ contacts, socials }: TypesN.FooterProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <footer id='footer'>
      <div className='footer-content-container'>
        <ul>
          <li key='socials'><h3>SOCIALS</h3></li>
          {socials.map((e) =>  // remove checks when I add default values
            <li key={e.name}>
              <a href={e.href || undefined} target='_blank' rel='noreferrer'>
                {e.name}
              </a>
            </li>)}
        </ul>
        <ul>
          <li><h3>CONTACT ME</h3></li>
          {contacts.map((e) => <li key={e.name}>{e.name}</li>) /*change to e.id*/}
          <li><button onClick={() => setIsOpen(true)}>Contact Form</button></li>
        </ul>
      </div>
      <div className='copywrite'>© 2022 Deniz Kerim</div>
      <Contact isOpen={modalIsOpen} closeModal={() => setIsOpen(false)} />
    </footer>
  );
}

export default Footer;
