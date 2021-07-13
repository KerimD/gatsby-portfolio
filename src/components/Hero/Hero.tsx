import React from 'react';

import SocialLinks from "./SocialLinks";

import './hero.scss';

const Hero = () => {
  return (
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
        <SocialLinks />
      </div >
      <div className="bg-text student">Student</div>
      <div className="bg-text designer">Designer</div>
      <div className="bg-text mentor">Mentor</div>
      <div className="bg-text developer">Developer</div>
      <div className="bg-text engineer">Engineer</div>
    </div >
  );
};

export default Hero;
