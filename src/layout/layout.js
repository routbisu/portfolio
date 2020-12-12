import React, { useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import favIcon from '../images/favicon.png';
import Logo from '../images/logo.png';
import './layout.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Link } from 'gatsby';
import { menuItems } from '../config/appConfig';
import MobileMenu from './MobileMenu/MobileMenu';

const Layout = ({ children, heading, home, showHomeButton, hideMenu }) => {
  const handleScroll = () => {
    if (window) {
      if (window.pageYOffset > 20) {
        showSticky(true);
      } else {
        showSticky(false);
      }
    }
  };

  useLayoutEffect(() => {
    if (window) window.addEventListener('scroll', handleScroll);
    return () => {
      if (window) window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [sticky, showSticky] = useState(false);

  return (
    <div className="layout-container">
      <Helmet>
        <title>
          {heading ? heading + " - Biswa's Portfolio" : "Biswa's Portfolio"}
        </title>
        <link rel="shortcut icon" href={favIcon} />
        <link rel="icon" type="image/png" href={favIcon} />
      </Helmet>
      <div
        className={`header ${home ? 'home' : ''} ${sticky && 'sticky-header'}`}
      >
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        {!hideMenu && (
          <>
            <div className="main-menu tablet-and-desktop-only">
              {!home && <Link to="/">Home</Link>}
              {showHomeButton && <Link to="/">Home</Link>}
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
                  <Link
                    to={item.link}
                    key={item.key}
                    activeClassName="active"
                    partiallyActive={true}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
            <MobileMenu />
          </>
        )}
      </div>
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Layout;
