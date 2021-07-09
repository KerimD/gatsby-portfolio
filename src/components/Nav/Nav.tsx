import React from "react";

import './nav.scss';

const Nav = () => {
  const viewResume = () => console.log('view resume');

  return (
    <div className="nav">
      <button onClick={viewResume} className="view-resume-btn">
        Resume
      </button>
      <ul className="nav-link-list">
        <li><a href="/">About</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <div className="corner-svg-wrapper" />
    </div>
  );
}

export default Nav
