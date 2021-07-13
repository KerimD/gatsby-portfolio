import React from 'react';

import './experience_item.scss';

const ExperienceItem = ({ experienceItem }: { experienceItem: TypesN.ProjectData }) => {
  return (
    <div className="experience-item">
      <h3>{experienceItem.name}</h3>
      <div>{experienceItem.date}</div>
      {experienceItem.description}
    </div>
  );
};

export default ExperienceItem;
