import React from 'react'
import { Link } from 'react-router-dom';
import '../../sass/navigation.scss'

const Navigation = () => {
  return (
    <nav className="navigation-container">
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/journey" className="navigation__link">
            <span>01</span>
            Journey
            <span>With</span>
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/about" className="navigation__link">
            <span>02</span>
            About
            <span>Who</span>
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/contact" className="navigation__link">
            <span>03</span>
            Contact
            <span>Me</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;