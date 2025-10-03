import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import '../assets/styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1 data-aos="fade-up">Get In Touch</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Let's discuss how we can help transform your infrastructure
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info" data-aos="fade-right">
              <h2>Contact Information</h2>
              <p className="contact-intro">
                We're here to answer your questions and discuss your project requirements. 
                Reach out to us through any of the following channels.
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-content">
                    <h3>Office Address</h3>
                    <p>SRB Smartways Pvt Ltd<br />Mumbai, Maharashtra<br />India - 400001</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>+91 XXX XXX XXXX<br />+91 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>info@srbsmartways.com<br />support@srbsmartways.com</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <FaClock />
                  </div>
                  <div className="info-content">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <FaFacebook />
                  </a>
                  <a href="#" className="social-link">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social-link">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="social-link">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper" data-aos="fade-left">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Find Us</h2>
          <div className="map-placeholder" data-aos="fade-up">
            <div className="map-content">
              <FaMapMarkerAlt className="map-icon" />
              <p>Interactive Map Location</p>
              <span>Replace with Google Maps embed or similar service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
