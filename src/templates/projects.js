import React, { useState } from 'react';
import './projects.scss';
import Layout from '../layout/layout';
import { projects, projectTypes } from '../config/appConfig';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../components/common/Dropdown/Dropdown';

const getSelectedProjectTitle = (projects, selectedProjSlug) => {
  const proj = projects.find(a => a.slug === selectedProjSlug);
  if (proj) return proj.title;
};

const ProjectTemplate = ({
  children,
  heading,
  selectedType,
  selectedProjectSlug
}) => {
  const [selectedMenu, setSelectedMenu] = useState(
    selectedType || projectTypes[0].type
  );

  const selProjType = projectTypes.find(a => a.type === selectedMenu);

  const ddOptions = projects[selectedMenu].map(proj => ({
    key: proj.slug,
    value: proj.title
  }));

  const dropdownJsx = (
    <Dropdown
      options={ddOptions}
      defaultValue={getSelectedProjectTitle(
        projects[selectedMenu],
        selectedProjectSlug
      )}
      defaultText="Select a project"
    />
  );

  return (
    <Layout heading={heading}>
      <div className="project-container">
        <div className="project-menu">
          <div className="buttons">
            {projectTypes.map(projType => (
              <>
                <button
                  className={`main-menu ${selectedMenu === projType.type &&
                    'active'}`}
                  onClick={() => setSelectedMenu(projType.type)}
                >
                  {projType.label}
                  <FontAwesomeIcon
                    icon={
                      selectedMenu === projType.type
                        ? faAngleDown
                        : faAngleRight
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
                          >
                            {project.title}
                            <FontAwesomeIcon icon={faAngleRight} />
                          </a>
                        ) : (
                          <Link
                            to={`/projects/${selProjType.slug}/${project.slug}`}
                            className={
                              selectedProjectSlug === project.slug && 'active'
                            }
                          >
                            {project.title}
                            <FontAwesomeIcon icon={faAngleRight} />
                          </Link>
                        )
                      )}
                    </div>
                    <div className="project-list-tablet tablet-only">
                      {dropdownJsx}
                    </div>
                  </>
                )}
              </>
            ))}
          </div>
          <div className="project-list-mobile mobile-only-strict">
            {dropdownJsx}
          </div>
        </div>

        <div className="project-details">{children}</div>
      </div>
    </Layout>
  );
};

export default ProjectTemplate;
