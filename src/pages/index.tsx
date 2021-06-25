import React from "react";

import About from "../components/About";
import Projects from "../components/Projects";

import './index.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="temp-nav-bar" />
      <About />
      <Projects />
    </div>
  );
}

export default HomePage
