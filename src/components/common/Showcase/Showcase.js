import React from 'react';
import './Showcase.scss';

const Showcase = ({ data, projectType, projectDetails }) => {
  const imagesBaseUrl = `../../../project-photos/${projectType.slug}/${projectDetails.slug}/showcase/`;
  console.log('imagesBaseUrl', imagesBaseUrl);
  return (
    <div className="showcase-container">
      {data ? (
        <>
          {/* <Slider dots={true} slidesPerRow={1}> */}
          {data.map((label, i) => (
            <img src={`${imagesBaseUrl}${i + 1}.jpg`} alt={label} key={i} />
          ))}
          {/* </Slider> */}
          {/* <div className="tablet-and-desktop-only">
            <Slider dots={true} slidesPerRow={4}>
              {data.map((label, i) => (
                <img src={`${imagesBaseUrl}${i + 1}.jpg`} alt={label} key={i} />
              ))}
            </Slider>
          </div>
          <div className="mobile-only-strict"></div> */}
        </>
      ) : null}
    </div>
  );
};

export default Showcase;
