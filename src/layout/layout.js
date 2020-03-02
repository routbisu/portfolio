import React from 'react';
import { Helmet } from 'react-helmet';
import favIcon from '../images/favicon.png';
import Logo from '../images/logo.png';
import './layout.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Link } from 'gatsby';
import { menuItems } from '../config/appConfig';

const Layout = ({ children, heading }) => {
  return (
    <div className="layout-container">
      <Helmet>
        <title>
          {heading ? heading + " - Biswa's Portfolio" : "Biswa's Portfolio"}
        </title>
        <link rel="shortcut icon" href={favIcon} />
        <link rel="icon" type="image/png" href={favIcon} />
        <meta
          name="description"
          content="Hi, I am Biswa. I am a Web Developer. I am a self-motivated, and self-taught programmer, driven to build amazing software that I am proud of."
        />
      </Helmet>
      <div className="header">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="main-menu">
          {menuItems.map(item => (
            <Link to={`/${item.link}`} key={item.link}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
