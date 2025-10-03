import React from 'react';
import { Link } from 'react-router-dom';
import { FaRoad, FaTrafficLight, FaMountain, FaCheckCircle, FaAward, FaUsers } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import '../assets/styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">
              Intelligent Infrastructure for <span>Tomorrow's Highways</span>
            </h1>
            <p className="hero-subtitle">
              14 Years of Excellence in Toll Management, Traffic Systems & Tunnel Solutions
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn-primary">Explore Solutions</Link>
              <Link to="/contact" className="btn-secondary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-content" data-aos="fade-right">
              <h2 className="section-title">About SRB Smartways</h2>
              <p>
                SRB SMARTWAYS is backed with strong and successful Experience and Expertise in the 
                TMS and ATMS Domain. With 14 years of ground and management experience, we deliver 
                cutting-edge solutions for modern infrastructure challenges.
              </p>
              <p>
                Our commitment to Quality & Committed Work has made us a trusted partner for 
                government and private sector projects across India.
              </p>
              <Link to="/about" className="btn-primary">Learn More About Us</Link>
            </div>
            <div className="about-preview-stats" data-aos="fade-left">
              <div className="stat-card">
                <FaAward className="stat-icon" />
                <h3>14+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat-card">
                <FaCheckCircle className="stat-icon" />
                <h3>100+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <FaUsers className="stat-icon" />
                <h3>50+</h3>
                <p>Expert Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions for modern transportation infrastructure
          </p>
          <div className="services-grid">
            <ServiceCard
              icon={<FaRoad />}
              title="Toll Management System"
              description="Advanced toll collection and management solutions with automated systems, electronic toll collection, and real-time monitoring."
              link="/services/tms"
            />
            <ServiceCard
              icon={<FaTrafficLight />}
              title="Advanced Traffic Management"
              description="Intelligent traffic control systems with real-time monitoring, adaptive signal control, and incident management capabilities."
              link="/services/atms"
            />
            <ServiceCard
              icon={<FaMountain />}
              title="Tunnel Installation"
              description="Complete tunnel infrastructure solutions including ventilation, lighting, fire safety, and surveillance systems."
              link="/services/tunnel"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose SRB Smartways?</h2>
          <div className="features-grid">
            <div className="feature-item" data-aos="zoom-in">
              <div className="feature-number">01</div>
              <h3>Proven Expertise</h3>
              <p>14 years of successful project delivery in TMS and ATMS domains</p>
            </div>
            <div className="feature-item" data-aos="zoom-in" data-aos-delay="100">
              <div className="feature-number">02</div>
              <h3>Quality Assurance</h3>
              <p>Commitment to delivering high-quality, reliable infrastructure solutions</p>
            </div>
            <div className="feature-item" data-aos="zoom-in" data-aos-delay="200">
              <div className="feature-number">03</div>
              <h3>Advanced Technology</h3>
              <p>Integration of latest technologies for smart infrastructure management</p>
            </div>
            <div className="feature-item" data-aos="zoom-in" data-aos-delay="300">
              <div className="feature-number">04</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock technical support and maintenance services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Transform Your Infrastructure?</h2>
            <p>Let's discuss how we can help you build smarter, more efficient transportation systems</p>
            <Link to="/contact" className="btn-primary">Request a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
