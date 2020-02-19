import React from 'react';
import './scss/layout.scss';

const App = () => {
  return (
    <div className="main-container">
      <div className="main-menu">
        <div className="corner-home"></div>
        <div className="horizontal-link link-1">
          <div className="content">
            <div className="text">Skills</div>
          </div>
        </div>
        <div className="horizontal-link link-2">
          <div className="content">
            <div className="text">Projects</div>
          </div>
        </div>
        <div className="horizontal-link link-3">
          <div className="content">
            <div className="text">Timeline</div>
          </div>
        </div>
        <div className="horizontal-link link-4">
          <div className="content">
            <div className="text">Links</div>
          </div>
        </div>
        <div className="horizontal-link link-5">
          <div className="content">
            <div className="text">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
