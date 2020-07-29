import React from 'react';
import './Showcase.scss';

const Showcase = ({ data, projectType, projectDetails }) => {
  const imagesBaseUrl = `../../../project-photos/${projectType.slug}/${projectDetails.slug}/showcase/`;

  return (
    <div className="showcase-container">
      {data
        ? data.map((item, i) => (
            <div className="video-container" key={i}>
              <img src={`${imagesBaseUrl}${i + 1}.jpg`} alt={item.label} />
              {item.label && <p className="label">{item.label}</p>}
            </div>
          ))
        : null}
    </div>
  );
};

export default Showcase;
