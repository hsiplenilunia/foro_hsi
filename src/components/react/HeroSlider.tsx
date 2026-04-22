import React, { useEffect, useState } from 'react';

const images = [
  'https://res.cloudinary.com/dokvwbz1c/image/upload/v1776880526/slider1.png',
  'https://res.cloudinary.com/dokvwbz1c/image/upload/v1776884040/slider2.png',
];

const HeroSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '320px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Slider"
          style={{
            width: 'auto',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'left center',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: index === i && fade ? 1 : 0,
            pointerEvents: index === i ? 'auto' : 'none',
            transition: 'opacity 0.4s ease',
          }}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'auto'}
        />
      ))}
    </div>
  );
};

export default HeroSlider;