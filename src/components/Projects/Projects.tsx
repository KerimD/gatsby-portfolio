import React from 'react';

import Project from './Project';

import './projects.scss';
import { PROJECTS } from '../../assets/data';

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
