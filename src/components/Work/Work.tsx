import React from 'react';

import './work.css';
import Github from '../../assets/images/svg/github.svg';

const Work = (work: TypesN.Work) =>
  <div className='work'>
    <div className='work-information'>
      <h3>
        {work.title && `${work.title}, `}
        {work.name}
      </h3>
      <time>{work.date}</time>
      <p>{work.description}</p>
      {work.github &&
        <a href={work.github} target='_blank' rel='noreferrer'>
          <Github height='22' />Github
        </a>}
      <div className='tool-logos'>
        {work.softwareTools.map((tool) =>
          <a
            key={work.name + tool.name}
            href={tool.href}
            target='_blank'
            rel='noreferrer'
          >
            <tool.logo />
          </a>
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

export default Work;
