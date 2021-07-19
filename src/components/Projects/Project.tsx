import React from 'react';

import './project.scss';

const Project = ({ project }: { project: TypesN.Project }) => {
  return (
    <div className="project">
      <h3>{project.title}, {project.name}</h3>
      <div>{project.date}</div>
      {project.description}
      <img src={project.imageSrc} alt={project.name + ' image'} />
    </div>
  );
};

export default Project;
