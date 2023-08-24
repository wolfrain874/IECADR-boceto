import React, { useState } from 'react';

import CardC from '../cards/CardC';

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return ( 
    <div className="sliderC-container">
      <button className="prev-btn" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider">
        {data.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <CardC
              name={item.name}
              imageUrl={item.imageUrl}
              description={item.description}
            />
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;