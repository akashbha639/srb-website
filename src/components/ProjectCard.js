import React from 'react';
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const ProjectCard = ({ title, location, year, category, description, image }) => {
  return (
    <div className="project-card" data-aos="fade-up">
      <div className="project-image">
        <div className="project-category">{category}</div>
        <div className="project-placeholder">{image}</div>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <div className="project-meta">
          <span>
            <FaMapMarkerAlt /> {location}
          </span>
          <span>
            <FaCalendar /> {year}
          </span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
