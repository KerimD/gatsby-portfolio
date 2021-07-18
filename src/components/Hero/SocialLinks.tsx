import React from 'react';

import './social-links.scss';
import linkedin from '../../assets/images/svg/linkedin.svg';
import github from '../../assets/images/svg/github.svg';
import phone from '../../assets/images/svg/phone.svg';

const SOCIALS: TypesN.Social[] = [
  {
    name: 'in/deniz-kerim',
    href: 'https://www.linkedin.com/in/deniz-kerim/',
    icon: linkedin,
  },
  {
    name: 'github.com/KerimD',
    href: 'https://github.com/KerimD',
    icon: github,
  },
  {
    name: '(636) 253-9503',
    icon: phone,
  }
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {SOCIALS.map((social) =>
        <div key={social.name} className="social-link-wrapper">
          <social.icon fill="white" alt="" height="24" />
          <div className="hover-link">
            <p>{social.name}</p>
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
