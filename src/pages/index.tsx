import React from 'react';
import { Helmet } from 'react-helmet';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import './index.css';

const HomePage = () =>
  <>
    <Helmet titleTemplate='Deniz Kerim - %s'>
      <title>Personal Computer Science Portfolio</title>
      <html lang='en' />
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
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  </>

export default HomePage
