import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrafficLight, FaVideo, FaBell, FaChartBar } from 'react-icons/fa';

import '../assets/styles/Services.css';

const ATMS = () => {
  return (
    <div className="service-detail-page">
      <section className="page-hero">
        <div className="container">
          <h1 data-aos="fade-up">Advanced Traffic Management System</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Intelligent traffic control and monitoring for smarter cities
          </p>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text" data-aos="fade-right">
              <h2 className="section-title">Smart Traffic Solutions</h2>
              <p>
                Our Advanced Traffic Management System (ATMS) leverages cutting-edge technology 
                to optimize traffic flow, reduce congestion, and enhance road safety. Through 
                real-time monitoring and adaptive control systems, we help cities manage their 
                transportation networks more efficiently.
              </p>
              <p>
                From intelligent signal control to incident detection and management, our ATMS 
                solutions provide comprehensive visibility and control over your traffic infrastructure.
              </p>
            </div>
            <div className="overview-features" data-aos="fade-left">
              <div className="feature-box">
                <FaTrafficLight className="feature-box-icon" />
                <h3>Adaptive Signals</h3>
                <p>Smart traffic lights that adjust in real-time</p>
              </div>
              <div className="feature-box">
                <FaVideo className="feature-box-icon" />
                <h3>Video Surveillance</h3>
                <p>Complete CCTV network with AI-powered analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section key-features">
        <div className="container">
          <h2 className="section-title">System Components</h2>
          <div className="features-detail-grid">
            <div className="feature-detail-card" data-aos="zoom-in">
              <FaTrafficLight className="feature-detail-icon" />
              <h3>Adaptive Signal Control</h3>
              <p>
                Dynamic traffic signal timing based on real-time traffic conditions, vehicle 
                density, and congestion patterns.
              </p>
            </div>
            <div className="feature-detail-card" data-aos="zoom-in" data-aos-delay="100">
              <FaVideo className="feature-detail-icon" />
              <h3>CCTV Surveillance</h3>
              <p>
                High-definition camera network with pan-tilt-zoom capabilities and night vision 
                for 24/7 monitoring.
              </p>
            </div>
            <div className="feature-detail-card" data-aos="zoom-in" data-aos-delay="200">
              <FaBell className="feature-detail-icon" />
              <h3>Incident Detection</h3>
              <p>
                Automated incident detection using AI and machine learning for rapid emergency 
                response.
              </p>
            </div>
            <div className="feature-detail-card" data-aos="zoom-in" data-aos-delay="300">
              <FaChartBar className="feature-detail-icon" />
              <h3>Analytics Dashboard</h3>
              <p>
                Comprehensive traffic analytics with historical data, pattern recognition, and 
                predictive insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tech-specs">
        <div className="container">
          <h2 className="section-title">Key Technologies</h2>
          <div className="specs-grid">
            <div className="spec-category" data-aos="fade-up">
              <h3>Infrastructure</h3>
              <ul>
                <li>Intelligent Traffic Signals</li>
                <li>Variable Message Signs (VMS)</li>
                <li>High-Definition CCTV Cameras</li>
                <li>Vehicle Detection Sensors</li>
                <li>Emergency Call Boxes</li>
                <li>Fiber Optic Network</li>
              </ul>
            </div>
            <div className="spec-category" data-aos="fade-up" data-aos-delay="100">
              <h3>Control Systems</h3>
              <ul>
                <li>Traffic Management Center (TMC)</li>
                <li>Adaptive Signal Control System</li>
                <li>Incident Management Software</li>
                <li>Real-time Traffic Monitoring</li>
                <li>Data Analytics Platform</li>
                <li>Integration with Emergency Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits">
        <div className="container">
          <h2 className="section-title">System Benefits</h2>
          <div className="benefits-list">
            <div className="benefit-item" data-aos="fade-right">
              <div className="benefit-number">01</div>
              <div className="benefit-content">
                <h3>Reduced Congestion</h3>
                <p>Optimize traffic flow and reduce average travel times by up to 25%</p>
              </div>
            </div>
            <div className="benefit-item" data-aos="fade-left">
              <div className="benefit-number">02</div>
              <div className="benefit-content">
                <h3>Improved Safety</h3>
                <p>Faster incident detection and response reduces accident severity</p>
              </div>
            </div>
            <div className="benefit-item" data-aos="fade-right">
              <div className="benefit-number">03</div>
              <div className="benefit-content">
                <h3>Lower Emissions</h3>
                <p>Smoother traffic flow reduces vehicle emissions and environmental impact</p>
              </div>
            </div>
            <div className="benefit-item" data-aos="fade-left">
              <div className="benefit-number">04</div>
              <div className="benefit-content">
                <h3>Data-Driven Planning</h3>
                <p>Comprehensive analytics support informed infrastructure development decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <div className="cta-box" data-aos="fade-up">
            <h2>Transform Your City's Traffic Management</h2>
            <p>Discover how our ATMS solutions can make your roads smarter and safer</p>
            <Link to="/contact" className="btn-primary">Schedule a Demo</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ATMS;
