import React from 'react';
import ProjectTemplate from '../../../templates/projects';
import Slider from 'react-slick';

const WingsSuite = () => {
  return (
    <ProjectTemplate selectedProjectSlug="wings-suite" heading="Wings Suite">
      <div className="article">
        <p>
          Wings suite is an internal-use only tool for automation of processes
          related to firmware management and testing on storage devices. It is a
          one-stop solution to setup and recreate validation environment,
          execute device management operations, and to perform automated failure
          analysis including features like perform firmware management
          operations, executes tests, diagnostic logs (collect, decode,
          visualize), create and execute test cases. Its target users include
          firmware developers, firmware validation engineers and failure
          analysis engineers.
        </p>
        <h2>Resources / Screenshots</h2>
        <Slider></Slider>
        <h2>Responsibilities</h2>
        <ul>
          <li>
            Lead the UI design team to create mockups from scratch followed by
            end to end development of features.
          </li>
          <li>
            Architect a scalable UI development model for React.js with central
            state management using Redux.
          </li>
          <li>
            Consuming REST APIs from the backend flask server which interacts
            directly with storage devices.
          </li>
          <li>
            Writing unit tests for react components using Jest and Enzyme.
          </li>
        </ul>
        <h2>Tech Stack</h2>
      </div>
    </ProjectTemplate>
  );
};

export default WingsSuite;
