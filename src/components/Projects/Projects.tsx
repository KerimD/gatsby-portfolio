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
              {project.title && `${project.title}, `}
              {project.name}
            </h3>
            <time>{project.date}</time>
            <p>{project.description}</p>
            <a href={project.github} target='_blank'>
              <Github height='22' />Github
            </a>
            <div className='tool-logos'>
              {project.softwareTools.map((tool) =>
                <tool.logo width='40' height='40' />
              )}
            </div>
          </div>
          <a className='image-link' href={project.liveSite} target='_blank'>
            <img src={project.preview} alt={project.name + ' image'} />
          </a>
        </div>
      )}
    </div>
  </section>

export default Projects;
