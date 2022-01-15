import React from 'react';

import HeroLinks from './HeroLinks';

import './hero.css';

const Hero = () =>
  <div className='hero'>
    <div className='hero-info'>
      <h1>Deniz Kerim</h1>
      <p>
        Welcome!<br />
        {`I'm a Computer Science student at Missouri University of Science & Technology`}
      </p>
    </div>
    <HeroLinks />
  </div>

export default Hero;
