import React from 'react';
import Layout from '../layout/layout';
import BgVideo from '../images/bg-video.webm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import { Link } from 'gatsby';
import { getLinkUrl } from '../services/commonService';

const IndexPage = () => {
  return (
    <Layout>
      <div className="home-container">
        <div className="video-container">
          <video autoPlay muted loop className="tablet-and-desktop-only">
            <source src={BgVideo} type="video/webm" />
          </video>
        </div>
        <div className="video-overlay">
          <div className="center-text">
            <h1 className="animated fadeInDown">
              Hi, I am <span>Biswa.</span>
            </h1>
            <p className="animated fadeIn">
              I am a Web Developer.
              <br />I am a self-motivated, and self-taught programmer, driven to
              build amazing software that I am proud of.
            </p>
            <Link to={getLinkUrl('PROJECTS')}>
              <button className="see-more animated flipInY">
                <span>See my work</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </Link>
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
    </Layout>
  );
};

export default IndexPage;
