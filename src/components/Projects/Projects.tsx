import React from 'react';

import './projects.css';
import { PROJECTS } from '../../assets/data';
import Github from '../../assets/images/svg/github.svg';

const Projects = () =>
  <section id='projects'>
    <h2>Projects</h2>
    <div className='projects-container'>
      {PROJECTS.map((project) =>
        <div className='project' key={project.name}>
          <div className='project-information'>
            <h3>
              {project.title != 'Solo Developer' && `${project.title}, `}
              {project.name}
            </h3>
            <div className='project-date'>{project.date}</div>
            <p>{project.description}</p>
            <a href={project.github} target='_blank'>
              <Github height='22' />
            </a>
          </div>
          <a className='image-link' href={project.liveSite} target='_blank'>
            <img src={project.imageSrc} alt={project.name + ' image'} />
          </a>
        </div>
      )}
    </div>
  </section>

export default Projects;
