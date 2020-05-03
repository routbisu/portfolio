import React, { useState } from 'react';
import { faStream, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MobileMenu.scss';
import { menuItems } from '../../config/appConfig';
import { Link } from 'gatsby';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

let menuRef;
let ccRef;
let msRef;

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = evt => {
    if (
      !(
        menuRef &&
        menuRef.contains(evt.target) &&
        !msRef.contains(evt.target) &&
        !ccRef.contains(evt.target)
      )
    ) {
      setOpen(false);
      document.removeEventListener('click', closeMenu);
    }
  };

  const openMenu = () => {
    document.addEventListener('click', closeMenu);
    setOpen(true);
  };

  return (
    <div className="mobile-menu-container mobile-only-strict">
      <button className="hamburger-container" onClick={openMenu}>
        <FontAwesomeIcon icon={faStream} className="hamburger" />
      </button>

      <div
        className={`mobile-menu ${!open && 'menu-closed'}`}
        ref={elem => {
          menuRef = elem;
        }}
      >
        <div className="cross-container">
          <button
            className="svg-container"
            onClick={closeMenu}
            ref={elem => {
              ccRef = elem;
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div
          className="menu-section"
          ref={elem => {
            msRef = elem;
          }}
        >
          <Link to="/" className="menu-item">
            Home
          </Link>
          {menuItems.map(item =>
            item.external ? (
              <a
                href={item.link}
                key={item.key}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link to={item.link} className="menu-item" key={item.link}>
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/biswaranjanrout/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/routbisu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
