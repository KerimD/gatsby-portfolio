import React from 'react';

import ExperienceItem from './ExperienceItem';

import './experience.scss';
import { EXPERIENCE_ITEMS } from '../../assets/data';

const Experiences = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="section-content">
          {EXPERIENCE_ITEMS.map((experienceItem) =>
            <ExperienceItem
              key={experienceItem.title}
              experienceItem={experienceItem}
            />
          )}
      </div>
    </section>
  );
};

export default Experiences;
