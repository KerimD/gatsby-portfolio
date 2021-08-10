import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

import './index.css';
import favicon from '../assets/images/favicon.ico';
import { createIntersectionObservers } from "../helpers/animations";

const HomePage = () => {
  useEffect(() => {
    createIntersectionObservers();
  }, []);

  return (
    <>
      <Helmet titleTemplate='Deniz Kerim - %s'>
        <html lang='en' />
        <link rel='icon' href={favicon} />
        <title>Personal Computer Science Portfolio</title>
        <meta
          name='description'
          content={`
            Deniz Kerim's personal computer science portfolio. View Deniz's
            projects and skills.
          `}
        />
      </Helmet>
      <div className='home-page'>
        <header>
          <Nav />
          <Hero />
        </header>
        <main>
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default HomePage
