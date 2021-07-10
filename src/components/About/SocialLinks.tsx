import React from 'react';

import './social-links.scss';
import linkedin from '../../assets/images/svg/linkedin.svg';
import github from '../../assets/images/svg/github.svg';
import phone from '../../assets/images/svg/phone.svg';

type Social = {
  text: string;
  href?: string;
  icon: any;
}

const SOCIALS: Social[] = [
  {
    text: 'linkedin.com',
    href: 'https://www.linkedin.com/',
    icon: linkedin,
  },
  {
    text: 'github.com',
    href: 'https://github.com/',
    icon: github,
  },
  {
    text: '(636) 253-9503',
    icon: phone,
  }
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {SOCIALS.map((social) =>
        <div key={social.text} className="social-link-wrapper">
          <social.icon fill="white" alt="" height="24" />
          <div className="hover-link">
            <p>{social.text}</p>
            {social.href
              ? <a href={social.href}>
                  <social.icon alt="" height="24" />
                </a>
              : <div>
                  <social.icon alt="" height="24" />
                </div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialLinks;
