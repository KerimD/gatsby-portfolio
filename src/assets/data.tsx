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

export const PROJECTS: TypesN.ProjectItem[] = [
  {
    name: 'Discord Draft Bot',
    date: 'May 2020',
    description:
      <p>
        Devised a solution to organize 1,000s of competitive
        matches for pro players by working with discord’s API
        to create a <span>Python</span> bot.
      </p>,
  },
  {
    name: 'BDO Calculator',
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

export const EXPERIENCE_ITEMS: TypesN.ExperienceItem[] = [
  {
    title: 'Full Stack Software Engineer',
    company: 'Hiperion',
    date: 'June - July 2021',
    bulletPoints: [
      <p>
        Developed an internal page used to monitor over 6,000
        unique jobs per month utilizing <span>Java</span>,
        <span> Cassandra</span>, and <span>GWT</span>.
      </p>,
      <p>
        Migrated legacy operations to our full stack applications.
      </p>,
      <p>
        Launched new RESTful services for existing
        <span> Spring Boot</span> microservices.
      </p>,
      <p>
        Attended scrum, retrospective, and sprint planning
        meetings (<span>Agile</span>).
      </p>,
    ]
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'NISC',
    date: 'May - Aug 2020',
    bulletPoints: [
      <p>
        Developed an internal page used to monitor over 6,000
        unique jobs per month utilizing <span>Java</span>,
        <span> Cassandra</span>, and <span>GWT</span>.
      </p>,
      <p>
        Migrated legacy operations to our full stack applications.
      </p>,
      <p>
        Launched new RESTful services for existing
        <span> Spring Boot</span> microservices.
      </p>,
      <p>
        Attended scrum, retrospective, and sprint planning
        meetings (<span>Agile</span>).
      </p>,
    ]
  },
  {
    title: 'Chair',
    company: 'ACM Web',
    date: 'Oct 2019 - Today',
    bulletPoints: [
      <p>
        Conduct scrum meetings, assign issues, and review pull
        requests to prepare students for a career in cs.
      </p>,
      <p>
        Organize events to recruit new students and increase
        involvement for current members.
      </p>,
      <p>
        Overhauled our <span>Stripe</span> payment form in
        <span> React.js</span> with a fresh look using
        <span> Figma</span>.
      </p>,
      <p>
        Developing our new profile page using
        <span>Typescript</span> with <span>React.js</span>,
        <span> GraphQL</span>, and <span>TypeORM</span>.
      </p>,
    ]
  },
  {
    title: 'UI / UX Volunteer',
    company: 'Yemen Aid',
    date: 'Nov 2019 - Jan 2020',
    bulletPoints: [
      <p>
        Independently redesigned their landing page using Wix.
      </p>,
    ]
  },
];
