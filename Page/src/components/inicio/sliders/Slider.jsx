import React, { useState } from 'react';

import Card from '../cards/Card';

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="slider-container">
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
            <Card
              title={item.title}
              imageUrl={item.imageUrl}
              description={item.description.substring(0, 800)}
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