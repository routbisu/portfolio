import React from 'react';
import Layout from '../layout/layout';
import BgVideo from '../images/bg-video.webm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import { Link } from 'gatsby';
import { getLinkUrl } from '../services/commonService';
import Slider from 'react-slick';

const sliderConfig = {
  arrows: false,
  dots: true,
  autoplay: true
};

const sliderContent = [
  <p className="animated fadeIn">
    I am a Web Developer.
    <br />I am a self-motivated, and self-taught programmer, driven to build
    amazing software that I am proud of.
  </p>,
  <p className="animated fadeIn">
    I am a Frontend Developer.
    <br />I have expertise on libraries like React, Vue &amp; Angular and a good
    understanding of user experience (UX) principles.
  </p>,
  <p className="animated fadeIn">
    I am a Polyglot Programmer.
    <br />I have exposure to microservices, cloud services, monolithic
    applications, relational &amp; document databases.
  </p>,
  <p className="animated fadeIn">
    I am a Technical Lead.
    <br />I have exposure to project management, estimation &amp; mentoring. I
    work with tools like Jira, Confluence &amp; Bitbucket.
  </p>
];

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
            <Slider {...sliderConfig}>
              {sliderContent.map((content, i) => (
                <div key={i}>{content}</div>
              ))}
            </Slider>
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
