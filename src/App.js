import React, { useState } from 'react';
import './scss/layout.scss';
import ProfilePic from './images/profile-0.jpeg';
import ReactLogo from './images/skills/react.png';
import NodeLogo from './images/skills/node.png';
import MongoLogo from './images/skills/mongo.png';
import SQLLogo from './images/skills/mysql.svg';
import AngularLogo from './images/skills/angular.png';
import LinkedInLogo from './images/linkedin.png';
import GithubLogo from './images/github.svg';
import FacebookLogo from './images/facebook.png';
import DriveLogo from './images/drive.png';
import Phone from './images/phone.png';
import Whatsapp from './images/whatsapp.png';
import Email from './images/email.png';
import Skype from './images/skype.png';
import Modal from './components/Modal/Modal';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="main-container">
      <div className="desktop">
        <div className="main-menu">
          <div className="vertical-link link-1">
            <div className="content">
              <div className="text">Skills</div>
            </div>
          </div>
          <div className="vertical-link link-2">
            <div className="content">
              <div className="text">Projects</div>
            </div>
          </div>
          <div className="corner-home"></div>
          <div className="vertical-link link-3">
            <div className="content">
              <div className="text">Timeline</div>
            </div>
          </div>
          <div className="vertical-link link-4">
            <div className="content">
              <div className="text">Links</div>
            </div>
          </div>
          <div className="vertical-link link-5">
            <div className="content">
              <div className="text">Contact</div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="right-section">
            <div className="vertical-section skills-section">
              <div className="horizontal-section">
                <div className="content">
                  <div>
                    <img src={ReactLogo} alt="React" />
                  </div>
                  <span>React</span>
                </div>
              </div>
              <div className="horizontal-section">
                <div className="content">
                  <img src={NodeLogo} alt="Node" />
                </div>
              </div>
              <div className="horizontal-section">
                <div className="content wide">
                  <img src={MongoLogo} alt="Node" />
                </div>
              </div>
              <div className="horizontal-section">
                <div className="content wide">
                  <img src={SQLLogo} alt="SQL" />
                </div>
              </div>
              <div className="horizontal-section">
                <div className="content wide">
                  <img src={AngularLogo} alt="Angular" />
                </div>
              </div>
              <div
                className="horizontal-section more"
                onClick={() => setOpenModal('SKILLS')}
              >
                <div className="wrapper">
                  <div className="content">More</div>
                </div>
              </div>
            </div>
            <div className="vertical-section projects-section">
              <div className="horizontal-section">
                <div className="normal-text-wrapper">
                  <div className="normal-text">
                    <h2>Suppr</h2>
                    <p>
                      QR Code based self ordering system for restaurants. Allows
                      users to place orders &amp; check order status at
                      restaurants without downloading an app.
                    </p>
                  </div>
                </div>
              </div>
              <div className="horizontal-section">
                <div className="normal-text-wrapper">
                  <div className="normal-text">
                    <h2>Wings Suite</h2>
                    <p>
                      Internal tool for firmware engineers to automate testcases
                      for storage devices using a web based interface.
                    </p>
                  </div>
                </div>
              </div>
              <div className="horizontal-section">
                <div className="normal-text-wrapper">
                  <div className="normal-text">
                    <h2>XInsure</h2>
                    <p>
                      SAAS based core business insurance product for insurance
                      companies, brokers and re-insurers. It is an end-to-end
                      administration suite for the life insurance market.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div
                className="horizontal-section more"
                onClick={() => setOpenModal('PROJECTS')}
              >
                <div className="wrapper">
                  <div className="content">See Details</div>
                </div>
              </div> */}
            </div>
            <div className="vertical-section intro-section">
              <div className="text">
                Hi, I am Biswa. <span>I am a web developer.</span>
              </div>
            </div>
            <div className="vertical-section timeline-section">
              <div className="horizontal-section">
                <div className="normal-text-wrapper">
                  <div className="normal-text">
                    <h2>Frontend Engineer</h2>
                    <p>June 2019 - Present</p>
                    <h3>NTUC Enterprise</h3>
                    <h4>Singapore</h4>
                  </div>
                </div>
              </div>
              <div className="horizontal-section">
                <div className="normal-text-wrapper">
                  <div className="normal-text">
                    <h2>Technical Lead</h2>
                    <p>Sep 2018 - June 2019</p>
                    <h3>SanDisk (Western Digital)</h3>
                    <h4>Bangalore, India</h4>
                  </div>
                </div>
              </div>
              <div className="horizontal-section">
                <div className="normal-text-wrapper">
                  <div className="normal-text">
                    <h2>Programmer Analyst</h2>
                    <p>Nov 2016 - Sep 2018</p>
                    <h3>Xceedance Consulting</h3>
                    <h4>Bangalore, India</h4>
                  </div>
                </div>
              </div>
              <div className="horizontal-section">
                <div className="normal-text-wrapper">
                  <div className="normal-text">
                    <h2>Senior Engineer</h2>
                    <p>Feb 2016 - Aug 2016</p>
                    <h3>Emids Technologies</h3>
                    <h4>Bangalore, India</h4>
                  </div>
                </div>
              </div>
              <div className="horizontal-section">
                <div className="normal-text-wrapper">
                  <div className="normal-text">
                    <h2>Software Engineer</h2>
                    <p>Oct 2011 - Feb 2016</p>
                    <h3>Infosys Limited</h3>
                    <h4>Hyderabad, India</h4>
                  </div>
                </div>
              </div>
              <div className="horizontal-section grad">
                <div className="normal-text-wrapper">
                  <div className="normal-text">
                    <h2>B.Tech - CS</h2>
                    <p>Aug 2007 - May 2011</p>
                    <h3>Biju Patnaik Univeristy</h3>
                    <h4>India</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="vertical-section links-section">
              <a
                href="https://github.com/routbisu"
                target="_blank"
                className="horizontal-section"
              >
                <div className="content">
                  <div>
                    <img src={GithubLogo} alt="github" />
                  </div>
                  <span>github.com/routbisu</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/biswaranjanrout/"
                target="_blank"
                className="horizontal-section"
              >
                <div className="content">
                  <div>
                    <img src={LinkedInLogo} alt="Linked In" />
                  </div>
                  <span>in/biswaranjanrout</span>
                </div>
              </a>
              <a
                href="https://www.facebook.com/routbisu"
                target="_blank"
                className="horizontal-section"
              >
                <div className="content">
                  <div>
                    <img
                      src={FacebookLogo}
                      alt="Facebook"
                      style={{ padding: 5 }}
                    />
                  </div>
                  <span>facebook.com/routbisu</span>
                </div>
              </a>
              <a
                href="https://drive.google.com/open?id=1JgkaIXHlcH01ZVfYcWVgDlN-Yv6HXgnm"
                target="_blank"
                className="horizontal-section"
              >
                <div className="content">
                  <div>
                    <img src={DriveLogo} alt="Facebook" />
                  </div>
                  <span>Download Resume</span>
                </div>
              </a>
              <a
                href="https://drive.google.com/open?id=1KfA850p2aK9XOx7oX-3MbkRHeieTs_r6"
                target="_blank"
                className="horizontal-section"
              >
                <div className="content">
                  <div>
                    <img src={DriveLogo} alt="Facebook" />
                  </div>
                  <span>Download CV</span>
                </div>
              </a>
            </div>
            <div className="vertical-section contacts-section">
              <div className="horizontal-section">
                <div className="content">
                  <div>
                    <img src={Phone} alt="github" />
                  </div>
                  <span>+65-97709740</span>
                </div>
              </div>
              <a
                href="https://wa.me/6597709740"
                target="_blank"
                className="horizontal-section"
              >
                <div className="content">
                  <div>
                    <img src={Whatsapp} alt="Linked In" />
                  </div>
                  <span>+65-97709740</span>
                </div>
              </a>
              <div className="horizontal-section">
                <div className="content">
                  <div>
                    <img src={Skype} alt="Facebook" />
                  </div>
                  <span>routbisu</span>
                </div>
              </div>
              <a
                href="mailto:biswaranjan.rout1989@gmail.com"
                target="_blank"
                className="horizontal-section"
              >
                <div className="content">
                  <div>
                    <img src={Email} alt="Facebook" style={{ padding: 12 }} />
                  </div>
                  <span>biswaranjan.rout1989@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="mobile-content">
          <div className="profile-pic">
            <img src={ProfilePic} alt="Profile Photo" />
          </div>
          <h2>Hi.</h2>
          <h3>I am Biswa.</h3>
          <div className="linkedin-link">
            <a
              href="https://www.linkedin.com/in/biswaranjanrout/"
              target="_blank"
            >
              <img src={LinkedInLogo} alt="Linked In" />
            </a>
          </div>
        </div>
        <div className="disclaimer">
          Please open this website on a computer for the best experience.
        </div>
      </div>
      {openModal && (
        <Modal
          heading={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
        />
      )}
    </div>
  );
};

export default App;
