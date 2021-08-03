import linkedin from './images/svg/linkedin.svg';
import github from './images/svg/github.svg';
import phone from './images/svg/phone.svg';
import email from './images/svg/email.svg';

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

export const SKILLS: { [key: string]: TypesN.Skills } = {
  'html': { name: 'html5', logo: '' },
  'css': { name: 'css3', logo: '' },
  'javascript': { name: 'javascript', logo: '' },
  'typescript': { name: 'typescript', logo: '' },
  'nodejs': { name: 'nodejs', logo: '' },
  'reactjs': { name: 'reactjs', logo: '' },
  'gatsbyjs': { name: 'gatsbyjs', logo: '' },
  'koajs': { name: 'koajs', logo: '' },
  'expressjs': { name: 'expressjs', logo: '' },
  'c++': { name: 'c++', logo: '' },
  'java': { name: 'java', logo: '' },
  'python': { name: 'python', logo: '' },
  'dart': { name: 'dart', logo: '' },
  'bash': { name: 'bash', logo: '' },
  'linux': { name: 'linux', logo: '' },
  'springboot': { name: 'spring boot', logo: '' },
  'cassandra': { name: 'cassandra', logo: '' },
  'flutter': { name: 'flutter', logo: '' },
  'gwt': { name: 'gwt', logo: '' },
  'wix': { name: 'wix', logo: '' },
  'flask': { name: 'flask', logo: '' },
  'figma': { name: 'figma', logo: '' },
  'git': { name: 'git', logo: '' },
}

export const PROJECTS: TypesN.Project[] = [
  {
    name: 'My Portfolio',
    date: 'July 2021 - Today',
    description: `A beautiful portfolio to display my skills.`,
    preview: portfolio,
    softwareTools: [],
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
      currency. The website is built using TypeScript with a React.js frontend
      and a Koa.js REST API.`,
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