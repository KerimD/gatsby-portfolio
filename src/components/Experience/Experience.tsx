import React from 'react';

import ExperienceItem from './ExperienceItem';

import './experience.scss';

const EXPERIENCE_ITEMS: TypesN.ExperienceItem[] = [
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
];

const Experiences = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="section-content">
          {EXPERIENCE_ITEMS.map((experienceItem) =>
            <ExperienceItem
              key={experienceItem.title}
              experienceItem={experienceItem}
            />
          )}
      </div>
    </section>
  );
};

export default Experiences;
