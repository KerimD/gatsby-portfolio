import React from 'react';

import HeroLinks from './HeroLinks';

import './hero.css';

const Hero = ({ links }: TypesN.Links) =>
  <div className='hero'>
    <div className='hero-info'>
      <h1>Deniz Kerim</h1>
      <p>
        Welcome!<br />
        {"I'm a fresh graduate from "}
        <a
          href='https://www.mst.edu/'
          target='_blank'
          rel='noreferrer'
        >
          {"Missouri University of Science & Technology"}
        </a>
        {" with a B.S. in Computer Science!"}
      </p>
    </div>
    <HeroLinks links={links} />
  </div>

export default Hero;
