import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="service-card" data-aos="fade-up">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="service-link">
        Learn More <FaArrowRight />
      </Link>
    </div>
  );
};

export default ServiceCard;
