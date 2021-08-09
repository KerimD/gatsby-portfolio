import React from 'react';

import Work from '../Work';

import './education.css';
import { EDUCATION } from '../../assets/data';

const Education = () =>
  <section id='education'>
    <h2>Education</h2>
    <div className='education-container'>
      {EDUCATION.map((education) =>
        <Work {...education} key={education.name} />
      )}
    </div>
  </section>

export default Education;
