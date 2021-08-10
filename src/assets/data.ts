import mst from './images/png/mst.jpg';
import hiperion from './images/png/hiperion.jpg';
import nisc from './images/png/nisc.jpg';
import acmWeb from './images/png/acm-web.jpg';
import portfolio from './images/png/portfolio.jpg';
import discordBot from './images/png/discord-bot.jpg';
import bdoCalc from './images/png/bdo.jpg';

import linkedin from './images/svg/linkedin.svg';
import github from './images/svg/github.svg';
import email from './images/svg/email.svg';

import html5 from './images/svg/logos/html5.svg';
import css3 from './images/svg/logos/css3.svg';
import postcss from './images/svg/logos/postcss.svg';
import sass from './images/svg/logos/sass.svg';
import javascript from './images/svg/logos/javascript.svg';
import typescript from './images/svg/logos/typescript.svg';
import nodejs from './images/svg/logos/nodejs.svg';
import reactjs from './images/svg/logos/reactjs.svg';
import stripejs from './images/svg/logos/stripejs.svg';
import gatsbyjs from './images/svg/logos/gatsbyjs.svg';
import expressjs from './images/svg/logos/expressjs.svg';
import auth0 from './images/svg/logos/auth0.svg';
import cpp from './images/svg/logos/cpp.svg';
import java from './images/svg/logos/java.svg';
import python from './images/svg/logos/python.svg';
import dart from './images/svg/logos/dart.svg';
import bash from './images/svg/logos/bash.svg';
import springboot from './images/svg/logos/springboot.svg';
import cassandra from './images/svg/logos/cassandra.svg';
import firebase from './images/svg/logos/firebase.svg';
import flutter from './images/svg/logos/flutter.svg';
import gwt from './images/svg/logos/gwt.svg';
import git from './images/svg/logos/git.svg';
import bitbucket from './images/svg/logos/bitbucket.svg';
import figma from './images/svg/logos/figma.svg';
import discord from './images/svg/logos/discord.svg';

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
  'css': { name: 'css3', logo: css3 },
  'sass': { name: 'sass', logo: sass, href: 'https://sass-lang.com/' },
  'postcss': { name: 'postcss', logo: postcss, href: 'https://github.com/postcss/postcss' },
  'javascript': { name: 'javascript', logo: javascript },
  'typescript': { name: 'typescript', logo: typescript, href: 'https://www.typescriptlang.org/' },
  'nodejs': { name: 'nodejs', logo: nodejs, href: 'https://nodejs.org/en/' },
  'reactjs': { name: 'reactjs', logo: reactjs, href: 'https://reactjs.org/' },
  'stripejs': { name: 'stripejs', logo: stripejs, href: 'https://stripe.com/' },
  'gatsbyjs': { name: 'gatsbyjs', logo: gatsbyjs, href: 'https://www.gatsbyjs.com/' },
  'expressjs': { name: 'expressjs', logo: expressjs, href: 'https://expressjs.com/' },
  'auth0': { name: 'auth0', logo: auth0, href: 'https://auth0.com/' },
  'c++': { name: 'c++', logo: cpp },
  'java': { name: 'java', logo: java, href: 'https://www.oracle.com/java/' },
  'python': { name: 'python', logo: python, href: 'https://www.python.org/' },
  'dart': { name: 'dart', logo: dart, href: 'https://dart.dev/' },
  'linux': { name: 'linux', logo: html5 },
  'springboot': { name: 'springboot', logo: springboot, href: 'https://spring.io/projects/spring-boot' },
  'cassandra': { name: 'cassandra', logo: cassandra, href: 'https://cassandra.apache.org/_/index.html' },
  'firebase': { name: 'firebase', logo: firebase, href: 'https://firebase.google.com/' },
  'flutter': { name: 'flutter', logo: flutter, href: 'https://flutter.dev/' },
  'gwt': { name: 'gwt', logo: gwt, href: 'http://www.gwtproject.org/' },
  'wix': { name: 'wix', logo: html5 },
  'flask': { name: 'flask', logo: html5 },
  'git': { name: 'git', logo: git, href: 'https://git-scm.com/' },
  'bitbucket': { name: 'bitbucket', logo: bitbucket, href: 'https://bitbucket.org/' },
  'figma': { name: 'figma', logo: figma, href: 'https://www.figma.com/' },
  'discord': { name: 'discord', logo: discord, href: 'https://discord.com/' },
}

