import React from 'react';

import HeroLinks from './HeroLinks';

import './hero.css';
import face from '../../assets/images/png/face.jpg';

const Hero = () =>
  <div className='hero'>
    <div className='hero-info'>
      <h1>Deniz Kerim</h1>
      <p>
        I'm a Computer Science student at MST who is actively looking for a
        full time position starting summer of 2022 as a software engineer
      </p>
    </div>
    <img src={face} alt='my face' />
    <HeroLinks />
  </div >

export default Hero;
