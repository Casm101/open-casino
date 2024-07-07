/* eslint-disable @next/next/no-img-element */

// Global module imports
import React, { FC, useState, useEffect, useCallback } from 'react';


// Carousel component props declaration
interface CarouselProps {
  images: string[];
  duration?: number;
}


// Carousel component declaration
export const Carousel: FC<CarouselProps> = ({ images, duration = 6000 }) => {

  // Local state declaration
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  // Method to change displayed image
  const updateImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Logic to control image change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, duration);

    return () => clearInterval(interval);
  }, [totalImages, duration]);

  return (
    <div className="carouselStyled">

      {/* Image container */}
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>

      {/* Carousel dot indicators */}
      <div className="carousel-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => updateImage(idx)}
          >
            &#9679;
          </span>
        ))}
      </div>
    </div>
  );
};