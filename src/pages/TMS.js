import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaRoad, FaMobileAlt, FaChartLine, FaClock, FaShieldAlt } from 'react-icons/fa';
import '../assets/styles/Services.css';

const TMS = () => {
  return (
    <div className="service-detail-page">
      <section className="page-hero">
        <div className="container">
          <h1 data-aos="fade-up">Toll Management System</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Advanced automated toll collection and management solutions
          </p>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text" data-aos="fade-right">
              <h2 className="section-title">Complete Toll Plaza Solutions</h2>
              <p>
                Our Toll Management System (TMS) provides a comprehensive solution for modern 
                toll plaza operations. We integrate cutting-edge technology with proven processes 
                to deliver seamless, efficient, and reliable toll collection services.
              </p>
              <p>
                From Electronic Toll Collection (ETC) to FASTag implementation, our TMS solutions 
                are designed to minimize wait times, maximize revenue collection, and provide 
                real-time visibility into operations.
              </p>
            </div>
            <div className="overview-features" data-aos="fade-left">
              <div className="feature-box">
                <FaRoad className="feature-box-icon" />
                <h3>Lane Automation</h3>
                <p>Fully automated toll lanes with vehicle classification</p>
              </div>
              <div className="feature-box">
                <FaMobileAlt className="feature-box-icon" />
                <h3>FASTag Integration</h3>
                <p>Seamless RFID-based electronic toll collection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section key-features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-detail-grid">
            <div className="feature-detail-card" data-aos="zoom-in">
              <FaCheckCircle className="feature-detail-icon" />
              <h3>Electronic Toll Collection</h3>
              <p>
                RFID-based FASTag system enabling contactless toll payment with automatic 
                vehicle detection and classification.
              </p>
            </div>
            <div className="feature-detail-card" data-aos="zoom-in" data-aos-delay="100">
              <FaChartLine className="feature-detail-icon" />
              <h3>Revenue Management</h3>
              <p>
                Real-time revenue tracking, automated reconciliation, and comprehensive 
                financial reporting systems.
              </p>
            </div>
            <div className="feature-detail-card" data-aos="zoom-in" data-aos-delay="200">
              <FaClock className="feature-detail-icon" />
              <h3>Traffic Monitoring</h3>
              <p>
                24/7 surveillance with CCTV integration, vehicle counting, and traffic 
                pattern analysis.
              </p>
            </div>
            <div className="feature-detail-card" data-aos="zoom-in" data-aos-delay="300">
              <FaShieldAlt className="feature-detail-icon" />
              <h3>Security Systems</h3>
              <p>
                Advanced security measures including boom barriers, ANPR cameras, and 
                violation detection systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tech-specs">
        <div className="container">
          <h2 className="section-title">Technical Specifications</h2>
          <div className="specs-grid">
            <div className="spec-category" data-aos="fade-up">
              <h3>Hardware Components</h3>
              <ul>
                <li>RFID Reader Systems</li>
                <li>Automatic Number Plate Recognition (ANPR)</li>
                <li>Vehicle Classification Sensors</li>
                <li>Boom Barriers & Traffic Lights</li>
                <li>High-Resolution CCTV Cameras</li>
                <li>UPS & Power Backup Systems</li>
              </ul>
            </div>
            <div className="spec-category" data-aos="fade-up" data-aos-delay="100">
              <h3>Software Features</h3>
              <ul>
                <li>Real-time Transaction Processing</li>
                <li>Automated Revenue Reconciliation</li>
                <li>Multi-lane Management</li>
                <li>Exception Handling</li>
                <li>Comprehensive Reporting</li>
                <li>Remote Monitoring Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits">
        <div className="container">
          <h2 className="section-title">Benefits</h2>
          <div className="benefits-list">
            <div className="benefit-item" data-aos="fade-right">
              <div className="benefit-number">01</div>
              <div className="benefit-content">
                <h3>Reduced Wait Times</h3>
                <p>Electronic toll collection reduces average transaction time to under 2 seconds</p>
              </div>
            </div>
            <div className="benefit-item" data-aos="fade-left">
              <div className="benefit-number">02</div>
              <div className="benefit-content">
                <h3>Increased Revenue</h3>
                <p>Automated systems eliminate revenue leakage and ensure accurate collection</p>
              </div>
            </div>
            <div className="benefit-item" data-aos="fade-right">
              <div className="benefit-number">03</div>
              <div className="benefit-content">
                <h3>Enhanced Security</h3>
                <p>24/7 surveillance and violation detection systems ensure complete security</p>
              </div>
            </div>
            <div className="benefit-item" data-aos="fade-left">
              <div className="benefit-number">04</div>
              <div className="benefit-content">
                <h3>Real-time Insights</h3>
                <p>Comprehensive analytics and reporting for data-driven decision making</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <div className="cta-box" data-aos="fade-up">
            <h2>Interested in Our TMS Solutions?</h2>
            <p>Contact us to learn how we can modernize your toll plaza operations</p>
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TMS;
