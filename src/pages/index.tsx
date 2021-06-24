import React from "react";

import SocialLinks from "../components/SocialLinks";

import '../styles/index.scss';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page">
        <div className="temp-background-picture" />
        <div className="temp-nav-bar" />
        <div className="main-content">
          <div className="temp-about" />
          <SocialLinks />
        </div>
        {/* <Projects /> */}
      </div>
    </div>
  );
}

export default HomePage
