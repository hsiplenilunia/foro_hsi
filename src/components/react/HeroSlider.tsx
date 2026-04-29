import React, { useEffect, useState } from 'react';

const images = [
  'https://res.cloudinary.com/dokvwbz1c/image/upload/v1776880526/slider1.png',
  'https://res.cloudinary.com/dokvwbz1c/image/upload/v1776884040/slider2.png',
  'https://res.cloudinary.com/dokvwbz1c/image/upload/v1776880526/slider1.png',
  'https://res.cloudinary.com/dokvwbz1c/image/upload/v1776884040/slider2.png',
];

const HeroSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Un solo intervalo limpio. No necesitamos estados intermedios.
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Aumentamos un poco el tiempo de exposición para que luzca el diseño
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '811px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Slider ${i + 1}`}
          style={{
            width: '688px',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'left center',
            position: 'absolute',
            top: 0,
            left: 0,
            // LOGICA DE CROSS-FADE:
            // Si es el índice actual, opacidad 1. Si no, 0.
            opacity: index === i ? 1 : 0,
            pointerEvents: index === i ? 'auto' : 'none',
            // Transmisión suave de 1.2 segundos para un efecto premium
            transition: 'opacity 1.2s ease-in-out',
            zIndex: index === i ? 10 : 0,
          }}
          // Estrategia de carga para evitar saltos de red
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'auto'}
        />
      ))}
    </div>
  );
};

export default HeroSlider;