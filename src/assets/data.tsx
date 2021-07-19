import React from 'react';

import linkedin from './images/svg/linkedin.svg';
import github from './images/svg/github.svg';
import phone from './images/svg/phone.svg';
import email from './images/svg/email.svg';
import discord from './images/svg/discord.svg';

export const SOCIALS: TypesN.Social[] = [
  {
    name: 'linkedin.com/in/KerimD',
    href: 'https://www.linkedin.com/in/kerimd/',
    icon: linkedin,
  },
  {
    name: 'github.com/KerimD',
    href: 'https://github.com/KerimD',
    icon: github,
  },
];

export const CONTACTS: TypesN.Social[] = [
  {
    name: '(636) 253-9503',
    icon: phone,
  },
  {
    name: 'denizkerim@yahoo.com',
    href: 'mailto:denizkerim@yahoo.com',
    icon: email,
  },
  {
    name: 'Fried Rice#9566 <- on discord!',
    icon: discord,
  },
];

export const HERO_LINKS: TypesN.Social[] = [
  ...SOCIALS,
  CONTACTS[0],
]

export const PROJECTS: TypesN.Project[] = [
  {
    name: 'ACM Web',
    title: 'Chair',
    date: 'Oct 2019 - Today',
    description:
      <p>
        Conduct scrum meetings, assign issues, and review pull
        requests to prepare students for a career in cs.
      </p>,
  },
  {
    name: 'Discord Battlerite Draft Bot',
    title: 'Developer',
    date: 'May 2020',
    description:
      <p>
        Devised a solution to organize 1,000s of competitive
        matches for pro players by working with discord’s API
        to create a <span>Python</span> bot.
      </p>,
  },
  {
    name: 'BDO Enhancing Calculator',
    title: 'Developer',
    date: 'Oct - Dec 2019',
    description:
      <p>
        A statistic calculator that predicts optimal usage of
        in game currency. The website is built using
        <span>TypeScript</span> with a <span>React.js</span>
        frontend and a <span>Koa.js</span> REST API.
      </p>,
  },
];
