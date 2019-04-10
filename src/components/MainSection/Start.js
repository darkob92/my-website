import React from 'react';
import '../../sass/start.scss';
import { Spring } from 'react-spring/renderprops';

const Start = () => {
  return(
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 1500 }}
    >
      {props =>
        <div style={props} className="start-container">
          <h3>こんにちわ (Kon'nichiwa)</h3>

          <div className="intro">
            <p>I am Darko Bogovic, frontend developer based in Croatia. I enjoy creating websites and solving problems using modern frontend technologies.</p>
          </div>
        </div>
      }
    </Spring>
  );
}

export default Start;