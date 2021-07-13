import React from 'react';

import Project from './Project';

import './projects.scss';
import { projects } from './data/Projects';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) =>
          <Project key={project.name} />
        )}
      </div>
    </div>
  );
};

export default Projects;
