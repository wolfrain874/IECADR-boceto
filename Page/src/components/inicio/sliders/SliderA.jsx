import React, { useState } from "react";
import CardA from "../cards/CardA";

const SliderA = ({ Agendadata }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Agendadata.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Agendadata.length) % Agendadata.length
    );
  };

  return (
    <div className="sliderA-container">
      <button className="prev-btn" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider">
        {Agendadata.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <CardA
              imageUrl={item.imageUrl}
              Agendatitle={item.Agendatitle}
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

export default SliderA;
