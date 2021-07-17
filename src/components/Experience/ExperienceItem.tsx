import React from 'react';

import './experience_item.scss';

const ExperienceItem = ({ experienceItem }: { experienceItem: TypesN.ExperienceItem }) => {
  return (
    <div className="experience-item">
      <h3>{experienceItem.title}{' @ '}{experienceItem.company}</h3>
      <div>{experienceItem.date}</div>
      <ul>
        {experienceItem.bulletPoints.map((bp) => <li>{bp}</li>)}
      </ul>
    </div>
  );
};

export default ExperienceItem;
