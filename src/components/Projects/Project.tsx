import React from 'react';

import './project.scss';
import Github from '../../assets/images/svg/github.svg';

const Project = ({ project }: { project: TypesN.Project }) =>
  <div className='project'>
    {project.title != 'Solo Developer'
      ? <h3>{project.title}, {project.name}</h3>
      : <h3>{project.name}</h3>}
    <div className='project-date'>{project.date}</div>
    {project.description}
    <a href={project.github}>
      <Github height='22' />
    </a>
    <a href={project.liveSite}>
      <img src={project.imageSrc} alt={project.name + ' image'} />
    </a>
  </div>

export default Project;
