import React from 'react';
import './SkillsDetails.scss';

const SkillsDetails = () => {
  return (
    <div className="skills-details-container">
      <h2>Advanced</h2>
      <p className="skills-list">
        <span>React</span>
        <span>Redux</span>
        <span>Node.js</span>
        <span>ES6</span>
        <span>TypeScript</span>
        <span>HTML</span>
        <span>CSS3</span>
        <span>SASS</span>
        <span>Express</span>
        <span>MongoDB</span>
        <span>MySQL</span>
        <span>Confluence</span>
        <span>Jira</span>
        <span>Git / Bitbucket</span>
      </p>
      <h2>Intermediate</h2>
      <p className="skills-list orange">
        <span>Angular</span>
        <span>ASP.Net</span>
        <span>SQL Server</span>
        <span>C#</span>
        <span>jQuery</span>
        <span>PHP</span>
        <span>PostgreSQL</span>
      </p>
      <h2>Beginner</h2>
      <p className="skills-list green">
        <span>React Native</span>
        <span>GoLang</span>
        <span>Docker</span>
        <span>Kubernetes</span>
      </p>
    </div>
  );
};

export default SkillsDetails;
