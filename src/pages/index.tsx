import React from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import './index.scss';

const HomePage = () =>
  <div className="home-page">
    <header>
      <Nav />
      <Hero />
    </header>
    <main>
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>

export default HomePage
