import React from 'react';
import './ExternalLink.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const getIcon = type => {
  switch (type) {
    case 'youtube':
      return faYoutube;
  }
};

const ExternalLink = ({ link, label, type }) => {
  return (
    <div className="external-link-container">
      <a href={link} target="_blank" className={type}>
        <div>
          <FontAwesomeIcon icon={getIcon(type)} />
          {label}
        </div>
      </a>
    </div>
  );
};

export default ExternalLink;
