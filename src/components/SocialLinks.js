import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/biswaranjanrout/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="social" icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/routbisu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="social" icon={faGithub} />
      </a>

      <a
        href="https://drive.google.com/open?id=1KfA850p2aK9XOx7oX-3MbkRHeieTs_r6"
        target="_blank"
      >
        <FontAwesomeIcon className="social" icon={faFilePdf} />
      </a>
    </div>
  );
};

export default SocialLinks;
