import React from "react";

import Nav from "../components/Nav";
import About from "../components/About";
import Projects from "../components/Projects";

import './index.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <Nav />
      <About />
      <Projects />
    </div>
  );
}

export default HomePage
