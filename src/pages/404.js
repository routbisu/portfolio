import React from 'react';
import Layout from '../layout/layout';
import './index.scss';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <Layout hideMenu={true} home={true}>
      <div className="home-container">
        <div className="video-overlay">
          <div className="center-text">
            <h1 className="animated fadeInDown">
              😭<span> Sorry!</span>
            </h1>
            <p className="animated fadeIn">This page does not exist.</p>
            <Link to="/">
              <button className="see-more animated flipInY">
                <span>Go Home</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
