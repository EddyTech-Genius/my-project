import React from "react";
import "../main/styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We’d love to hear from you. Whether you have a question, a project
            idea, or just want to say hello, feel free to reach out.
          </p>

          <div className="info-item">
            <span>📍</span>
            Accra, Ghana
          </div>
          <div className="info-item">
            <span>📧</span>
            contact@yourdomain.com
          </div>
          <div className="info-item">
            <span>📞</span>
            +233 00 000 0000
          </div>
        </div>
        <div className="contact-form">
          <h3>Send a Message</h3>
          <p>Fill out the form below and we’ll respond as soon as possible.</p>

          <form className=".contact__form">
            <div>
              <label className="contact__label">First Name</label>
              <input className="contact__input" type="text" placeholder="John" />
            </div>
            <div>
              <label className="contact__label">Last Name</label>
              <input className="contact__input" type="text" placeholder="Doe" />
            </div>
            <div className="full">
              <label className="contact__label">Email Address</label>
              <input className="contact__input" type="email" placeholder="john@example.com" />
            </div>
            <div className="full">
              <label className=".contact__label">Message</label>
              <textarea placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit" className="contact__button" >Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
