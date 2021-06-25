import React from 'react';

import './social-links.scss';
import linkedin from '../../images/icons/linkedin.svg';
import github from '../../images/icons/github.svg';
import email from '../../images/icons/email.svg';

const SOCIALS = [
  {
    text: 'linkedin.com',
    href: 'https://www.linkedin.com/',
    iconSrc: linkedin,
  },
  {
    text: 'github.com',
    href: 'https://github.com/',
    iconSrc: github,
  },
  {
    text: 'email@google.com',
    href: 'mailto:email@google.com',
    iconSrc: email,
  }
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {SOCIALS.map((social) =>
        <div className="social-links-wrapper">
          <div className="link-text">{social.text}</div>
          <a href={social.href}>
            <img src={social.iconSrc} alt="" height="20" />
          </a>
        </div>
      )}
    </div >
  );
};

export default SocialLinks;
