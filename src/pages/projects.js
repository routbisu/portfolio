import React from 'react';
import { navigate } from 'gatsby';
import BgVideo from '../images/bg-video.webm';
import Layout from '../layout/layout';

const Projects = () => {
  if (typeof window !== 'undefined') {
    navigate('/projects/work/wings-suite');
  }
  return (
    <Layout hideMenu={true} home={true}>
      <div className="home-container">
        <div className="video-container">
          <video autoPlay muted loop className="tablet-and-desktop-only">
            <source src={BgVideo} type="video/webm" />
          </video>
        </div>
        <div className="video-overlay">
          <div className="center-text">
            <h1 className="animated fadeInDown">
              <span>...</span>
            </h1>
            <p className="animated fadeIn">
              Navigating to my favourite project
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
