import React from 'react';

// svg
import linkedin from './images/svg/linkedin.svg';
import github from './images/svg/github.svg';
import phone from './images/svg/phone.svg';
import email from './images/svg/email.svg';

// img
import portfolio from './images/portfolio.png';
import acmWeb from './images/acm-web.png';
import discordBot from './images/discord-bot.png';
import bdoCalc from './images/bdo.png';

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
];

export const HERO_LINKS: TypesN.Social[] = [
  ...SOCIALS,
  CONTACTS[0],
];

export const PROJECTS: TypesN.Project[] = [
  {
    name: 'My Portfolio',
    title: 'Solo Developer',
    date: 'July 2021 - Today',
    imageSrc: portfolio,
    github: 'https://github.com/KerimD/gatsby-portfolio',
    liveSite: '',
    description:
      <p>
        A beautiful portfolio to display my skills.
      </p>,
  },
  {
    name: 'ACM Web',
    title: 'Chair',
    date: 'Oct 2019 - Today',
    imageSrc: acmWeb,
    github: 'https://github.com/sigdotcom/mstacm.org',
    liveSite: 'https://mstacm.org/',
    description:
      <p>
        Conduct scrum meetings, assign issues, and review pull
        requests to prepare students for a career in cs.
      </p>,
  },
  {
    name: 'Discord Battlerite Draft Bot',
    title: 'Solo Developer',
    date: 'May 2020',
    imageSrc: discordBot,
    github: 'https://github.com/KerimD/draft_bot',
    liveSite: 'https://github.com/KerimD/draft_bot',
    description:
      <p>
        Devised a solution that organized 1,000s of competitive
        matches for pro players by working with discord’s API
        to create a <span>Python</span> bot.
      </p>,
  },
  {
    name: 'BDO Enhancing Calculator',
    title: 'Solo Developer',
    date: 'Oct - Dec 2019',
    imageSrc: bdoCalc,
    github: 'https://github.com/KerimD/bdo-app',
    liveSite: 'https://github.com/KerimD/bdo-app',
    description:
      <p>
        A statistic calculator that predicts optimal usage of
        in game currency. The website is built using
        <span> TypeScript</span> with a <span>React.js </span>
        frontend and a <span>Koa.js</span> REST API.
      </p>,
  },
];

export const RECOMMENDATIONS: TypesN.Recommendation[] = [
  {
    user: {
      name: 'John Doe',
      who: 'Co-worker',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a quam nec sem varius dictum. Duis erat risus, sodales eu est et, tristique tincidunt libero. In sit amet orci non purus gravida imperdiet.',
  },
  {
    user: {
      name: 'John Doe',
      who: 'Co-worker',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a quam nec sem varius dictum. Duis erat risus, sodales eu est et, tristique tincidunt libero. In sit amet orci non purus gravida imperdiet.',
  },
]