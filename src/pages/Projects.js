import React from 'react';
import { FaRoad, FaTrafficLight, FaMountain } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import '../assets/styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Mumbai-Pune Expressway Toll Plaza",
      location: "Maharashtra",
      year: "2024",
      category: "TMS",
      description: "Implementation of advanced FASTag-based toll collection system with 12 lanes covering both directions.",
      image: <FaRoad />
    },
    {
      title: "Delhi Smart Traffic Management",
      location: "New Delhi",
      year: "2023",
      category: "ATMS",
      description: "Deployed adaptive traffic signal control system across 150+ intersections with real-time monitoring.",
      image: <FaTrafficLight />
    },
    {
      title: "Atal Tunnel Safety Systems",
      location: "Himachal Pradesh",
      year: "2023",
      category: "Tunnel",
      description: "Complete tunnel management system including ventilation, fire safety, and surveillance for 9km tunnel.",
      image: <FaMountain />
    },
    {
      title: "Agra-Lucknow Expressway TMS",
      location: "Uttar Pradesh",
      year: "2024",
      category: "TMS",
      description: "Multi-lane toll collection system with automated vehicle classification and revenue management.",
      image: <FaRoad />
    },
    {
      title: "Bangalore Traffic Control Center",
      location: "Karnataka",
      year: "2022",
      category: "ATMS",
      description: "Integrated traffic management center with CCTV surveillance and incident management systems.",
      image: <FaTrafficLight />
    },
    {
      title: "Chenani-Nashri Tunnel Management",
      location: "Jammu & Kashmir",
      year: "2022",
      category: "Tunnel",
      description: "Advanced tunnel safety and monitoring systems for Asia's longest road tunnel.",
      image: <FaMountain />
    },
    {
      title: "Eastern Expressway Toll System",
      location: "Mumbai",
      year: "2023",
      category: "TMS",
      description: "Seamless toll collection infrastructure with dedicated FASTag lanes and 24/7 monitoring.",
      image: <FaRoad />
    },
    {
      title: "Hyderabad Smart Corridor",
      location: "Telangana",
      year: "2024",
      category: "ATMS",
      description: "Implementation of intelligent traffic management along 30km corridor with VMS and sensors.",
      image: <FaTrafficLight />
    },
    {
      title: "Zoji La Tunnel Project",
      location: "Ladakh",
      year: "2023",
      category: "Tunnel",
      description: "Comprehensive tunnel infrastructure including ventilation, lighting, and emergency systems.",
      image: <FaMountain />
    }
  ];

  return (
    <div className="projects-page">
      <section className="page-hero">
        <div className="container">
          <h1 data-aos="fade-up">Our Projects</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Delivering excellence across India's infrastructure landscape
          </p>
        </div>
      </section>

      <section className="section projects-intro">
        <div className="container">
          <div className="intro-content" data-aos="fade-up">
            <h2 className="section-title">Portfolio of Excellence</h2>
            <p>
              With over 14 years of experience and 100+ successfully completed projects, SRB Smartways 
              has established itself as a leading provider of infrastructure solutions across India. 
              Our projects span multiple states and encompass various aspects of modern transportation systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section projects-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box" data-aos="zoom-in">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-box" data-aos="zoom-in" data-aos-delay="100">
              <div className="stat-number">15+</div>
              <div className="stat-label">States Covered</div>
            </div>
            <div className="stat-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="stat-number">50+</div>
              <div className="stat-label">Toll Plazas Managed</div>
            </div>
            <div className="stat-box" data-aos="zoom-in" data-aos-delay="300">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects-gallery">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="projects-cta">
        <div className="container">
          <div className="cta-box" data-aos="fade-up">
            <h2>Want to See Your Project Here?</h2>
            <p>Let's collaborate to build the infrastructure of tomorrow</p>
            <a href="/contact" className="btn-primary">Start a Project</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
