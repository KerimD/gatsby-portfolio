import React from 'react';

import './works.css';
import Github from '../../assets/images/svg/github.svg';

const Works = ({ category, works }: TypesN.WorksProps) =>
  <section className='works' id={category.toLowerCase()}>
    <h2>{category}</h2>
    <div className='works-container'>
      {works.map((work) =>
        <div className='work' key={work.name}>
          <div className='work-information'>
            <h3>
              {work.title && `${work.title}, `}
              {work.name}
            </h3>
            <time>{work.date}</time>
            <p>{work.description}</p>
            {work.github &&
              <a href={work.github} target='_blank' rel='noreferrer'>
                <Github height='22' />View on GitHub
              </a>}
            <div className='tool-logos'>
              {work.softwareTools.map((tool) => tool.href ?
                <a
                  key={work.name + tool.name}
                  href={tool.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  <tool.logo />
                </a> :
                <div key={work.name + tool.name}>
                  <tool.logo />
                </div>
              )}
            </div>
          </div>
          <a
            className='image-link'
            href={work.liveSite}
            target='_blank'
            rel='noreferrer'
          >
            <img src={work.preview} alt={work.name + ' image'} />
          </a>
        </div>
      )}
    </div>
  </section>

export default Works;
