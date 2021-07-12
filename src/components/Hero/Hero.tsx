import React, { useState, useEffect } from 'react';

import SocialLinks from "./SocialLinks";

import './hero.scss';
// import Document from '../../assets/images/svg/document.svg';

const COOL_TITLES: string[] = ['Deniz Kerim', 'Developer', 'Mentor', 'Designer', 'Engineer'];

const Hero = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  // const viewResume = () => window.open('https://www.google.com/');

  useEffect(() => {
    const interval = setInterval(() => 
      setTitleIdx(prevIdx => prevIdx < COOL_TITLES.length-1 ? prevIdx+1 : 0),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-info">
            <h1>{COOL_TITLES[titleIdx]}</h1>
            <p>
                I'm a computer science student at MST who
                is actively looking for an full time
                position as a software engineer.
            </p>
            {/* <button onClick={viewResume} className="view-resume-btn">
              <Document alt="" height="24" />
              <div>Resume</div>
            </button> */}
          </div>
          <SocialLinks />
        </div >
        <div className="bg-text student">Student</div>
        <div className="bg-text designer">Designer</div>
        <div className="bg-text mentor">Mentor</div>
        <div className="bg-text developer">Developer</div>
        <div className="bg-text engineer">Engineer</div>
      </div >
    </div>
  );
};

export default Hero;
