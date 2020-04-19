import React, { useState } from 'react';
import './project.scss';
import Layout from '../../layout/layout';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleRight,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../../components/common/Dropdown/Dropdown';
import Showcase from '../../components/common/Showcase/Showcase';
import { navigate } from 'gatsby';
import ExternalLink from '../../components/common/ExternalLink/ExternalLink';

const getSelectedProjectTitle = (projects, selectedProjSlug) => {
  const proj = projects.find(a => a.slug === selectedProjSlug);
  if (proj) return proj.title;
};

const Project = ({
  pageContext: { projectDetails, projectTypes, projectType, projects }
}) => {
  const [selectedMenu, setSelectedMenu] = useState(projectType.type);

  const handleChange = page => {
    navigate(
      `/projects/${
        projectTypes.find(a => a.type === selectedMenu).slug
      }/${page}`
    );
  };

  const ProjectsDropdown = () => (
    <Dropdown
      options={projects[selectedMenu].map(proj => ({
        key: proj.slug,
        value: proj.title
      }))}
      defaultValue={getSelectedProjectTitle(
        projects[selectedMenu],
        projectDetails.slug
      )}
      defaultText="Select a project"
      onChange={handleChange}
    />
  );

  const ProjectsMenu = () => (
    <div className="project-menu">
      <div className="buttons">
        {projectTypes.map(projType => (
          <React.Fragment key={projType.type}>
            <button
              className={`main-menu ${
                selectedMenu === projType.type ? 'active' : ''
              }`}
              onClick={() => setSelectedMenu(projType.type)}
            >
              {projType.label}
              <FontAwesomeIcon
                icon={
                  selectedMenu === projType.type ? faAngleDown : faAngleRight
                }
              />
            </button>
            {selectedMenu === projType.type && (
              <>
                <div className="project-list desktop-only">
                  {projects[selectedMenu].map(project =>
                    project.external ? (
                      <a
                        href={project.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={project.slug}
                      >
                        {project.title}
                        <FontAwesomeIcon icon={faAngleRight} />
                      </a>
                    ) : (
                      <Link
                        to={`/projects/${projType.slug}/${project.slug}`}
                        className={
                          projectDetails.slug === project.slug ? 'active' : ''
                        }
                        key={project.slug}
                      >
                        {project.title}
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Link>
                    )
                  )}
                </div>
                <div className="project-list-tablet tablet-only">
                  <ProjectsDropdown />
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="project-list-mobile mobile-only-strict">
        <ProjectsDropdown />
      </div>
    </div>
  );

  const ProjectHeader = () => {
    const { title, duration, org, logo, slug } = projectDetails;
    return (
      <div className="project-header">
        {logo && (
          <div className="project-logo">
            <img
              src={`../../../project-photos/${projectType.slug}/${slug}/${logo}`}
              alt={title}
            />
          </div>
        )}
        <h1>{title}</h1>
        {duration && (
          <div className="duration">
            <FontAwesomeIcon icon={faCalendarAlt} /> {duration}
          </div>
        )}
        {org && <h3 className="org-name">{org}</h3>}
      </div>
    );
  };

  const ProjectBody = () => {
    const {
      showcase,
      skillSet,
      description,
      responsibilities,
      videoLink
    } = projectDetails;

    return (
      <article className="article">
        {description && description.map((desc, i) => <p key={i}>{desc}</p>)}

        {responsibilities && (
          <>
            <h2>My Contribution</h2>
            <ul className="simple-list">
              {responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </>
        )}

        {skillSet && (
          <>
            <h2>Tech Stack</h2>
            <div className="skills-container">
              {skillSet.map((skill, i) => (
                <div className="skill-wrapper" key={i}>
                  <img
                    src={`../../../tech-icons/${skill.logo}`}
                    alt={skill.name}
                    style={{ padding: skill.padding || 0 }}
                  />
                  {<p>{skill.name}</p>}
                </div>
              ))}
            </div>
          </>
        )}

        {showcase || (videoLink && <h2>Showcase</h2>)}

        {showcase && (
          <>
            <Showcase
              data={showcase}
              projectType={projectType}
              projectDetails={projectDetails}
            />
          </>
        )}

        {videoLink && (
          <div className="video-demos">
            {videoLink.map((video, i) => (
              <>
                <div
                  className="video-frame"
                  style={{ paddingBottom: video.videoRatio || '56.25%' }}
                  key={i}
                >
                  <iframe
                    src={video.link}
                    frameBorder={0}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                  />
                  {video.hideInfo && <div className="video-overlay-special" />}
                </div>
                {video.label && <p className="label">{video.label}</p>}
                {video.external && (
                  <div className="external">
                    <ExternalLink {...video.external} />
                  </div>
                )}
              </>
            ))}
          </div>
        )}
      </article>
    );
  };

  return (
    <Layout heading={projectDetails.title}>
      <div className="project-container">
        <ProjectsMenu />
        <div className="project-details">
          <ProjectHeader />
          <ProjectBody />
        </div>
      </div>
    </Layout>
  );
};

export default Project;
