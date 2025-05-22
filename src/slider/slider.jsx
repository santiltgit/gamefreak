import React, { useState, useEffect } from 'react';

function Slider() {
  const images = [
    {
      src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
      alt: 'Juego 1',
      title: 'Cyberpunk 2077',
      price: '$59.99',
      tags: ['Acción', 'RPG', 'Mundo Abierto']
    },
    {
      src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
      alt: 'Juego 2',
      title: 'Red Dead Redemption 2', 
      price: '$49.99',
      tags: ['Aventura', 'Mundo Abierto']
    },
    {
      src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
      alt: 'Juego 3',
      title: 'Elden Ring',
      price: '$69.99', 
      tags: ['RPG', 'Souls-like']
    }
  ];
  const [current, setCurrent] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        next();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [current, isPaused]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div 
      className="slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className={`slider-item ${idx === current ? 'active' : ''}`}
            onMouseEnter={() => setHoveredImage(idx)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={hoveredImage === idx ? 'zoomed' : ''}
            />
            <div className="slider-content">
              <h3>{img.title}</h3>
              <div className="tags">
                {img.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="tag">{tag}</span>
                ))}
              </div>
              <p className="price">{img.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-btn left" onClick={prev}>&lt;</button>
      <button className="slider-btn right" onClick={next}>&gt;</button>
      <div className="slider-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === current ? 'active' : ''}`}
            onClick={() => goTo(idx)}
            aria-label={`Ir a la imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
