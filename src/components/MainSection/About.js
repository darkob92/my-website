import React from 'react'
import '../../sass/about.scss';

const About = () => {
  return (
    <div className="about-container">
      <h3>Who am I?</h3>

      <div className="about-me">
        <div className="about-me__img">
          {/* placeholder for img */}
        </div>

        <div className="about-me__text">
          <p>
            I am person passionate about technology currently living in
            Croatia. Right now, I am focused on frontend technologies, mainly
            on React. I started studyng on Faculty of law in Osijek, but quit studies beacuse I wanted to pursuit career in web development where I found my passion. Later, I finished course for web designer and development in Osijek.
          </p>
          <p>You can see me as a team player, communicative, self initiative person and person who can perform very well under stressfull situations.</p>
          <p>
            After love for technology, I am big fan of GNK Dinamo Zagreb and football in general. Also, I'm a big fan of esports.
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
          <p>Also, I am learning MobX, Node JS and Express JS.</p>
          <p>Beside all listed technologies, I can also do some UI/UX design in Adobe Xd.</p>
        </div>
      </div>
    </div>
  );
}

export default About;