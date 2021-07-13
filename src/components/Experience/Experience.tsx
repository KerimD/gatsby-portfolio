import React from 'react';

import ExperienceItem from './ExperienceItem';

import './experience.scss';

const EXPERIENCE_ITEMS: TypesN.ProjectData[] = [
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

const Experiences = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience">
        {EXPERIENCE_ITEMS.map((experienceItem) =>
          <ExperienceItem
            key={experienceItem.name}
            experienceItem={experienceItem}
          />
        )}
      </div>
    </section>
  );
};

export default Experiences;
