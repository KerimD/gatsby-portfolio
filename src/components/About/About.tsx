import React from "react";

import './about.scss';
import { RECOMMENDATIONS } from '../../assets/data';

const About = () =>
  <section id='about'>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a quam nec sem varius dictum. Duis erat risus, sodales eu est et, tristique tincidunt libero. In sit amet orci non purus gravida imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a quam nec sem varius dictum. Duis erat risus, sodales eu est et, tristique tincidunt libero. In sit amet orci non purus gravida imperdiet.</p>
    <div className='recommendation-cards'>
      {RECOMMENDATIONS.map((r) =>
        <div className='recommendation-card'>
          <h4>{r.user.name}</h4>
          <div className='who'>{r.user.who}</div>
          <p>{r.content}</p>
        </div>
      )}
    </div>
  </section>

export default About
