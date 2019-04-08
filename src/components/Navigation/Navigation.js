import React from 'react'
import '../../sass/navigation.scss'

const Navigation = () => {
  return (
    <nav className="navigation-container">
      <ul className="navigation">
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span>01</span>
            Journey
            <span>With</span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span>02</span>
            About
            <span>Who</span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span>03</span>
            Contact
            <span>Me</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;