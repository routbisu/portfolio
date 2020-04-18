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
      responsibilities
    } = projectDetails;

    return (
      <article className="article">
        {description &&
          description.map((desc, i) => (
            <p key={i}>
              Wings suite is an internal-use only tool for automation of
              processes related to firmware management and testing on storage
              devices. It is a one-stop solution to setup and recreate
              validation environment, execute device management operations, and
              to perform automated failure analysis including features like
              perform firmware management operations, executes tests, diagnostic
              logs (collect, decode, visualize), create and execute test cases.
              Its target users include firmware developers, firmware validation
              engineers and failure analysis engineers.
            </p>
          ))}

        {showcase && (
          <>
            <h2>Resources</h2>
            <Showcase data={showcase} />
          </>
        )}

        {responsibilities && (
          <>
            <h2>My Contribution</h2>
            <ul>
              {responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </>
        )}

        {skillSet && (
          <>
            <h2>Tech Stack</h2>
          </>
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
