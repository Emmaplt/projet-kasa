import React, { useState } from 'react';
import './Carrousel.scss';

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel">
      {pictures.length > 1 && ( 
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
      )}
      
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carrousel-image"
      />

      {pictures.length > 1 && (
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      )}

      <div className="image-counter">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
};

export default Carrousel;