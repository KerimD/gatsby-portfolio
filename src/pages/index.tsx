import React from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

import './index.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <Nav />
        <Hero />
      </header>
      <div id="body">
        {/* <Experience /> */}
        <Projects />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage
