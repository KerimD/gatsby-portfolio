import React from 'react';

import SocialLinks from "./SocialLinks";

import './about.scss';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about">
        <div className="about-content">
          <div className="about-text">
            <h1>{"Deniz Kerim"}</h1>
            <p>
                {"I am a computer science student at Missouri"} <br />
                {"University of Science & Technology who"} <br />
                {"is actively looking for an full time"} <br />
                {"position as a software engineer."}
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
    </div>
  );
};

export default About;
