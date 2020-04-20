import React from 'react';
import './skills.scss';
import Layout from '../../layout/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, navigate } from 'gatsby';
import Dropdown from '../../components/common/Dropdown/Dropdown';

const SkillsSection = ({ skills, label }) => {
  return skills ? (
    <div>
      <h2>{label}</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <div className="skill-wrapper" key={skill.name}>
            <img
              src={`../../../tech-icons/${skill.logo}`}
              alt={skill.name}
              style={{ padding: skill.padding || 0 }}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

const skills = ({ pageContext: { allSkills, slug, label } }) => {
  const handleChange = type => {
    navigate(`/skills/${type}`);
  };

  return (
    <Layout heading="Skills">
      <div className="skills-page-container">
        <div className="page-container">
          <div className="page-menu tablet-and-desktop-only">
            {allSkills.map(skillType => (
              <Link to={`/skills/${skillType.slug}`} key={skillType.slug}>
                <button
                  className={`menu-button ${skillType.slug === slug &&
                    'active'}`}
                >
                  {skillType.label} <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </Link>
            ))}
          </div>
          <div className="mobile-only-strict">
            <Dropdown
              options={allSkills.map(skillType => ({
                key: skillType.slug,
                value: skillType.label
              }))}
              defaultValue={label}
              defaultText="Select a project"
              onChange={handleChange}
            />
          </div>
          <div className="page-content">
            <article className="article">
              <h1>{label}</h1>
              {slug ? (
                <SkillsSection
                  skills={allSkills.find(el => el.slug === slug).skills}
                />
              ) : (
                allSkills.map(
                  skillType =>
                    skillType.skills && (
                      <SkillsSection
                        skills={skillType.skills}
                        label={skillType.label}
                        key={skillType.slug}
                      />
                    )
                )
              )}
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default skills;
