import React from 'react';
import Layout from '../layout/layout';
import BgVideo from '../images/bg-video.webm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link } from 'gatsby';
import { getLinkUrl } from '../services/commonService';
import Slider from 'react-slick';
import SocialLinks from '../components/SocialLinks';

const sliderConfig = {
  arrows: false,
  dots: true,
  autoplay: true
};

const sliderContent = [
  // <p className="animated fadeIn">
  //   I am a Web Developer.
  //   <br />I am a self-motivated, and self-taught programmer, driven to build
  //   amazing software that I am proud of.
  // </p>,
  <p className="animated fadeIn">
    I am a Frontend Developer.
    <br />I work with like React, Vue &amp; Angular and have a good
    understanding of user experience (UX) principles.
  </p>,
  <p className="animated fadeIn">
    I am a Fullstack Developer.
    <br />I have worked with microservices, cloud services, monolithic
    applications, relational &amp; NoSQL databases.
  </p>,
  <p className="animated fadeIn">
    I am a Tech Lead.
    <br />I manage teams, mentor engineers &amp; plan the execution of complex
    software solutions.
  </p>
];

const IndexPage = () => {
  return (
    <Layout home={true}>
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
            {/* <Slider {...sliderConfig}>
              {sliderContent.map((content, i) => (
                <div key={i}>{content}</div>
              ))}
            </Slider> */}
            <p className="animated fadeIn">
              I am a Web Development Specialist.
              <br />I love building beautiful user experiences with JavaScript,
              React &amp; Node.
            </p>
            <Link to={getLinkUrl('PROJECTS')}>
              <button className="see-more animated flipInY">
                <span>See my work</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </Link>
          </div>

          <SocialLinks />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
