import React, { useEffect, useState } from 'react';

const images = [
  '/hero-logo-mobile-min.webp',
  '/Auditorio-MedicaSur-scaled_28percent_transparent.webp',
];

const SLIDER_HEIGHT = 220; // px, adjust as needed

const HeroSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 400); // fade out duration
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='flex'
      style={{
        width: `100%`,
        height: '490px',
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
            width: '100%',
            height: '100%',
            objectFit: 'contain',
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
