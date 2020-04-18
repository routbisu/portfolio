import React from 'react';
import './Showcase.scss';

const Showcase = ({ data, projectType, projectDetails }) => {
  const imagesBaseUrl = `../../../project-photos/${projectType.slug}/${projectDetails.slug}/showcase/`;

  return (
    <div className="showcase-container">
      {data
        ? data.map((label, i) => (
            <div className="video-container">
              <img src={`${imagesBaseUrl}${i + 1}.jpg`} alt={label} key={i} />
              {label && <p className="label">{label}</p>}
            </div>
          ))
        : null}
    </div>
  );
};

export default Showcase;
