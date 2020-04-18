import React from 'react';
import Slider from 'react-slick';

const Showcase = ({ data }) => {
  return (
    <div className="showcase-container">
      {data ? (
        <Slider>
          {data.map((photo, i) => (
            <img src={photo.image} alt={photo.label} key={i} />
          ))}
        </Slider>
      ) : null}
    </div>
  );
};

export default Showcase;
