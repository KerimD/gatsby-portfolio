import React from 'react';

import './projects.scss';
import { PROJECTS } from '../../assets/data';

import Project from "./Project";

const PROJECTS_LEFT: TypesN.Project[] = [];
const PROJECTS_RIGHT: TypesN.Project[] = [];

PROJECTS.forEach((e, i) => i % 2 == 0 ? PROJECTS_RIGHT.push(e) : PROJECTS_LEFT.push(e));

const Projects = () =>
  <section id='projects'>
    <h2>Projects</h2>
    <div className='projects-container'>
      <div className='projects-left'>
        {PROJECTS_LEFT.map((project) =>
          <Project project={project} />
        )}
      </div>
      <div className='projects-right'>
        {PROJECTS_RIGHT.map((project) =>
          <Project project={project} />
        )}
      </div>
    </div>
  </section>

export default Projects;
