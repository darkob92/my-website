import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/sidebar.scss';
import facebook from '../../img/facebook.svg';
import github from '../../img/github.svg';
import linkedin from '../../img/linkedin.svg';

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo-box">
        <Link to="/">
          <h1 className="logo">
            <span>D</span>
            <span>B</span>
          </h1>
        </Link>
      </div>
      <div className="icons-container">
        <div className="icon-box">
          <a href="https://www.facebook.com/profile.php?id=100009722409511">
            <img className="icon" src={facebook} alt="facebook-logo" />
          </a>
        </div>
        <div className="icon-box">
          <a href="https://www.linkedin.com/in/darko-bogovic92/">
            <img className="icon" src={github} alt="facebook-logo" />
          </a>
        </div>
        <div className="icon-box">
          <a href="https://github.com/darkob92">
            <img className="icon" src={linkedin} alt="facebook-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;