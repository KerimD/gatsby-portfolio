import React, { useEffect } from 'react';
import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Footer from '../components/Footer';

import './index.css';
import { EXPERIENCE, PROJECTS } from '../assets/data';
import favicon from '../assets/images/favicon.ico';
import portfolio from '../assets/images/png/portfolio.jpg';
import { createIntersectionObservers } from "../helpers/animations";

const HomePage = ({ data }: PageProps<Queries.HomePageQuery>) => {
  useEffect(() => {
    createIntersectionObservers();
  }, []);

  const contacts = data.allContentfulContact.nodes;
  const socials = data.allContentfulSocial.nodes;

  return (
    <>
      <Helmet titleTemplate='Deniz Kerim - %s'>
        <html lang='en' />
        <link rel='icon' href={favicon} />
        <title>Personal Computer Science Portfolio</title>
        <meta property='og:image' content={portfolio} />
        <meta
          name='description'
          content={`
            Deniz Kerim's personal computer science portfolio. View Deniz's
            projects and skills.
          `}
        />
        <meta name='referrer' content='origin' />
      </Helmet>
      <div className='home-page'>
        <header>
          <Nav />
          <Hero links={[...contacts, ...socials]} />
        </header>
        <main>
          <Works category='Experience' works={EXPERIENCE} />
          <Works category='Projects' works={PROJECTS} />
        </main>
        <Footer contacts={contacts} socials={socials} />
      </div>
    </>
  );
}

export default HomePage

export const query = graphql`
  query HomePage {
    allContentfulContact {
      nodes {
        name
        href
        icon {
          svg {
            content
          }
        }
      }
    }
    allContentfulSocial {
      nodes {
        name
        href
        icon {
          svg {
            content
          }
        }
      }
    }
  }
`
