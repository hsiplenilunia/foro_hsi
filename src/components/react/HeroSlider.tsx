import React, { useEffect, useRef, useState } from 'react';

const images = [
  'https://res.cloudinary.com/dokvwbz1c/image/upload/v1776880526/slider1.png',
  'https://res.cloudinary.com/dokvwbz1c/image/upload/v1776884040/slider2.png',
];

const TRANSITION_MS = 600; // duración de la crossfade
const INTERVAL_MS = 3500; // tiempo entre cambios

const preloadImage = (src: string) =>
  new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => reject();
  });

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mountedRef = useRef(true);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    mountedRef.current = true;
    // Preload first image(s)
    preloadImage(images[0]).catch(() => {});
    // Start autoplay
    intervalRef.current = window.setInterval(() => {
      startTransitionTo((current + 1) % images.length);
    }, INTERVAL_MS);
    return () => {
      mountedRef.current = false;
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const startTransitionTo = async (targetIndex: number) => {
    if (isTransitioning || targetIndex === current) return;
    setIsTransitioning(true);

    // Preload target image to avoid flash
    try {
      await preloadImage(images[targetIndex]);
    } catch {
      // si falla la carga, aún intentamos la transición para no bloquear el slider
    }

    // Set next buffer
    setNext(targetIndex);

    // Espera un tick para que el DOM pinte la imagen next con opacity 0
    requestAnimationFrame(() => {
      // Después de un RAF, la clase CSS hará la transición de opacities
      // Esperamos la duración de la transición para finalizar el swap
      window.setTimeout(() => {
        if (!mountedRef.current) return;
        setCurrent(targetIndex);
        setNext(null);
        setIsTransitioning(false);
      }, TRANSITION_MS);
    });
  };

  // Handler manual (si quieres botones)
  const goTo = (i: number) => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        startTransitionTo((i + 1) % images.length);
      }, INTERVAL_MS);
    }
    startTransitionTo(i);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '811px',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-roledescription="carousel"
    >
      {/* Buffer A: imagen actual */}
      <img
        src={images[current]}
        alt={`Slider ${current + 1}`}
        style={{
          width: '688px',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'left center',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: isTransitioning && next !== null ? 0 : 1,
          pointerEvents: 'none',
          transition: `opacity ${TRANSITION_MS}ms cubic-bezier(0.4,0,0.2,1)`,
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
        }}
        loading="eager"
        fetchPriority="high"
      />

      {/* Buffer B: siguiente imagen (si existe) */}
      {next !== null && (
        <img
          src={images[next]}
          alt={`Slider ${next + 1}`}
          style={{
            width: '688px',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'left center',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 1,
            pointerEvents: 'none',
            transition: `opacity ${TRANSITION_MS}ms cubic-bezier(0.4,0,0.2,1)`,
            willChange: 'opacity, transform',
            transform: 'translateZ(0)',
          }}
          loading="lazy"
          fetchPriority="auto"
        />
      )}

      {/* Controles opcionales (ejemplo) */}
      <div style={{ position: 'absolute', bottom: 12, left: 12, zIndex: 40 }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              margin: 6,
              background: i === current ? '#fff' : 'rgba(255,255,255,0.4)',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
