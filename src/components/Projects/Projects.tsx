import React from 'react';

import Project from './Project';

import './projects.scss';

const PROJECTS = [
  { name: "a" },
  { name: "b" },
  { name: "c" },
  { name: "d" },
  { name: "e" },
  { name: "f" },
  { name: "g" },
  { name: "h" }
];

const Projects = () => {
  return (
    <div className="projects">
    {PROJECTS.map((project) =>
      <Project key={project.name} />
    )}
    </div>
  );
};

export default Projects;
