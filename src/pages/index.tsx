import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

import './index.css';

const HomePage = () => {
  const animateWork =
    (element: HTMLElement, observer: IntersectionObserver) => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      observer.disconnect();
    }

  useEffect(() => {
    Array
      .from(document.getElementsByClassName('work')).forEach((v) =>
        new IntersectionObserver((entries, observer) =>
          entries[0].isIntersecting && animateWork(
            entries[0].target as HTMLElement, observer
          )).observe(v));
  }, []);

  return (
    <>
      <Helmet titleTemplate='Deniz Kerim - %s'>
        <title>Personal Computer Science Portfolio</title>
        <html lang='en' />
        <meta property='robots' content='all' />
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
