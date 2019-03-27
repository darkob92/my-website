import React from 'react';
import '../../sass/navigation.scss';

const Navigation = () => {
  return(
    <nav className="navigation-container">
      <ul className="navigation">
        <li className="navigation__item"><a href="#" className="navigation__link">Work</a></li>
        <li className="navigation__item"><a href="#" className="navigation__link">Journey</a></li>
        <li className="navigation__item"><a href="#" className="navigation__link">About</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;