export const EDUCATION: TypesN.Work[] = [
  {
    name: 'Missouri University of Science and Technology',
    date: 'Expected May 2022',
    description: `I go to school here`,
    preview: mst,
    softwareTools: [
      SKILLS['c++'],
      SKILLS['python'],
      SKILLS['git'],
    ],
    liveSite: 'https://www.mst.edu/',
  },
];

export const EXPERIENCE: TypesN.Work[] = [
  {
    name: 'Hiperion.io',
    title: 'Full Stack Developer Intern',
    date: 'June - July 2021',
    description: `Worked in a team of 4 on a Flutter application with an
      Express.js api`,
    preview: hiperion,
    softwareTools: [
      SKILLS['dart'],
      SKILLS['flutter'],
      SKILLS['javascript'],
      SKILLS['nodejs'],
      SKILLS['expressjs'],
      SKILLS['firebase'],
      SKILLS['auth0'],
      SKILLS['git'],
    ],
    liveSite: 'https://hiperion.io/',
  },
  {
    name: 'NISC',
    title: 'Software Engineer Intern',
    date: 'May - Aug 2020',
    description: `Worked on various Spring Boot microservices and a monolithic
      full stack application`,
    preview: nisc,
    softwareTools: [
      SKILLS['gwt'],
      SKILLS['java'],
      SKILLS['springboot'],
      SKILLS['cassandra'],
      SKILLS['git'],
      SKILLS['bitbucket'],
    ],
    liveSite: 'https://www.nisc.coop/',
  },
  {
    name: 'ACM Web',
    title: 'Chair',
    date: 'Oct 2019 - Present',
    description: `Host workshops, conduct scrum meetings, and code review to
      prepare students for a career in CS`,
    preview: acmWeb,
    softwareTools: [
      SKILLS['html'],
      SKILLS['css'],
      SKILLS['javascript'],
      SKILLS['typescript'],
      SKILLS['nodejs'],
      SKILLS['reactjs'],
      SKILLS['stripejs'],
      SKILLS['git'],
      SKILLS['figma'],
    ],
    github: 'https://github.com/sigdotcom/mstacm.org',
    liveSite: 'https://mstacm.org/',
  },
];

export const PROJECTS: TypesN.Work[] = [
  {
    name: 'My Portfolio',
    date: 'July 2021 - Present',
    description: `My most recent project, a beautiful portfolio built and hosted
      using Gatsby`,
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
      SKILLS['figma'],
    ],
    github: 'https://github.com/KerimD/gatsby-portfolio',
    liveSite: 'https://kerimd.me/',
  },
  {
    name: 'Discord Battlerite Draft Bot',
    date: 'May 2020',
    description: `Devised a solution that organized 1,000s of competitive
      matches for pro players by working with discord’s API to create a Python
      bot`,
    preview: discordBot,
    softwareTools: [
      SKILLS['python'],
      SKILLS['discord'],
      SKILLS['git'],
    ],
    github: 'https://github.com/KerimD/draft_bot',
    liveSite: 'https://github.com/KerimD/draft_bot',
  },
  {
    name: 'BDO Enhancing Calculator',
    date: 'Oct - Dec 2019',
    description: `A statistic calculator that predicts optimal usage of in game
      currency`,
    preview: bdoCalc,
    softwareTools: [
      SKILLS['html'],
      SKILLS['sass'],
      SKILLS['javascript'],
      SKILLS['typescript'],
      SKILLS['nodejs'],
      SKILLS['reactjs'],
      SKILLS['git'],
    ],
    github: 'https://github.com/KerimD/bdo-app',
    liveSite: 'https://github.com/KerimD/bdo-app',
  },
];
