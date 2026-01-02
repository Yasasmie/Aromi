// ImageCarousel.js
import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn left" onClick={prevImage}>&lt;</button>
      <img src={images[currentImage]} alt="Course Image" className="carousel-img" />
      <button className="carousel-btn right" onClick={nextImage}>&gt;</button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentImage === index ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;