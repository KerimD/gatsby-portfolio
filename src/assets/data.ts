import portfolio from './images/png/portfolio.png';
import acmWeb from './images/png/acm-web.png';
import discordBot from './images/png/discord-bot.png';
import bdoCalc from './images/png/bdo.png';

import linkedin from './images/svg/linkedin.svg';
import github from './images/svg/github.svg';
import phone from './images/svg/phone.svg';
import email from './images/svg/email.svg';

import html5 from './images/svg/logos/html5.svg';
import nodejs from './images/svg/logos/nodejs.svg';
import reactjs from './images/svg/logos/reactjs.svg';
import gatsbyjs from './images/svg/logos/gatsbyjs.svg';
import javascript from './images/svg/logos/javascript.svg';
import typescript from './images/svg/logos/typescript.svg';
import postcss from './images/svg/logos/postcss.svg';
import git from './images/svg/logos/git.svg';

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

export const SKILLS: { [key: string]: TypesN.Tool } = {
  'html': { name: 'html5', logo: html5 },
  'css': { name: 'css3', logo: html5 },
  'sass': { name: 'sass', logo: html5 },
  'postcss': { name: 'postcss', logo: postcss },
  'javascript': { name: 'javascript', logo: javascript },
  'typescript': { name: 'typescript', logo: typescript },
  'nodejs': { name: 'nodejs', logo: nodejs },
  'reactjs': { name: 'reactjs', logo: reactjs },
  'gatsbyjs': { name: 'gatsbyjs', logo: gatsbyjs },
  'koajs': { name: 'koajs', logo: html5 },
  'expressjs': { name: 'expressjs', logo: html5 },
  'c++': { name: 'c++', logo: html5 },
  'java': { name: 'java', logo: html5 },
  'python': { name: 'python', logo: html5 },
  'dart': { name: 'dart', logo: html5 },
  'bash': { name: 'bash', logo: html5 },
  'linux': { name: 'linux', logo: html5 },
  'springboot': { name: 'spring boot', logo: html5 },
  'cassandra': { name: 'cassandra', logo: html5 },
  'flutter': { name: 'flutter', logo: html5 },
  'gwt': { name: 'gwt', logo: html5 },
  'wix': { name: 'wix', logo: html5 },
  'flask': { name: 'flask', logo: html5 },
  'figma': { name: 'figma', logo: html5 },
  'git': { name: 'git', logo: git },
}

export const PROJECTS: TypesN.Project[] = [
  {
    name: 'My Portfolio',
    date: 'July 2021 - Today',
    description: `A beautiful portfolio to display my skills.`,
    preview: portfolio,
    softwareTools: [
      SKILLS['html'],
      SKILLS['postcss'],
      SKILLS['javascript'],
      SKILLS['typescript'],
      SKILLS['nodejs'],
      SKILLS['reactjs'],
      SKILLS['gatsbyjs'],
      SKILLS['git'],
    ],
    github: 'https://github.com/KerimD/gatsby-portfolio',
    liveSite: '',
  },
  {
    name: 'ACM Web',
    title: 'Chair',
    date: 'Oct 2019 - Today',
    description: `Conduct scrum meetings, assign issues, and review pull
      requests to prepare students for a career in cs.`,
    preview: acmWeb,
    softwareTools: [],
    github: 'https://github.com/sigdotcom/mstacm.org',
    liveSite: 'https://mstacm.org/',
  },
  {
    name: 'Discord Battlerite Draft Bot',
    date: 'May 2020',
    description: `Devised a solution that organized 1,000s of competitive
      matches for pro players by working with discord’s API to create a Python
      bot.`,
    preview: discordBot,
    softwareTools: [],
    github: 'https://github.com/KerimD/draft_bot',
    liveSite: 'https://github.com/KerimD/draft_bot',
  },
  {
    name: 'BDO Enhancing Calculator',
    date: 'Oct - Dec 2019',
    description: `A statistic calculator that predicts optimal usage of in game
      currency.`,
    preview: bdoCalc,
    softwareTools: [],
    github: 'https://github.com/KerimD/bdo-app',
    liveSite: 'https://github.com/KerimD/bdo-app',
  },
];

export const RECOMMENDATIONS: TypesN.Recommendation[] = [
  {
    user: {
      name: 'John Doe',
      who: 'Co-worker',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aquam nec sem varius dictum. Duis erat risus, sodales eu est et, tristique tincidunt libero. In sit amet orci non purus gravida imperdiet.',
  },
  {
    user: {
      name: 'Jane Doe',
      who: 'Co-worker',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a quam nec sem varius dictum. Duis erat risus, sodales eu est et, tristique tincidunt libero. In sit amet orci non purus gravida imperdiet.',
  },
]