import React from 'react';
import { FaCheckCircle, FaEye, FaBullseye, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';
import '../assets/styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 data-aos="fade-up">About SRB Smartways</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Leading the way in intelligent infrastructure solutions since 2011
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section company-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content" data-aos="fade-right">
              <h2 className="section-title">Our Story</h2>
              <p>
                SRB SMARTWAYS Pvt Ltd is backed with strong and successful Experience and Expertise 
                in the TMS and ATMS Domain. With 14 years of ground and management experience, we 
                have established ourselves as a trusted partner in delivering cutting-edge infrastructure solutions.
              </p>
              <p>
                Our journey began with a vision to revolutionize transportation infrastructure in India. 
                Today, we stand proud as one of the leading providers of Toll Management Systems, 
                Advanced Traffic Management Systems, and Tunnel Installation services.
              </p>
              <p>
                Our commitment to Quality & Committed Work has earned us recognition from both 
                government and private sector clients across the nation. We continue to push 
                boundaries in technology integration and operational excellence.
              </p>
            </div>
            <div className="overview-image" data-aos="fade-left">
              <div className="image-placeholder">
                <FaUsers className="placeholder-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card" data-aos="flip-left">
              <div className="mv-icon">
                <FaBullseye />
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver world-class infrastructure solutions that enhance road safety, 
                optimize traffic flow, and improve the overall transportation experience through 
                innovative technology and unwavering commitment to excellence.
              </p>
            </div>
            <div className="mv-card" data-aos="flip-right">
              <div className="mv-icon">
                <FaEye />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and innovative infrastructure solutions provider in India, 
                setting new standards in smart transportation systems and contributing to the 
                nation's progress through sustainable and intelligent infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section core-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide our work and define who we are
          </p>
          <div className="values-grid">
            <div className="value-item" data-aos="zoom-in">
              <FaCheckCircle className="value-icon" />
              <h3>Quality Excellence</h3>
              <p>We never compromise on quality and strive for perfection in every project</p>
            </div>
            <div className="value-item" data-aos="zoom-in" data-aos-delay="100">
              <FaHandshake className="value-icon" />
              <h3>Commitment</h3>
              <p>We are dedicated to delivering on our promises and exceeding expectations</p>
            </div>
            <div className="value-item" data-aos="zoom-in" data-aos-delay="200">
              <FaAward className="value-icon" />
              <h3>Innovation</h3>
              <p>We embrace cutting-edge technology to provide advanced solutions</p>
            </div>
            <div className="value-item" data-aos="zoom-in" data-aos-delay="300">
              <FaUsers className="value-icon" />
              <h3>Customer Focus</h3>
              <p>Our clients' success is our success, and we prioritize their needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="section highlights">
        <div className="container">
          <h2 className="section-title">Key Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card" data-aos="fade-up">
              <div className="highlight-number">14+</div>
              <h3>Years of Experience</h3>
              <p>Over a decade of excellence in infrastructure solutions</p>
            </div>
            <div className="highlight-card" data-aos="fade-up" data-aos-delay="100">
              <div className="highlight-number">100+</div>
              <h3>Projects Completed</h3>
              <p>Successfully delivered projects across multiple states</p>
            </div>
            <div className="highlight-card" data-aos="fade-up" data-aos-delay="200">
              <div className="highlight-number">50+</div>
              <h3>Team Members</h3>
              <p>Skilled professionals dedicated to excellence</p>
            </div>
            <div className="highlight-card" data-aos="fade-up" data-aos-delay="300">
              <div className="highlight-number">98%</div>
              <h3>Client Satisfaction</h3>
              <p>Consistent delivery of quality and reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="section expertise">
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <div className="expertise-list">
            <div className="expertise-item" data-aos="fade-right">
              <div className="expertise-content">
                <h3>Toll Management Systems</h3>
                <p>
                  Complete toll plaza solutions including Electronic Toll Collection (ETC), 
                  FASTag systems, automated lane control, revenue management, and real-time monitoring.
                </p>
              </div>
            </div>
            <div className="expertise-item" data-aos="fade-left">
              <div className="expertise-content">
                <h3>Advanced Traffic Management</h3>
                <p>
                  Intelligent traffic control systems with adaptive signal control, CCTV surveillance, 
                  incident detection, variable message signs, and integrated command centers.
                </p>
              </div>
            </div>
            <div className="expertise-item" data-aos="fade-right">
              <div className="expertise-content">
                <h3>Tunnel Infrastructure</h3>
                <p>
                  Comprehensive tunnel systems including ventilation, lighting, fire safety, 
                  emergency response, traffic control, and 24/7 monitoring solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
