import React from 'react'
import '../../sass/about.scss';

const About = () => {
  return (
    <div className="about-container">
      <h3>I am Darko Bogovic</h3>

      <div className="about-me">
        <h4>What do you need to know about me?</h4>

        <div className="about-me__text">
          <p>
            I am person passionate about technology currently living in
            Croatia. Right now, I am focused on frontend technologies, mainly
            on React.
          </p>
          <p>
            Besides my love for technology, I am big fan of GNK Dinamo Zagreb and football in general. Also, I love cooking.
          </p>
        </div>
        <div className="about-me__img">
        
        </div>
      </div>
    </div>
  );
}

export default About;