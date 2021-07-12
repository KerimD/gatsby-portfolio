import React from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

import './index.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <Nav />
      <Hero />
      <Projects />
    </div>
  );
}

export default HomePage
