import React, { useState, useRef, useCallback } from 'react';

interface ImageItem {
  url: string;
  urlBig: string;
  alt: string;
}

interface GalleryIslandProps {
  imageItems: ImageItem[];
}

const IMAGE_HEIGHT = 160; // px, uniform row height

const GalleryIsland: React.FC<GalleryIslandProps> = ({ imageItems }) => {
  const [overlayIndex, setOverlayIndex] = useState<number | null>(null);
  const [loadedBig, setLoadedBig] = useState<{ [key: number]: boolean }>({});
  const [visibleImages, setVisibleImages] = useState(20); // initial batch
  const galleryRef = useRef<HTMLDivElement>(null);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (!galleryRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = galleryRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 200) {
      setVisibleImages((prev) => Math.min(imageItems.length, prev + 20));
    }
  }, [imageItems.length]);

  // Overlay navigation
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

  // Keyboard & click outside
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

  // Touch/swipe
  const touchStart = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    if (delta > 50) prevImage();
    if (delta < -50) nextImage();
    touchStart.current = null;
  };

  // Infinite scroll effect
  React.useEffect(() => {
    const ref = galleryRef.current;
    if (!ref) return;
    ref.addEventListener('scroll', handleScroll);
    return () => ref.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Click outside overlay
  const overlayBgRef = useRef<HTMLDivElement>(null);
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayBgRef.current) closeOverlay();
  };

  return (
    <div className="w-full h-full" style={{ minHeight: '60vh' }}>
      <div
        ref={galleryRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-visible"
        style={{ maxHeight: '70vh' }}
      >
        {imageItems.slice(0, visibleImages).map((img, idx) => (
          <div
            key={img.url}
            className="relative group cursor-pointer flex items-center justify-center"
            style={{ height: IMAGE_HEIGHT }}
            onClick={() => showOverlay(idx)}
          >
            <img
              src={img.url}
              alt={img.alt}
              loading="lazy"
              className="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:z-20 group-hover:shadow-2xl group-hover:-rotate-2 group-hover:brightness-110"
              style={{ pointerEvents: 'none' }}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      {overlayIndex !== null && (
        <div
          ref={overlayBgRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 backdrop-blur-lg"
          onClick={handleOverlayClick}
        >
          <button
            className="absolute top-6 right-8 text-white text-3xl bg-black/40 rounded-full p-2 hover:bg-black/70 transition"
            onClick={closeOverlay}
            aria-label="Cerrar"
          >
            &#10005;
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/40 rounded-full p-2 hover:bg-black/70 transition"
            onClick={prevImage}
            aria-label="Anterior"
          >
            &#8592;
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/40 rounded-full p-2 hover:bg-black/70 transition"
            onClick={nextImage}
            aria-label="Siguiente"
          >
            &#8594;
          </button>
          <div
            className="flex items-center justify-center w-full h-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={imageItems[overlayIndex].urlBig}
              alt={imageItems[overlayIndex].alt}
              className="max-h-[80vh] w-auto mx-auto rounded-xl shadow-2xl transition-all duration-300"
              style={{ maxWidth: '90vw' }}
              loading={loadedBig[overlayIndex] ? 'eager' : 'lazy'}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryIsland;
