import React from 'react';

import Project from './Project';

import './projects.scss';

const PROJECTS: TypesN.ProjectData[] = [
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

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="section-content">
          {PROJECTS.map((project) =>
            <Project
              key={project.name}
              project={project}
            />
          )}
      </div>
    </section>
  );
};

export default Projects;
