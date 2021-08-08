import React from 'react';

import Work from '../Work';

import './projects.css';
import { PROJECTS } from '../../assets/data';

const Projects = () =>
  <section id='projects'>
    <h2>Projects</h2>
    <div className='projects-container'>
      {PROJECTS.map((project) =>
        <Work {...project} key={project.name} />
      )}
    </div>
  </section>

export default Projects;
