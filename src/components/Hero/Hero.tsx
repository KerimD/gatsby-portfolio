import React from 'react';

import HeroLinks from './HeroLinks';

import './hero.css';

const Hero = () =>
  <div className='hero'>
    <div className='hero-info'>
      <h1>Deniz Kerim</h1>
      <p>
        Welcome!,<br />
        I'm a Computer Science student at MST who is actively looking for a
        full time position starting summer of 2022 as a Software Engineer
      </p>
    </div>
    <HeroLinks />
  </div>

export default Hero;
