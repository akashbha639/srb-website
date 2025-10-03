import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span>SRB</span> SMARTWAYS
            </h3>
            <p className="footer-description">
              Backed with 14 years of strong and successful experience in TMS and ATMS domain, 
              delivering intelligent infrastructure solutions for tomorrow's highways.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link"><FaFacebook /></a>
              <a href="https://twitter.com" className="social-link"><FaTwitter /></a>
              <a href="https://linkedin.com" className="social-link"><FaLinkedin /></a>
              <a href="https://instagram.com" className="social-link"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/tms">Toll Management System</Link></li>
              <li><Link to="/services/atms">Traffic Management System</Link></li>
              <li><Link to="/services/tunnel">Tunnel Installation</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li>
                <FaPhone />
                <span>+91 XXX XXX XXXX</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@srbsmartways.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 SRB Smartways Pvt Ltd. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="https://srbsmartways.com/privacy">Privacy Policy</a>
            <span>|</span>
            <a href="https://srbsmartways.com/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
