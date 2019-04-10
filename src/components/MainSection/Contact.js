import React from 'react';
import '../../sass/contact.scss';
import {Spring} from 'react-spring/renderprops';


const Contact = () => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 1500 }}
    >
      {props => 
        <div style={props} className="contact-container">
            <h3>Want to work with me?</h3>
            <p>E-mail: <span>darko.bogovic92@gmail.com</span></p>
            <p>Phone: <span>+38595 550 7375</span></p>
            <p>Also, I am available on social networks: <a href="https://www.facebook.com/profile.php?id=100009722409511"><span>facebook</span></a> <a href="https://www.linkedin.com/in/darko-bogovic92/"><span>linkedin</span></a></p>
            <p>You can check my code on <a href="https://github.com/darkob92"><span>GitHub</span></a></p>
          </div>
      }
    </Spring>
  );
}

export default Contact;