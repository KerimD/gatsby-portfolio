import React, { useState } from 'react';

import './footer.css';
import Contact from '../Contact';

// FIXME: remove null checks when typegen stops trolling

export default ({ links }: TypesN.Links) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const email: TypesN.LinkNode | undefined = links.filter((e) => e.isEmail).pop();

  return (
    <footer id='footer'>
      <div className='footer-content-container'>
        <div>
          <h3>SOCIALS</h3>
          <ul>
            {links.map((e) => !e.isEmail &&
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
            {email && <li>{email.name}</li>}
            <li><button onClick={() => setIsOpen(true)}>Contact Form</button></li>
          </ul>
        </div>
      </div>
      <div className='copywrite'>© 2022 Deniz Kerim</div>
      <Contact isOpen={modalIsOpen} closeModal={() => setIsOpen(false)} />
    </footer>
  );
}
