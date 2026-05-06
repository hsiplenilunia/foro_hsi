import React, { useState, useRef } from 'react';

interface ImageItem {
  url: string;
  urlBig: string;
  alt: string;
}

interface GalleryIslandProps {
  imageItems: ImageItem[];
}

// FadeImage: transición suave al cambiar de imagen en el lightbox
type FadeImageProps = { src: string; alt: string; loaded?: boolean };
const FadeImage = ({ src, alt, loaded }: FadeImageProps) => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, [src]);
  return (
    <img
      src={src}
      alt={alt}
      loading={loaded ? 'eager' : 'lazy'}
      className={`max-h-[85vh] w-auto mx-auto rounded-xl shadow-2xl transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ maxWidth: '90vw' }}
    />
  );
};

const GalleryIsland: React.FC<GalleryIslandProps> = ({ imageItems }) => {
  const [overlayIndex, setOverlayIndex] = useState<number | null>(null);
  const [loadedBig, setLoadedBig] = useState<{ [key: number]: boolean }>({});
  
  // Overlay navigation logic
  const showOverlay = (idx: number) => {
    setOverlayIndex(idx);
    setLoadedBig((prev) => ({ ...prev, [idx]: true }));
    document.body.style.overflow = 'hidden';
  };

  const closeOverlay = () => {
    setOverlayIndex(null);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    if (overlayIndex === null) return;
    const next = (overlayIndex + 1) % imageItems.length;
    setOverlayIndex(next);
    setLoadedBig((prev) => ({ ...prev, [next]: true }));
  };

  const prevImage = () => {
    if (overlayIndex === null) return;
    const prev = (overlayIndex - 1 + imageItems.length) % imageItems.length;
    setOverlayIndex(prev);
    setLoadedBig((prevLoaded) => ({ ...prevLoaded, [prev]: true }));
  };

  // Keyboard Shortcuts
  React.useEffect(() => {
    if (overlayIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeOverlay();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [overlayIndex]);

  // Touch/swipe for Mobile Overlay
  const touchStart = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    if (delta > 50) prevImage();
    if (delta < -50) nextImage();
    touchStart.current = null;
  };

  const overlayBgRef = useRef<HTMLDivElement>(null);
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayBgRef.current) closeOverlay();
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto py-8">
      {/* Grid de 5 Columnas (1 sola fila si hay 5 fotos) */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {imageItems.map((img, idx) => (
          <div
            key={img.url}
            className="group cursor-pointer relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            onClick={() => showOverlay(idx)}
          >
            <img
              src={img.url}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            {/* Overlay sutil al hacer hover */}
            <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white bg-blue-600/80 p-2 rounded-full scale-50 group-hover:scale-100 transition-transform">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {overlayIndex !== null && (
        <div
          ref={overlayBgRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 backdrop-blur-md"
          onClick={handleOverlayClick}
        >
          <div
            className="flex items-center justify-center w-full h-full p-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <FadeImage
              key={overlayIndex}
              src={imageItems[overlayIndex].urlBig}
              alt={imageItems[overlayIndex].alt}
              loaded={loadedBig[overlayIndex]}
            />
          </div>

          {/* Botones de Navegación */}
          <button
            className="absolute top-6 right-8 w-12 h-12 flex items-center justify-center text-navy text-2xl bg-white rounded-full hover:bg-blue-100 transition-colors z-[110]"
            onClick={closeOverlay}
            aria-label="Cerrar"
          >
            &#10005;
          </button>
          
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-navy text-3xl bg-white/90 rounded-full hover:bg-white transition-all shadow-lg hidden md:flex"
            onClick={prevImage}
            aria-label="Anterior"
          >
            &#8592;
          </button>
          
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-navy text-3xl bg-white/90 rounded-full hover:bg-white transition-all shadow-lg hidden md:flex"
            onClick={nextImage}
            aria-label="Siguiente"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryIsland;