import React from 'react';
import { Link } from 'react-router-dom';
import { FaRoad, FaTrafficLight, FaMountain, FaCog, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import '../assets/styles/Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1 data-aos="fade-up">Our Services</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Comprehensive infrastructure solutions for modern transportation systems
          </p>
        </div>
      </section>

      <section className="section services-intro">
        <div className="container">
          <div className="intro-content" data-aos="fade-up">
            <h2 className="section-title">What We Offer</h2>
            <p>
              SRB Smartways provides end-to-end solutions for transportation infrastructure, 
              combining cutting-edge technology with years of industry expertise. Our services 
              are designed to enhance efficiency, safety, and sustainability across all 
              aspects of modern traffic management.
            </p>
          </div>
        </div>
      </section>

      <section className="section main-services">
        <div className="container">
          <div className="services-detailed-grid">
            <div className="service-detailed-card" data-aos="fade-up">
              <div className="service-detailed-icon">
                <FaRoad />
              </div>
              <h3>Toll Management System (TMS)</h3>
              <p>
                Comprehensive toll collection and management solutions with automated systems, 
                electronic toll collection, FASTag integration, and real-time revenue monitoring. 
                Our TMS solutions ensure seamless operations and maximum efficiency.
              </p>
              <ul className="service-features">
                <li>Electronic Toll Collection (ETC)</li>
                <li>FASTag Implementation</li>
                <li>Automated Lane Control</li>
                <li>Revenue Management Systems</li>
                <li>Real-time Monitoring & Analytics</li>
              </ul>
              <Link to="/services/tms" className="service-detailed-link">
                Learn More →
              </Link>
            </div>

            <div className="service-detailed-card" data-aos="fade-up" data-aos-delay="100">
              <div className="service-detailed-icon">
                <FaTrafficLight />
              </div>
              <h3>Advanced Traffic Management System (ATMS)</h3>
              <p>
                Intelligent traffic control and monitoring systems that optimize traffic flow, 
                reduce congestion, and improve road safety through real-time data analysis and 
                adaptive signal control.
              </p>
              <ul className="service-features">
                <li>Adaptive Signal Control</li>
                <li>CCTV Surveillance Network</li>
                <li>Incident Detection & Management</li>
                <li>Variable Message Signs (VMS)</li>
                <li>Integrated Command Centers</li>
              </ul>
              <Link to="/services/atms" className="service-detailed-link">
                Learn More →
              </Link>
            </div>

            <div className="service-detailed-card" data-aos="fade-up" data-aos-delay="200">
              <div className="service-detailed-icon">
                <FaMountain />
              </div>
              <h3>Tunnel Installation & Management</h3>
              <p>
                Complete tunnel infrastructure solutions including ventilation systems, lighting, 
                fire safety, emergency response systems, and 24/7 monitoring to ensure safe 
                passage through tunnels.
              </p>
              <ul className="service-features">
                <li>Tunnel Ventilation Systems</li>
                <li>LED Lighting Solutions</li>
                <li>Fire Detection & Suppression</li>
                <li>Emergency Response Systems</li>
                <li>Traffic Control & Surveillance</li>
              </ul>
              <Link to="/services/tunnel" className="service-detailed-link">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section additional-services">
        <div className="container">
          <h2 className="section-title">Additional Services</h2>
          <div className="additional-grid">
            <div className="additional-card" data-aos="zoom-in">
              <FaCog className="additional-icon" />
              <h3>System Integration</h3>
              <p>Seamless integration of multiple systems for unified operations</p>
            </div>
            <div className="additional-card" data-aos="zoom-in" data-aos-delay="100">
              <FaHeadset className="additional-icon" />
              <h3>24/7 Support</h3>
              <p>Round-the-clock technical support and maintenance services</p>
            </div>
            <div className="additional-card" data-aos="zoom-in" data-aos-delay="200">
              <FaShieldAlt className="additional-icon" />
              <h3>Training & Consultation</h3>
              <p>Comprehensive training programs for your operational team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <div className="cta-box" data-aos="fade-up">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how our solutions can transform your infrastructure</p>
            <Link to="/contact" className="btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
