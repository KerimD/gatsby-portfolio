import React from 'react';

import Work from '../Work';

import './experience.css';
import { EXPERIENCE } from '../../assets/data';

const Experience = () =>
  <section id='experience'>
    <h2>Experience</h2>
    <div className='experience-container'>
      {EXPERIENCE.map((experience) =>
        <Work {...experience} key={experience.name} />
      )}
    </div>
  </section>

export default Experience;
