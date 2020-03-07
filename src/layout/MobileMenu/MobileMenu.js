import React, { useState } from 'react';
import { faStream, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MobileMenu.scss';
import { menuItems } from '../../config/appConfig';
import { Link } from 'gatsby';
import Logo from '../../images/logo.png';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu-container mobile-only-strict">
      <div className="hamburger-container" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faStream} className="hamburger" />
      </div>

      <div className={`mobile-menu ${!open && 'menu-closed'}`}>
        <div className="cross-container">
          <div className="svg-container" onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>

        <div className="menu-section">
          {menuItems.map(item => (
            <Link to={item.link} className="menu-item">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/biswaranjanrout/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/routbisu" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
