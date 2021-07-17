import React from 'react';

import './project.scss';

const Project = ({ project }: { project: TypesN.ProjectItem }) => {
  return (
    <div className="project">
      <h3>{project.name}</h3>
      <div>{project.date}</div>
      {project.description}
    </div>
  );
};

export default Project;
