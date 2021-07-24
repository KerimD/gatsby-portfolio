import React from 'react';

import Github from '../../assets/images/svg/github.svg';

const Projects = ({ project }: { project: TypesN.Project }) =>
  <div className='project' key={project.name} >
    {project.title != 'Solo Developer'
      ? <h3>{project.title}, {project.name}</h3>
      : <h3>{project.name}</h3>}
    <div className='project-date'>{project.date}</div>
    {project.description}
    <a href={project.github} target='_blank'>
      <Github height='22' />
    </a>
    <a className='image-link' href={project.liveSite} target='_blank'>
      <img src={project.imageSrc} alt={project.name} />
    </a>
  </div>

export default Projects;
