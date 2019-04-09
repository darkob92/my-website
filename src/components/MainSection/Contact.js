import React from 'react'
import '../../sass/contact.scss'

const Contact = () => {
  return (
    <div className="contact-container">
      <h3>Want to work with me?</h3>
      <p>E-mail: <span>darko.bogovic92@gmail.com</span></p>
      <p>Phone: <span>+38595 550 7375</span></p>
      <p>Also, I am available on social networks: <span>facebook</span> <span>linkedin</span></p>
      <p>You can check my code on <a href="https://github.com/darkob92"><span>GitHub</span></a></p>
    </div>
  );
}

export default Contact;