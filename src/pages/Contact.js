import React from 'react';
import './css/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="4" placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
