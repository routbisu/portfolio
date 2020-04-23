import React from 'react';
import './about.scss';
import Layout from '../layout/layout';
import Profile from '../images/profile-pic.jpeg';
import { firstJobStartDate, aboutLinks, timeline } from '../config/appConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import {
  faDownload,
  faFilePdf,
  faLocationArrow,
  faGlobeAsia
} from '@fortawesome/free-solid-svg-icons';

const getExp = () => {
  return (
    Math.floor(
      (new Date() - new Date(firstJobStartDate)) / (365 * 24 * 3600 * 100)
    ) / 10
  );
};

const About = () => {
  return (
    <Layout heading="About">
      <div className="about-container">
        <div className="left-section">
          <div className="profile-section">
            <div className="profile-pic">
              <img src={Profile} alt="Biswaranjan Rout" />
            </div>
            <div className="profile-description">
              <h2>I am Biswaranjan Rout.</h2>
              <p>
                I have around <strong>{getExp()} years of experience</strong>{' '}
                working as a web developer.
              </p>
              <p>
                I live &amp; work in <strong>Singapore</strong>.
              </p>
            </div>
          </div>
          <div className="social-profiles-section">
            <div className="flex-wrapper">
              <a href={aboutLinks.github} target="_blank">
                <button className="github">
                  <div className="wrapper">
                    <FontAwesomeIcon icon={faGithub} />
                    Github
                  </div>
                </button>
              </a>
              <a href={aboutLinks.linkedin} target="_blank">
                <button className="linkedin">
                  <div className="wrapper">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    Linkedin
                  </div>
                </button>
              </a>
            </div>
            {/* <a href={aboutLinks.resume} target="_blank" style={{ flex: 1 }}>
              <button className="resume">
                <div className="wrapper">
                  <FontAwesomeIcon icon={faFilePdf} />
                  Resume
                </div>
              </button>
            </a> */}
            <a href={aboutLinks.cv} target="_blank" style={{ flex: 1 }}>
              <button className="resume">
                <div className="wrapper">
                  <FontAwesomeIcon icon={faFilePdf} />
                  CV
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="right-section">
          <h2>Timeline</h2>
          <div className="timeline-container">
            {timeline.map(entry => (
              <div className="timeline-entry">
                <div className="time">{entry.time}</div>
                <div className="position">{entry.position}</div>
                <div className="company">{entry.company}</div>
                <div className="location">
                  <FontAwesomeIcon icon={faGlobeAsia} /> {entry.location}
                </div>
                {entry.description && (
                  <div className="description">
                    <ul>
                      {entry.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <h2>Academics</h2>
          <div className="timeline-container">
            <div className="timeline-entry">
              <div className="time">August 2007 - May 2011</div>
              <div className="position">
                Bachelor of Technology - Computer Science
              </div>
              <div className="company">
                Biju Patnaik University of Technology
              </div>
              <div className="location">
                <FontAwesomeIcon icon={faGlobeAsia} /> Odisha, India
              </div>

              <div className="description">
                <ul>
                  <li>
                    Bachelor of Technology in Computer Science from College of
                    Engineering, Bhubaneswar.
                  </li>
                  <li>Worked part-time as a web development freelancer.</li>
                  <li>Member, Opera Software Campus Crew Programme</li>
                  <li>
                    Summer Internship at Koustuv Systems (College in-house
                    software dev center)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
