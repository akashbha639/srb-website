import React from 'react';
import { Link } from 'react-router-dom';
import { FaWind, FaLightbulb, FaFire, FaVideo } from 'react-icons/fa';

import '../assets/styles/Services.css';

const Tunnel = () => {
  return (
    <div className="service-detail-page">
      <section className="page-hero">
        <div className="container">
          <h1 data-aos="fade-up">Tunnel Installation & Management</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Complete tunnel infrastructure solutions for safe passage
          </p>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text" data-aos="fade-right">
              <h2 className="section-title">Comprehensive Tunnel Solutions</h2>
              <p>
                Our Tunnel Installation & Management services provide end-to-end solutions for 
                road and railway tunnels. From ventilation and lighting systems to advanced 
                safety measures, we ensure that every tunnel operates efficiently and safely 
                under all conditions.
              </p>
              <p>
                With expertise in both new installations and retrofitting existing tunnels, we 
                deliver state-of-the-art systems that meet international safety standards and 
                provide reliable, long-term performance.
              </p>
            </div>
            <div className="overview-features" data-aos="fade-left">
              <div className="feature-box">
                <FaWind className="feature-box-icon" />
                <h3>Ventilation Systems</h3>
                <p>Advanced air quality management and smoke extraction</p>
              </div>
              <div className="feature-box">
                <FaFire className="feature-box-icon" />
                <h3>Fire Safety</h3>
                <p>Complete fire detection and suppression systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section key-features">
        <div className="container">
          <h2 className="section-title">Core Systems</h2>
          <div className="features-detail-grid">
            <div className="feature-detail-card" data-aos="zoom-in">
              <FaWind className="feature-detail-icon" />
              <h3>Ventilation System</h3>
              <p>
                Intelligent ventilation with automated control, air quality monitoring, and 
                emergency smoke extraction capabilities.
              </p>
            </div>
            <div className="feature-detail-card" data-aos="zoom-in" data-aos-delay="100">
              <FaLightbulb className="feature-detail-icon" />
              <h3>LED Lighting</h3>
              <p>
                Energy-efficient LED lighting systems with adaptive brightness control and 
                emergency lighting backup.
              </p>
            </div>
            <div className="feature-detail-card" data-aos="zoom-in" data-aos-delay="200">
              <FaFire className="feature-detail-icon" />
              <h3>Fire Safety</h3>
              <p>
                Comprehensive fire detection, alarm systems, and automated suppression with 
                emergency response protocols.
              </p>
            </div>
            <div className="feature-detail-card" data-aos="zoom-in" data-aos-delay="300">
              <FaVideo className="feature-detail-icon" />
              <h3>Surveillance</h3>
              <p>
                24/7 CCTV monitoring with thermal imaging, incident detection, and integration 
                with control centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tech-specs">
        <div className="container">
          <h2 className="section-title">System Components</h2>
          <div className="specs-grid">
            <div className="spec-category" data-aos="fade-up">
              <h3>Safety Infrastructure</h3>
              <ul>
                <li>Jet Fan Ventilation Systems</li>
                <li>CO & Visibility Sensors</li>
                <li>Emergency Escape Routes</li>
                <li>Fire Hydrant Systems</li>
                <li>Emergency Communication</li>
                <li>Evacuation Signage</li>
              </ul>
            </div>
            <div className="spec-category" data-aos="fade-up" data-aos-delay="100">
              <h3>Monitoring & Control</h3>
              <ul>
                <li>Tunnel Management System</li>
                <li>SCADA Integration</li>
                <li>Environmental Monitoring</li>
                <li>Traffic Control Systems</li>
                <li>Video Wall Displays</li>
                <li>Remote Monitoring Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits">
        <div className="container">
          <h2 className="section-title">Key Advantages</h2>
          <div className="benefits-list">
            <div className="benefit-item" data-aos="fade-right">
              <div className="benefit-number">01</div>
              <div className="benefit-content">
                <h3>Enhanced Safety</h3>
                <p>Multi-layered safety systems ensure maximum protection for tunnel users</p>
              </div>
            </div>
            <div className="benefit-item" data-aos="fade-left">
              <div className="benefit-number">02</div>
              <div className="benefit-content">
                <h3>Energy Efficiency</h3>
                <p>LED lighting and smart ventilation reduce operational costs by up to 40%</p>
              </div>
            </div>
            <div className="benefit-item" data-aos="fade-right">
              <div className="benefit-number">03</div>
              <div className="benefit-content">
                <h3>Rapid Response</h3>
                <p>Automated systems enable instant emergency response and evacuation</p>
              </div>
            </div>
            <div className="benefit-item" data-aos="fade-left">
              <div className="benefit-number">04</div>
              <div className="benefit-content">
                <h3>Compliance</h3>
                <p>All systems meet international tunnel safety standards and regulations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <div className="cta-box" data-aos="fade-up">
            <h2>Need Tunnel Infrastructure Solutions?</h2>
            <p>Let's discuss how we can make your tunnel safer and more efficient</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tunnel;
