import React from 'react';
import Layout from '../layout/layout';
import BgVideo from '../images/bg-video.webm';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <Layout home={true} showHomeButton={true} heading="Contact">
      <div className="home-container">
        <div className="video-container">
          <video autoPlay muted loop className="tablet-and-desktop-only">
            <source src={BgVideo} type="video/webm" />
          </video>
        </div>
        <div className="video-overlay">
          <div className="center-text">
            <h1 className="animated fadeInDown">
              Lets <span>talk.</span>
            </h1>
            <p className="animated fadeIn">
              You can reach me at
              <br />
              mail@biswa.co
              <br />
              <span className="phone-text">🤙🏻 +44 1244 941947</span>
            </p>
            <a href="mailto:mail@biswa.co">
              <button className="see-more animated flipInY">
                <span>Send Email</span>
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </button>
            </a>
          </div>
          <SocialLinks />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
