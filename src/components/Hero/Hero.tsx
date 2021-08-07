import React from 'react';

import HeroLinks from "./HeroLinks";

import './hero.css';

const Hero = () =>
  <div className="hero">
    <div className="hero-content">
      <div className="hero-info">
        <h1>Deniz Kerim</h1>
        <p>
          I'm a computer science student at MST who
          is actively looking for an full time
          position as a software engineer.
        </p>
      </div>
      <HeroLinks />
    </div >
  </div >

export default Hero;
