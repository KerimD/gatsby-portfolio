import React from 'react';

import './social-links.scss';
import Linkedin from '../../images/icons/linkedin.svg';
import Github from '../../images/icons/github.svg';
import Email from '../../images/icons/email.svg';
import Phone from '../../images/icons/phone.svg';

type Social = {
  text: string;
  href?: string;
  icon: any;
}

const SOCIALS: Social[] = [
  {
    text: 'linkedin.com',
    href: 'https://www.linkedin.com/',
    icon: Linkedin,
  },
  {
    text: 'github.com',
    href: 'https://github.com/',
    icon: Github,
  },
  {
    text: 'email@google.com',
    href: 'mailto:email@google.com',
    icon: Email,
  },
  {
    text: '(636) 253-9503',
    icon: Phone,
  }
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {SOCIALS.map((social) =>
        <div className="social-links-wrapper">
          <div className="hover-link">
            <p>{social.text}</p>
            {social.href
              ? <a href={social.href}>
                  <social.icon alt="" height="24" />
                </a>
              : <social.icon alt="" height="24" />}
          </div>
          {social.href
            ? <a href={social.href}>
                <social.icon fill="white" alt="" height="24" />
              </a>
            : <social.icon fill="white" alt="" height="24" />}
        </div>
      )}
    </div>
  );
};

export default SocialLinks;
