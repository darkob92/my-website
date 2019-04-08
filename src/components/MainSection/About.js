import React from 'react'
import '../../sass/about.scss';

const About = () => {
  return (
    <div className="about-container">
      <h3>darko bogovic</h3>

      <div className="about-me">
        <div className="about-me__img">

        </div>

        <div className="about-me__text">
          <p>
            I am person passionate about technology currently living in
            Croatia. Right now, I am focused on frontend technologies, mainly
            on React.
          </p>
          <p>
            Besides my love for technology, I am big fan of GNK Dinamo Zagreb and football in general. Also, I love cooking.
          </p>
          <p>
            Technologies I am currently working with: 
            <ul className="skills">
              <li>html5</li>
              <li>css3</li>
              <li>sass</li>
              <li>javascript</li>
              <li>react</li>
              <li>gsap</li>
            </ul>
          </p>
          <p>Also, beside these frontend technologies, I am learning MobX, Node JS and Express JS.</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default About;