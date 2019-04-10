import React from 'react';
import '../../sass/journey.scss';
import { Spring } from 'react-spring/renderprops';

const Work = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 1500 }}
    >
      {props =>
        <div style={props} className="work-container">
          <div className="workItem">
            <h4 className="workItem__title">
              <span>Hrvatski Telekom</span>
              <span>2012-2014</span>
            </h4>
            <h5 className="workItem__type">
              <span>Position</span>
              <span>Customer Service Specialist</span>
            </h5>
          </div>
          <div className="workItem">
            <h4 className="workItem__title">
              <span>Transcom</span>
              <span>2014</span>
            </h4>
            <h5 className="workItem__type">
              <span>Position</span>
              <span>Customer Sales Representative</span>
            </h5>
          </div>
          <div className="workItem">
            <h4 className="workItem__title">
              <span>Transcom</span>
              <span>2015</span>
            </h4>
            <h5 className="workItem__type">
              <span>Position</span>
              <span>Customer Service Specialist</span>
            </h5>
          </div>
        </div>
      }
    </Spring>
  );
}

export default Work