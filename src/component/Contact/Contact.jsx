import React from "react";
import Nav from "../nav/Nav";
import "./contact.css";
import Foot from "../footer/foot";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <>
      <Nav />
      <section className="contact-section">
        <div className="container">
          <h2
            className="section-title"
            style={{
              color: "#e5d0a8",
              marginBottom: "20px",
            }}
          >
            Get in Touch
          </h2>
          <p className="contact-description" style={{ color: "wheat" }}>
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Reach out via the form below!
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              style={{ margin: "0", marginTop: "30px" }}
              className="submit-btn black"
            >
              Send Message
            </button>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
      <Foot />
    </>
  );
};

export default Contact;
