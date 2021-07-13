import React from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
// import About from "../components/About";
// import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

import './index.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <Nav />
        <Hero />
      </header>
      <div id="body">
        {/* <About /> */}
        <Experience />
        <Projects />
        {/* <Contact /> */}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage
